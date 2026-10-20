import Image from "next/image";
import Link from "next/link";
import { site, whatsappUrl } from "@/content/site";
import { WhatsAppIcon } from "../Icons";

/** Abertura dividida: texto à esquerda, foto até a borda direita. */
export function Hero() {
  const { hero, images, contact } = site;

  return (
    <section id="inicio" aria-labelledby="titulo-inicio" className="relative overflow-hidden bg-[#dde6ee]">
      <div className="relative aspect-[5/4] w-full sm:aspect-[16/10] md:absolute md:inset-y-0 md:right-0 md:aspect-auto md:w-[50%]">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          preload
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          style={{ objectPosition: "55% 35%" }}
        />
      </div>

      <div className="container-site relative">
        <div className="py-12 md:flex md:min-h-[min(40rem,calc(100svh-7.5rem))] md:w-[48%] md:flex-col md:justify-center md:py-20 md:pr-8">
          <p className="eyebrow hero-in">Odontologia estética em {contact.neighborhood}</p>

          <h1
            id="titulo-inicio"
            className="hero-in mt-4 max-w-[13em] text-[2.3rem] sm:text-[2.8rem] lg:text-[3.4rem] [animation-delay:120ms]"
          >
            {hero.title}
          </h1>

          <p className="hero-in mt-5 max-w-[30rem] text-[1.0625rem] text-ink-soft [animation-delay:220ms]">
            {hero.text}
          </p>

          <div className="hero-in mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7 [animation-delay:320ms]">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WhatsAppIcon className="h-[1.1rem] w-[1.1rem]" />
              {hero.primaryCta}
            </a>
            <Link href="/#tratamentos" className="link-quiet self-start sm:self-auto">
              {hero.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
