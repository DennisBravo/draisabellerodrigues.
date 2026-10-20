/**
 * Conteúdo central do site.
 *
 * Todos os textos, dados de contato e imagens ficam aqui. Para alterar o site,
 * edite este arquivo. Campos com valor `null` ainda não foram confirmados:
 * eles aparecem como "a preencher" no site até receberem o dado real.
 *
 * Regra do projeto: não inventar CRO, títulos, especializações, tempo de
 * experiência, equipamentos ou resultados.
 */

export type Treatment = {
  id: string;
  name: string;
  description: string;
  /** Texto curto usado na mensagem de WhatsApp desse tratamento. */
  whatsappSubject: string;
};

export type ClinicalCase = {
  src: string;
  alt: string;
  caption?: string;
};

export type Credential = {
  label: string;
  value: string | null;
};

export const site = {
  /** Domínio definitivo. Definir NEXT_PUBLIC_SITE_URL na hospedagem. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://draisabellerodrigues.com.br",
  locale: "pt_BR",

  professional: {
    name: "Dra. Isabelle Rocha",
    shortName: "Isabelle Rocha",
    profession: "Cirurgiã-dentista",
    /** Número do CRO-DF. Obrigatório antes da publicação. Ex.: "12345". */
    cro: "14.479" as string | null,
    croState: "DF",
    /** Vínculo profissional informado no briefing. */
    affiliation: "IOSP Odontologia Integrada",
  },

  contact: {
    phoneDisplay: "(61) 99816-0478",
    phoneE164: "+5561998160478",
    whatsappNumber: "5561998160478",
    whatsappDefaultMessage:
      "Olá, Dra. Isabelle! Conheci seu trabalho pelo site e gostaria de agendar uma avaliação.",
    instagramHandle: "@dra.isabellerrs",
    instagramUrl: "https://www.instagram.com/dra.isabellerrs/",
    neighborhood: "Taguatinga",
    city: "Brasília",
    state: "DF",
    /** Endereço completo (rua, número, sala, CEP). A confirmar. */
    address: "Alameda Shopping, Torre A, Sala 105 – CSB 02, Lotes 01/04, Taguatinga, Brasília–DF, CEP 72015-901" as string | null,
    addressShort: "Alameda Shopping, Torre A, Sala 105 – Taguatinga",
    mapsUrl: "https://share.google/f7xVPQvSakPlxmJCm",
    /** Perfil no Google (Google Meu Negócio). */
    googleProfileUrl: "https://share.google/f7xVPQvSakPlxmJCm",
    /** Partes do endereço para dados estruturados e Google Meu Negócio. */
    street: "CSB 02, Lotes 01/04, Torre A, Sala 105 (Alameda Shopping)",
    postalCode: "72015-901",
    /** Horário de atendimento. A confirmar. Ex.: "Seg. a sex., 8h às 18h". */
    hours: "Segunda a sábado, 7h às 20h" as string | null,
  },

  seo: {
    title: "Dra. Isabelle Rocha | Odontologia Estética em Taguatinga",
    description:
      "Conheça a Dra. Isabelle Rocha. Odontologia estética, implantodontia e reabilitação oral em Taguatinga, Brasília. Entre em contato e agende sua avaliação.",
  },

  images: {
    hero: {
      src: "/images/inicio.jpg",
      alt: "Dra. Isabelle Rocha sorrindo no consultório",
      width: 907,
      height: 642,
    },
    /** Foto ao lado do formulário de agendamento. */
    contact: {
      src: "/images/retrato-jaleco.jpg",
      alt: "Dra. Isabelle Rocha de jaleco branco, com os braços cruzados",
      width: 1400,
      height: 2100,
    },
    about: {
      src: "/images/atendimento-lupa.jpg",
      alt: "Dra. Isabelle Rocha atendendo um paciente com lupas de aumento",
      width: 1092,
      height: 1467,
    },
    steps: {
      src: "/images/atendimento-procedimento.jpg",
      alt: "Dra. Isabelle Rocha acompanhando um procedimento no consultório",
      width: 1065,
      height: 1482,
    },
  },

  hero: {
    title: "Seu sorriso, com naturalidade e sofisticação.",
    text: "Odontologia estética e reabilitadora com cuidado individualizado, precisão e atenção aos detalhes.",
    primaryCta: "Agendar avaliação",
    secondaryCta: "Conhecer tratamentos",
  },

  about: {
    title: "Beleza e saúde em cada detalhe.",
    text: "Sou a Dra. Isabelle Rocha, cirurgiã-dentista, com atuação em implantodontia e odontologia estética. Acredito que cada sorriso merece um olhar individualizado, respeitando suas características, necessidades e naturalidade.",
    /**
     * Informações profissionais verificadas. Itens com `value: null`
     * aparecem como "a preencher". Para ocultar um item, remova-o da lista.
     */
    credentials: [
      { label: "Registro", value: null },
      { label: "Formação", value: "Cirurgiã-dentista" },
      { label: "Atendimento", value: "Alameda Shopping, Taguatinga" },
    ] as Credential[],
  },

  treatmentsSection: {
    title: "Cuidado completo para o seu sorriso.",
    subtitle: "Tratamentos planejados de acordo com as necessidades de cada paciente.",
    cta: "Solicitar avaliação",
  },

  treatments: [
    {
      id: "implantes",
      name: "Implantes dentários",
      description:
        "Soluções para reabilitação de dentes ausentes, mediante avaliação e planejamento individualizado.",
      whatsappSubject: "implantes dentários",
    },
    {
      id: "facetas",
      name: "Facetas e lentes em resina",
      description:
        "Planejamento estético voltado à harmonia, proporção e naturalidade do sorriso.",
      whatsappSubject: "facetas e lentes em resina",
    },
    {
      id: "restauracoes",
      name: "Restaurações estéticas",
      description: "Tratamentos restauradores com atenção à saúde, função e estética dental.",
      whatsappSubject: "restaurações estéticas",
    },
    {
      id: "reabilitacao",
      name: "Reabilitação oral",
      description:
        "Planejamento de tratamentos voltados à recuperação da função e estética bucal.",
      whatsappSubject: "reabilitação oral",
    },
    {
      id: "clareamento",
      name: "Clareamento dental",
      description:
        "Opções para melhorar a tonalidade dos dentes, quando clinicamente indicadas.",
      whatsappSubject: "clareamento dental",
    },
    {
      id: "digital",
      name: "Odontologia digital e escaneamento intraoral CAD/CAM",
      description:
        "Escaneamento intraoral e planejamento digital com tecnologia CAD/CAM, para um processo mais preciso e confortável.",
      whatsappSubject: "odontologia digital e escaneamento intraoral",
    },
  ] as Treatment[],

  philosophy: {
    title: "Cada sorriso tem sua própria essência.",
    text: "Um planejamento cuidadoso considera não apenas a estética, mas também a saúde bucal, a função e as características individuais de cada paciente.",
    principles: [
      "Planejamento individualizado",
      "Atenção aos detalhes",
      "Naturalidade",
      "Cuidado em todas as etapas",
    ],
  },

  /**
   * Casos clínicos. A seção só aparece quando houver ao menos uma foto real,
   * com autorização do paciente e em conformidade com as normas do CFO/CRO.
   */
  cases: {
    title: "Casos clínicos.",
    note: "Imagens publicadas com autorização dos pacientes. Resultados variam de acordo com cada caso.",
    /**
     * Fotos de resultados enviadas pela Dra. Isabelle. Antes de publicar,
     * confirme que há autorização por escrito de cada paciente (CFO).
     */
    items: [
      { src: "/images/resultado-1.jpg", alt: "Sorriso de paciente após tratamento estético", caption: "Tratamento estético" },
      { src: "/images/resultado-2.jpg", alt: "Detalhe do sorriso de paciente após tratamento estético", caption: "Tratamento estético" },
      { src: "/images/resultado-3.jpg", alt: "Sorriso de paciente com dentes harmonizados após tratamento", caption: "Tratamento estético" },
      { src: "/images/resultado-4.jpg", alt: "Sorriso de paciente após reabilitação estética", caption: "Tratamento estético" },
    ] as ClinicalCase[],
  },

  contactSection: {
    title: "Seu próximo sorriso começa com uma conversa.",
    text: "Entre em contato para saber mais sobre os tratamentos e agendar sua avaliação.",
    cta: "Agendar pelo WhatsApp",
  },

  /** Faixa escura abaixo da abertura: princípios reais de atendimento, sem números inventados. */
  highlights: [
    { title: "Planejamento individualizado", text: "Cada caso avaliado com calma" },
    { title: "Atenção aos detalhes", text: "Precisão em cada etapa" },
    { title: "Naturalidade", text: "Resultados em harmonia com você" },
    { title: "Cuidado contínuo", text: "Acompanhamento após o tratamento" },
  ],

  /** Cartão ao lado do título de tratamentos. */
  treatmentsAside: {
    title: "Fale com a Dra. Isabelle",
    text: "Tire suas dúvidas e agende a sua primeira avaliação.",
  },

  aboutChecklist: [
    "Atendimento individualizado",
    "Planejamento antes de cada tratamento",
    "Foco em naturalidade",
    "Atuação em implantodontia e estética",
  ],

  /** Etapas reais do atendimento (é uma sequência, por isso numerada). */
  steps: {
    title: "Como funciona a sua avaliação.",
    subtitle: "Quatro etapas, do primeiro contato ao acompanhamento.",
    items: [
      { title: "Contato", text: "Você fala com a Dra. Isabelle pelo WhatsApp e agenda o horário." },
      { title: "Avaliação", text: "Consulta para entender suas necessidades e examinar o sorriso." },
      { title: "Planejamento", text: "Apresentação das opções de tratamento indicadas para o seu caso." },
      { title: "Tratamento", text: "Execução com atenção aos detalhes e acompanhamento depois." },
    ],
  },

  /**
   * Depoimentos reais, com autorização por escrito do paciente.
   * A seção fica oculta enquanto a lista estiver vazia.
   * Atenção: o CFO restringe o uso de depoimentos em publicidade; confirme
   * com a Dra. Isabelle antes de publicar qualquer item.
   */
  testimonials: [] as { name: string; treatment: string; text: string }[],

  /** Formulário que monta a mensagem e abre o WhatsApp (nada é enviado ao site). */
  contactForm: {
    title: "Quer agendar sua avaliação?",
    text: "Preencha abaixo e continue a conversa pelo WhatsApp.",
    nameLabel: "Seu nome",
    subjectLabel: "Assunto",
    subjectOptions: [
      "Avaliação geral",
      "Implantes dentários",
      "Facetas e lentes em resina",
      "Restaurações estéticas",
      "Reabilitação oral",
      "Clareamento dental",
      "Odontologia digital e escaneamento intraoral",
    ],
    submit: "Continuar no WhatsApp",
  },

  nav: [
    { label: "Tratamentos", href: "/#tratamentos" },
    { label: "Sobre", href: "/#sobre" },
    { label: "Como funciona", href: "/#como-funciona" },
    { label: "Contato", href: "/#contato" },
  ],
} as const;

/** Monta o link do WhatsApp com a mensagem codificada corretamente. */
export function whatsappUrl(message: string = site.contact.whatsappDefaultMessage): string {
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Mensagem de WhatsApp para um tratamento específico. */
export function treatmentMessage(subject: string): string {
  return `Olá, Dra. Isabelle! Conheci seu trabalho pelo site e gostaria de agendar uma avaliação sobre ${subject}.`;
}

export const croLabel = (): string | null =>
  site.professional.cro ? `CRO-${site.professional.croState} ${site.professional.cro}` : null;
