"use client";

import Image from "next/image";
import { useState } from "react";
import { site, whatsappUrl } from "@/content/site";
import { InstagramLogo, PinIcon, WhatsAppIcon, WhatsAppLogo } from "../Icons";

const CHEVRON = `url("data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#6b5d54" stroke-width="1.5"><path d="m6 9 6 6 6-6"/></svg>',
)}")`;

/**
 * Formulário de contato que monta a mensagem e abre o WhatsApp.
 * Nenhum dado é enviado ou armazenado pelo site.
 */
export function ContactForm() {
  const { contactForm, contact, images } = site;
  const [name, setName] = useState("");
  const [subject, setSubject] = useState<string>(contactForm.subjectOptions[0]);
  const [error, setError] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = name.trim();
    if (trimmed.length < 2) {
      setError("Digite seu nome para continuar.");
      return;
    }
    setError("");
    const topic = subject === contactForm.subjectOptions[0] ? "uma avaliação" : `uma avaliação sobre ${subject.toLowerCase()}`;
    const message = `Olá, Dra. Isabelle! Meu nome é ${trimmed}. Conheci seu trabalho pelo site e gostaria de agendar ${topic}.`;
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contato" aria-labelledby="titulo-contato" className="relative overflow-hidden bg-sand">
      <div className="relative aspect-[4/3] w-full md:absolute md:inset-y-0 md:left-0 md:aspect-auto md:w-[55%]">
        <Image
          src={images.contact.src}
          alt={images.contact.alt}
          fill
          sizes="(min-width: 768px) 55vw, 100vw"
          className="object-cover"
          style={{ objectPosition: "50% 22%" }}
        />
      </div>

      <div className="container-site relative py-12 md:flex md:justify-end md:py-24">
        <div className="card-soft p-7 sm:p-10 md:w-[30rem]">
          <p className="eyebrow justify-center">Agendamento</p>
          <h2 id="titulo-contato" className="mt-3 text-center text-[1.9rem] md:text-[2.2rem]">
            {contactForm.title}
          </h2>
          <p className="mt-3 text-center text-ink-soft">{contactForm.text}</p>

          <form onSubmit={onSubmit} noValidate className="mt-7 space-y-4">
            <div>
              <label htmlFor="nome" className="mb-1.5 block text-[0.875rem] text-ink-soft">
                {contactForm.nameLabel}
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                autoComplete="given-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? "erro-nome" : undefined}
                className="h-12 w-full rounded-full border border-transparent bg-sand px-5 text-[0.9375rem] outline-none transition-colors focus:border-gold"
              />
              {error && (
                <p id="erro-nome" role="alert" className="mt-1.5 text-[0.8125rem] text-[#9a3b2e]">
                  {error}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="assunto" className="mb-1.5 block text-[0.875rem] text-ink-soft">
                {contactForm.subjectLabel}
              </label>
              <select
                id="assunto"
                name="assunto"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                style={{
                  backgroundImage: CHEVRON,
                  backgroundSize: "18px",
                  backgroundPosition: "right 1.1rem center",
                  backgroundRepeat: "no-repeat",
                }}
                className="h-12 w-full appearance-none rounded-full border border-transparent bg-sand px-5 pr-11 text-[0.9375rem] outline-none transition-colors focus:border-gold"
              >
                {contactForm.subjectOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn-primary w-full">
              <WhatsAppIcon className="h-[1.1rem] w-[1.1rem]" />
              {contactForm.submit}
            </button>
            <p className="text-center text-[0.75rem] text-ink-soft">
              Seus dados não são salvos no site. A mensagem é aberta no seu WhatsApp.
            </p>
          </form>

          <ul className="mt-8 space-y-2.5 border-t border-line pt-6 text-[0.9375rem]">
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:underline">
                <WhatsAppLogo className="h-5 w-5" />
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:underline">
                <InstagramLogo className="h-5 w-5" />
                {contact.instagramHandle}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <PinIcon className="mt-1 h-4 w-4 shrink-0 text-gold" />
              <span>
                {contact.neighborhood}, {contact.city}–{contact.state}
                <br />
                {contact.address ?? <span className="pending">endereço a preencher</span>}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
