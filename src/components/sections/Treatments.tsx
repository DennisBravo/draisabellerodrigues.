import Image from "next/image";
import { site, treatmentMessage, whatsappUrl } from "@/content/site";
import {
  ToothCheckIcon,
  ToothFillingIcon,
  ToothImplantIcon,
  ToothScanIcon,
  ToothShineIcon,
  ToothVeneerIcon,
} from "../Icons";
import { Dot } from "../Title";

const iconFor: Record<string, (p: { className?: string }) => React.ReactElement> = {
  implantes: ToothImplantIcon,
  facetas: ToothVeneerIcon,
  restauracoes: ToothFillingIcon,
  reabilitacao: ToothCheckIcon,
  clareamento: ToothShineIcon,
  digital: ToothScanIcon,
};

export function Treatments() {
  const { treatmentsSection, treatments, treatmentsAside, images } = site;

  return (
    <section id="tratamentos" aria-labelledby="titulo-tratamentos" className="py-20 md:py-24">
      <div className="container-site">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">Tratamentos</p>
            <h2 id="titulo-tratamentos" className="mt-3 max-w-[18ch] text-[2rem] md:text-[2.6rem]">
              <Dot text={treatmentsSection.title} />
            </h2>
          </div>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 md:col-span-5 md:justify-self-end"
          >
            <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-sand">
              <Image src={images.hero.src} alt="" fill sizes="56px" className="object-cover" style={{ objectPosition: "56% 30%" }} />
            </span>
            <span>
              <span className="block text-[1.15rem] font-semibold group-hover:text-gold">{treatmentsAside.title}</span>
              <span className="block text-[0.875rem] text-ink-soft">{treatmentsAside.text}</span>
            </span>
          </a>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t) => {
            const Icon = iconFor[t.id] ?? ToothCheckIcon;
            return (
              <li key={t.id} id={t.id} className="card-soft flex flex-col p-7">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sand text-gold">
                  <Icon className="h-9 w-9" />
                </span>
                <h3 className="mt-6 text-[1.125rem]">{t.name}</h3>
                <span className="mt-3 h-[2px] w-8 bg-cta" aria-hidden="true" />
                <p className="mt-4 flex-1 text-[0.9375rem] text-ink-soft">{t.description}</p>
                <a
                  href={whatsappUrl(treatmentMessage(t.whatsappSubject))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-quiet mt-3 self-start"
                  aria-label={`${treatmentsSection.cta}: ${t.name} (abre o WhatsApp)`}
                >
                  {treatmentsSection.cta}
                </a>
              </li>
            );
          })}

        </ul>

        <p className="mt-10 text-center text-[0.8125rem] text-ink-soft">
          A indicação de cada tratamento depende de avaliação clínica individual.
        </p>
      </div>
    </section>
  );
}
