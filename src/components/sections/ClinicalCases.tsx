import Image from "next/image";
import { site } from "@/content/site";
import { Dot } from "../Title";

/**
 * Casos clínicos reais e autorizados pela paciente.
 * Fica oculta enquanto `site.cases.items` estiver vazio.
 */
export function ClinicalCases() {
  const { cases } = site;
  if (cases.items.length === 0) return null;

  return (
    <section id="casos" aria-labelledby="titulo-casos" className="bg-sand py-20 md:py-24">
      <div className="container-site">
        <div className="text-center">
          <p className="eyebrow justify-center">Resultados</p>
          <h2 id="titulo-casos" className="mt-3 text-[2rem] md:text-[2.6rem]">
            <Dot text={cases.title} />
          </h2>
          <p className="mx-auto mt-3 max-w-[34rem] text-ink-soft">
            Sorrisos planejados e executados pela Dra. Isabelle no consultório.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cases.items.map((item) => (
            <li key={item.src}>
              <figure className="card-soft overflow-hidden">
                <div className="relative aspect-square bg-nude">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                {item.caption && (
                  <figcaption className="px-5 py-4 text-[0.9375rem] font-medium">{item.caption}</figcaption>
                )}
              </figure>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-[0.8125rem] text-ink-soft">{cases.note}</p>
      </div>
    </section>
  );
}
