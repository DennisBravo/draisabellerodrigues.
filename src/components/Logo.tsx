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
      alt="Isabelle Rocha"
      width={1000}
      height={299}
      preload={preload}
      sizes="(min-width: 1024px) 300px, 210px"
      className={className ?? "h-auto w-[12.5rem] md:w-[13rem] lg:w-[18rem]"}
    />
  );
}
