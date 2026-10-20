"use client";

import { useEffect, useState } from "react";
import { whatsappUrl } from "@/content/site";
import { WhatsAppIcon } from "./Icons";

/**
 * Botão flutuante discreto. Aparece depois da abertura e some quando a seção
 * de contato está na tela, para não duplicar a ação principal.
 */
export function FloatingWhatsApp() {
  const [pastHero, setPastHero] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const contact = document.getElementById("contato");
    let observer: IntersectionObserver | undefined;
    if (contact && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(([entry]) => setContactVisible(entry.isIntersecting), {
        threshold: 0.2,
      });
      observer.observe(contact);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  const visible = pastHero && !contactVisible;

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar avaliação pelo WhatsApp"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-8px_rgba(37,211,102,0.7)] transition-[opacity,transform] duration-500 hover:bg-[#1ebe5a] md:bottom-8 md:right-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <WhatsAppIcon className="h-[1.6rem] w-[1.6rem]" />
    </a>
  );
}
