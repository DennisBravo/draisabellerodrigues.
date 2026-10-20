"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site, whatsappUrl } from "@/content/site";
import { InstagramLogo, WhatsAppLogo } from "./Icons";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,border-color] duration-300 ${
        scrolled || open ? "border-b border-line bg-paper/95 backdrop-blur-sm" : "border-b border-line/60 bg-paper"
      }`}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Pular para o conteúdo
      </a>

      <div className="container-site flex h-[5rem] items-center justify-between md:h-[6rem]">
        <Link href="/#inicio" aria-label={`${site.professional.name}, início`} className="block">
          <Logo preload />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-4 md:flex lg:gap-8">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[0.875rem] font-medium text-ink-soft transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${site.contact.instagramHandle}`}
            className="hidden transition-transform hover:scale-105 lg:block"
          >
            <InstagramLogo className="h-8 w-8" />
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="-ml-5 hidden transition-transform hover:scale-105 lg:block"
          >
            <WhatsAppLogo className="h-8 w-8" />
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-full bg-cta px-5 py-2.5 text-[0.875rem] font-semibold text-white transition-colors hover:bg-cta-dark"
          >
            Agendar avaliação
          </a>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="h-[calc(100dvh-5rem)] overflow-y-auto bg-paper md:hidden"
      >
        <nav aria-label="Menu" className="container-site flex h-full flex-col justify-between pb-10 pt-8">
          <ul className="space-y-1">
            {site.nav.map((item, i) => (
              <li key={item.href}>
                <Link
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-[2rem] font-semibold leading-tight"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-5">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
              onClick={() => setOpen(false)}
            >
              Agendar avaliação
            </a>
            <p className="text-center text-sm text-ink-soft">
              {site.contact.neighborhood}, {site.contact.city}–{site.contact.state}
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
