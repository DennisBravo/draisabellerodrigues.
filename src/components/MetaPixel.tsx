import Script from "next/script";
import { site } from "@/content/site";

/**
 * Pixel da Meta: mede visitas e contatos vindos dos anúncios do Facebook/Instagram.
 * - PageView em toda página;
 * - Contact quando a pessoa toca em qualquer botão de WhatsApp;
 * - Lead quando envia o formulário de agendamento (ver ContactForm).
 */
export function MetaPixel() {
  const id = site.metaPixelId.trim();
  if (!/^\d{6,20}$/.test(id)) return null;
  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${id}');
fbq('track','PageView');
document.addEventListener('click',function(ev){var a=ev.target&&ev.target.closest&&ev.target.closest('a[href]');if(!a)return;var h=a.getAttribute('href')||'';h=h.toLowerCase();if(h.indexOf('wa.me')>-1||h.indexOf('api.whatsapp.com')>-1||h.indexOf('whatsapp:')===0){fbq('track','Contact');}},true);`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img height="1" width="1" style={{ display: "none" }} alt="" src={`https://www.facebook.com/tr?id=${id}&ev=PageView&noscript=1`} />
      </noscript>
    </>
  );
}
