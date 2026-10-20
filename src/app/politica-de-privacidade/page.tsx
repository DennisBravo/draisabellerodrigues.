import type { Metadata } from "next";
import Link from "next/link";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site, whatsappUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Como o site da ${site.professional.name} trata informações de visitantes, de acordo com a LGPD.`,
  alternates: { canonical: "/politica-de-privacidade" },
};

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "Quem é responsável",
    body: (
      <p>
        Este site pertence à {site.professional.name}, {site.professional.profession.toLowerCase()} em{" "}
        {site.contact.neighborhood}, {site.contact.city}–{site.contact.state}, responsável pelo tratamento de dados
        pessoais nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
      </p>
    ),
  },
  {
    title: "O que este site coleta",
    body: (
      <p>
        Este site não pede cadastro e não utiliza cookies de rastreamento, publicidade ou ferramentas de análise de
        audiência. O formulário de contato apenas monta uma mensagem e a abre no seu WhatsApp: nome e assunto não são
        enviados nem armazenados pelo site. As fontes tipográficas são servidas pelo próprio site, sem chamadas a
        serviços de terceiros.
      </p>
    ),
  },
  {
    title: "Registros técnicos",
    body: (
      <p>
        Como em qualquer site, o provedor de hospedagem pode registrar dados técnicos de acesso, como endereço IP,
        data, hora e navegador, para garantir segurança e funcionamento. Esses registros não são usados para
        identificar visitantes nem para fins de marketing.
      </p>
    ),
  },
  {
    title: "WhatsApp e Instagram",
    body: (
      <p>
        Ao clicar nos botões de WhatsApp ou Instagram, você é direcionado a esses serviços, que possuem políticas de
        privacidade próprias. As informações que você enviar por mensagem são usadas apenas para responder ao seu
        contato e organizar o agendamento, e são tratadas com sigilo profissional.
      </p>
    ),
  },
  {
    title: "Seus direitos",
    body: (
      <p>
        Você pode solicitar a qualquer momento a confirmação, o acesso, a correção ou a exclusão dos dados pessoais
        que tenha compartilhado em conversas de atendimento, além das demais garantias previstas no art. 18 da LGPD.
      </p>
    ),
  },
  {
    title: "Contato",
    body: (
      <p>
        Para dúvidas sobre esta política ou sobre seus dados, fale pelo{" "}
        <a href={whatsappUrl("Olá! Tenho uma dúvida sobre a política de privacidade do site.")} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-ink">
          WhatsApp {site.contact.phoneDisplay}
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main id="conteudo" className="py-20 md:py-28">
        <article className="container-site">
          <div className="max-w-[42rem]">
            <h1 className="text-[2.2rem] md:text-[2.8rem]">Política de Privacidade</h1>
            <p className="mt-4 text-[0.875rem] text-ink-soft">Última atualização: outubro de 2026</p>

            <div className="mt-14 space-y-10">
              {sections.map((s) => (
                <section key={s.title} className="border-t border-line pt-6">
                  <h2 className="text-[1.25rem]">{s.title}</h2>
                  <div className="mt-3 leading-[1.8] text-ink-soft">{s.body}</div>
                </section>
              ))}
            </div>

            <Link href="/" className="link-quiet mt-14">
              Voltar ao início
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
