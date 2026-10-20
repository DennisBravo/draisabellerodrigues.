import Image from "next/image";

/**
 * Logo oficial horizontal da Dra. Isabelle Rocha (arte original da cliente,
 * fundo transparente). Arquivo: public/images/logo-horizontal.png.
 * A versão vertical fica em public/images/logo.png.
 */
export function Logo({ className, preload = false }: { className?: string; preload?: boolean }) {
  return (
    <Image
      src="/images/logo-horizontal.png"
      alt="Dra. Isabelle Rocha"
      width={1100}
      height={283}
      preload={preload}
      sizes="(min-width: 1024px) 300px, 210px"
      className={className ?? "h-auto w-[13rem] md:w-[13.5rem] lg:w-[19rem]"}
    />
  );
}
