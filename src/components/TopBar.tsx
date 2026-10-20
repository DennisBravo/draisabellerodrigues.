import { site, whatsappUrl } from "@/content/site";
import { WhatsAppLogo } from "./Icons";

/** Barra de informações acima do menu (só em telas médias e maiores). */
export function TopBar() {
  const { contact } = site;

  return (
    <div className="hidden bg-sand text-[0.8125rem] text-ink-soft md:block">
      <div className="container-site flex h-10 items-center justify-between gap-6">
        <p>
          <span className="font-medium text-gold">Localização:</span>{" "}
          {contact.address ?? `${contact.neighborhood}, ${contact.city}–${contact.state}`}
        </p>
        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ink">
          <WhatsAppLogo className="h-[1.1rem] w-[1.1rem]" />
          <span>
            <span className="font-medium text-gold">WhatsApp:</span> {contact.phoneDisplay}
          </span>
        </a>
        <p>
          <span className="font-medium text-gold">Horário:</span>{" "}
          {contact.hours ?? <span className="pending">a preencher</span>}
        </p>
      </div>
    </div>
  );
}
