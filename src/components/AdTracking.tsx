import Script from "next/script";
import { site } from "@/content/site";

/**
 * Pixel da Meta e tags do Google (configurados em `site.tracking`).
 * Sem IDs configurados, nada é carregado.
 * Cliques em links do WhatsApp (wa.me) viram conversão: "Contact" na Meta e
 * "whatsapp_click" no Google. O formulário de contato chama window.trackWhatsApp().
 */
export function AdTracking() {
  const { metaPixelId, googleTagIds, googleAdsWhatsAppConversion } = site.tracking;
  if (!metaPixelId && googleTagIds.length === 0) return null;

  const cfg = JSON.stringify({ meta: metaPixelId, gtag: googleTagIds, adsConv: googleAdsWhatsAppConversion });

  return (
    <>
      {metaPixelId && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${metaPixelId}');fbq('track','PageView');`}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img height="1" width="1" style={{ display: "none" }} alt="" src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`} />
          </noscript>
        </>
      )}
      {googleTagIds.length > 0 && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleTagIds[0]}`} strategy="afterInteractive" />
          <Script id="google-tag" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());${googleTagIds.map((id) => `gtag('config','${id}');`).join("")}`}
          </Script>
        </>
      )}
      <Script id="whatsapp-conversao" strategy="afterInteractive">
        {`(function(){var c=${cfg},last=0;
window.trackWhatsApp=function(origem){var now=Date.now();if(now-last<1500)return;last=now;
try{if(c.meta&&window.fbq)fbq('track','Contact',{content_name:origem||'whatsapp'});}catch(e){}
try{if(window.gtag){gtag('event','whatsapp_click',{origem:origem||'botao'});if(c.adsConv)gtag('event','conversion',{send_to:c.adsConv});}}catch(e){}};
document.addEventListener('click',function(ev){var a=ev.target&&ev.target.closest&&ev.target.closest('a[href*="wa.me/"]');if(a)window.trackWhatsApp(a.getAttribute('aria-label')||'botao');},true);})();`}
      </Script>
    </>
  );
}
