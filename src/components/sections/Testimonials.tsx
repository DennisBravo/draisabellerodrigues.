import { site } from "@/content/site";

/**
 * Depoimentos reais e autorizados. Fica oculta enquanto `site.testimonials`
 * estiver vazio. Confirme as regras do CFO antes de publicar.
 */
export function Testimonials() {
  const items = site.testimonials;
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="titulo-depoimentos" className="bg-deep py-20 text-on-deep md:py-28">
      <div className="container-site">
        <h2 id="titulo-depoimentos" className="text-[2rem] md:text-[2.6rem]">
          O que dizem os pacientes.
        </h2>
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <li key={t.name} className="rounded-[4px] bg-paper p-7 text-ink">
              <blockquote className="text-[1rem] italic leading-relaxed text-ink-soft">{t.text}</blockquote>
              <p className="mt-5 text-[0.9375rem] font-semibold">{t.name}</p>
              <p className="text-[0.8125rem] text-ink-soft">{t.treatment}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
