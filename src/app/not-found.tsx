import type { Metadata } from "next";
import Link from "next/link";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { whatsappUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <TopBar />
      <Header />
      <main id="conteudo" className="flex min-h-[70svh] items-center py-20">
        <div className="container-site">
          <p className="text-[5rem] font-semibold leading-none text-gold md:text-[6rem]">404</p>
          <h1 className="mt-6 max-w-[16ch] text-[2rem] md:text-[2.6rem]">Esta página não existe ou mudou de endereço.</h1>
          <p className="mt-6 max-w-[30rem] text-ink-soft">
            Volte ao início para conhecer os tratamentos ou fale diretamente pelo WhatsApp.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <Link href="/" className="btn-primary">
              Voltar ao início
            </Link>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="link-quiet self-start sm:self-auto">
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
