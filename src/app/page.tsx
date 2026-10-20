import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { Treatments } from "@/components/sections/Treatments";
import { About } from "@/components/sections/About";
import { Steps } from "@/components/sections/Steps";
import { ClinicalCases } from "@/components/sections/ClinicalCases";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactForm } from "@/components/sections/ContactForm";
import { site } from "@/content/site";

/** Dados estruturados apenas com informações confirmadas no briefing. */
function structuredData() {
  const { professional, contact, seo, images } = site;
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: professional.name,
    description: seo.description,
    url: site.url,
    image: new URL(images.hero.src, site.url).toString(),
    telephone: contact.phoneE164,
    sameAs: [contact.instagramUrl],
    address: {
      "@type": "PostalAddress",
      ...(contact.address ? { streetAddress: contact.address } : {}),
      addressLocality: `${contact.neighborhood}, ${contact.city}`,
      addressRegion: contact.state,
      addressCountry: "BR",
    },
    areaServed: `${contact.neighborhood}, ${contact.city}–${contact.state}`,
  };
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main id="conteudo">
        <Hero />
        <Highlights />
        <Treatments />
        <About />
        <Steps />
        <ClinicalCases />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData() }} />
    </>
  );
}
