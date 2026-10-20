import Link from "next/link";
import { croLabel, site, whatsappUrl } from "@/content/site";
import { InstagramLogo, PinIcon, WhatsAppLogo } from "./Icons";
import { Logo } from "./Logo";

export function Footer() {
  const { professional, contact, nav, treatments } = site;
  const cro = croLabel();

  return (
    <footer className="bg-deep text-on-deep">
      <div className="container-site grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo className="h-auto w-[17rem]" />
          <p className="mt-3 text-[0.875rem] text-on-deep/70">{professional.profession}</p>
          <p className="mt-1 text-[0.875rem] text-on-deep/70">
            {cro ?? (
              <>
                CRO-{professional.croState} <span className="pending text-on-deep/80">a preencher</span>
              </>
            )}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${contact.instagramHandle}`}
              className="transition-transform hover:scale-105"
            >
              <InstagramLogo className="h-9 w-9" />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="transition-transform hover:scale-105"
            >
              <WhatsAppLogo className="h-9 w-9" />
            </a>
          </div>
        </div>

        <FooterCol title="Navegação" className="lg:col-span-2">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-gold-bright">
                {item.label}
              </Link>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Tratamentos" className="lg:col-span-3">
          {treatments.map((t) => (
            <li key={t.id}>
              <Link href={`/#${t.id}`} className="hover:text-gold-bright">
                {t.name}
              </Link>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Contato" className="lg:col-span-3">
          <li>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-gold-bright">
              <WhatsAppLogo className="h-5 w-5" />
              {contact.phoneDisplay}
            </a>
          </li>
          <li className="flex items-start gap-2.5">
            <PinIcon className="mt-1 h-4 w-4 shrink-0 text-gold-bright" />
            <span>
              {contact.address ?? `${contact.neighborhood}, ${contact.city}–${contact.state}`}
            </span>
          </li>
          {contact.hours && <li>{contact.hours}</li>}
        </FooterCol>
      </div>

      <div className="border-t border-deep-line">
        <div className="container-site flex flex-col gap-3 py-6 text-[0.8125rem] text-on-deep/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {professional.name}</p>
          <Link href="/politica-de-privacidade" className="hover:text-gold-bright">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <p className="text-[1.15rem] font-semibold text-white">{title}</p>
      <span className="mt-3 block h-[2px] w-8 bg-gold-bright" aria-hidden="true" />
      <ul className="mt-5 space-y-2.5 text-[0.9375rem] text-on-deep/80">{children}</ul>
    </div>
  );
}
