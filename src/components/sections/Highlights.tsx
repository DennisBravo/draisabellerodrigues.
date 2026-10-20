import { site } from "@/content/site";
import { ToothCheckIcon, ToothHeartIcon, ToothIcon, ToothShineIcon } from "../Icons";

const icons = [ToothCheckIcon, ToothShineIcon, ToothIcon, ToothHeartIcon];

/** Faixa escura com os diferenciais do atendimento. */
export function Highlights() {
  return (
    <section aria-label="Diferenciais do atendimento" className="bg-deep text-on-deep">
      <ul className="container-site grid grid-cols-1 gap-y-6 py-9 sm:grid-cols-2 lg:grid-cols-4">
        {site.highlights.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <li key={item.title} className="flex items-start gap-3 lg:border-l lg:border-deep-line lg:pl-6 lg:first:border-l-0 lg:first:pl-0">
              <Icon className="h-6 w-6 shrink-0 text-gold-bright" />
              <div>
                <p className="text-[0.9375rem] font-semibold text-white">{item.title}</p>
                <p className="text-[0.8125rem] text-on-deep/70">{item.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
