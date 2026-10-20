import Image from "next/image";
import { site } from "@/content/site";
import { CalendarIcon, ToothSearchIcon, ToothShineIcon, PlanIcon } from "../Icons";
import { Dot } from "../Title";

const icons = [CalendarIcon, ToothSearchIcon, PlanIcon, ToothShineIcon];

/** Etapas da avaliação: passos à esquerda, foto até a borda direita. */
export function Steps() {
  const { steps, images } = site;

  return (
    <section id="como-funciona" aria-labelledby="titulo-etapas" className="relative overflow-hidden bg-white">
      <div className="container-site relative">
        <div className="py-16 md:w-[52%] md:py-24 md:pr-8">
          <p className="eyebrow">Como funciona</p>
          <h2 id="titulo-etapas" className="mt-3 max-w-[18ch] text-[2rem] md:text-[2.6rem]">
            <Dot text={steps.title} />
          </h2>
          <p className="mt-4 max-w-[30rem] text-ink-soft">{steps.subtitle}</p>

          <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {steps.items.map((step, i) => {
              const Icon = icons[i % icons.length];
              return (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-bright bg-white text-gold" aria-hidden="true">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-[1.0625rem]">
                      <span className="sr-only">Etapa {i + 1}: </span>
                      {step.title}
                    </h3>
                    <p className="mt-1 text-[0.9375rem] text-ink-soft">{step.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <div className="relative hidden md:absolute md:inset-y-0 md:right-0 md:block md:w-[42%]">
        <Image
          src={images.steps.src}
          alt={images.steps.alt}
          fill
          sizes="(min-width: 768px) 42vw, 100vw"
          className="object-cover"
          style={{ objectPosition: "50% 30%" }}
        />
      </div>
    </section>
  );
}
