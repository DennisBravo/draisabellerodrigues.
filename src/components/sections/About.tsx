import Image from "next/image";
import { croLabel, site, whatsappUrl } from "@/content/site";
import { Dot } from "../Title";

function PlusCircle() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0" aria-hidden="true" focusable="false">
      <circle cx="10" cy="10" r="10" fill="var(--color-gold-bright)" />
      <path d="M10 6v8M6 10h8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/** Sobre dividido: foto à esquerda até a borda, texto à direita. */
export function About() {
  const { about, aboutChecklist, images } = site;
  const cro = croLabel();
  const credentials = about.credentials.map((item) =>
    item.label === "Registro" ? { ...item, value: cro ?? item.value } : item,
  );

  return (
    <section id="sobre" aria-labelledby="titulo-sobre" className="relative overflow-hidden bg-sand">
      <div className="relative aspect-[4/5] w-full sm:aspect-[16/11] md:absolute md:inset-y-0 md:left-0 md:aspect-auto md:w-[48%]">
        <Image
          src={images.about.src}
          alt={images.about.alt}
          fill
          sizes="(min-width: 768px) 48vw, 100vw"
          className="object-cover"
          style={{ objectPosition: "45% 30%" }}
        />
      </div>

      <div className="container-site relative">
        <div className="py-14 md:ml-[52%] md:py-24 md:pl-8">
          <p className="eyebrow">Sobre a Dra. Isabelle</p>
          <h2 id="titulo-sobre" className="mt-3 max-w-[18ch] text-[2rem] md:text-[2.6rem]">
            <Dot text={about.title} />
          </h2>
          <p className="mt-5 max-w-[34rem] text-ink-soft">{about.text}</p>

          <ul className="mt-7 grid max-w-[34rem] gap-x-6 gap-y-3 sm:grid-cols-2">
            {aboutChecklist.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[0.9375rem]">
                <PlusCircle />
                {item}
              </li>
            ))}
          </ul>

          <dl className="mt-8 max-w-[34rem] border-t border-line text-[0.9375rem]">
            {credentials.map((item) => (
              <div key={item.label} className="flex flex-col gap-1 border-b border-line py-3 sm:flex-row sm:gap-6">
                <dt className="w-28 shrink-0 text-[0.875rem] font-medium text-ink-soft">{item.label}</dt>
                <dd>{item.value ?? <span className="pending">a preencher</span>}</dd>
              </div>
            ))}
          </dl>

          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
            Agendar avaliação
          </a>
        </div>
      </div>
    </section>
  );
}
