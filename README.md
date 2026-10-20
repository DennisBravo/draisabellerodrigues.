# Site oficial — Dra. Isabelle Rocha (versão 2)

Versão com estrutura de clínica: barra de informações, abertura dividida com foto até a borda,
faixa de diferenciais, tratamentos em cartões, sobre dividido, etapas da avaliação,
formulário que abre o WhatsApp e rodapé escuro em colunas. Depoimentos e casos clínicos já
existem no código, mas ficam ocultos até receberem conteúdo real e autorizado
(`testimonials` e `cases.items` em `site.ts`).

Site institucional em Next.js 16 (App Router), React 19, TypeScript e Tailwind CSS 4.
Uma página principal, política de privacidade e página 404, publicadas como site estático no GitHub Pages.

## Como rodar

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev        # ambiente local em http://localhost:3000
npm run build      # build de produção
npm run start      # serve o build
npm run lint       # ESLint
npm run typecheck  # TypeScript
```

## Onde editar

Todo o conteúdo fica em **`src/content/site.ts`**: textos, telefone, WhatsApp, Instagram,
CRO, endereço, horário, tratamentos e fotos. Não é preciso mexer nos componentes para
trocar um texto ou um dado de contato.

Campos com valor `null` (CRO, endereço, horário, formação) aparecem no site com a marca
**"a preencher"**. Basta preencher o valor para a marca sumir.

| O que | Onde |
|---|---|
| CRO | `professional.cro` (ex.: `"12345"`). Aparece no Sobre e no rodapé. |
| Endereço | `contact.address` |
| Horário | `contact.hours` |
| Formação | item `Formação` em `about.credentials` |
| Mensagem do WhatsApp | `contact.whatsappDefaultMessage` |
| Tratamentos | lista `treatments` |

### Fotos

- Originais recebidos: `assets/originais/` (não são publicados).
- Versões para web: `public/images/`, geradas com `npm run images`.
- O ajuste aplicado é apenas técnico: redimensionamento e uma leve correção do balanço
  de branco (as fotos vieram com dominante azulada). Não há retoque de rosto ou corpo.
- Para trocar uma foto, substitua o arquivo em `assets/originais/` mantendo o nome e rode
  `npm run images`.

### Casos clínicos

A seção existe no código (`src/components/sections/ClinicalCases.tsx`), mas fica oculta
enquanto `cases.items` estiver vazio. Inclua apenas fotos reais, com autorização escrita do
paciente e em conformidade com as normas vigentes do CFO/CRO. Exemplo:

```ts
items: [
  { src: "/images/casos/caso-01.jpg", alt: "Descrição objetiva do caso", caption: "Facetas em resina" },
],
```

## Publicação (GitHub Pages + domínio draisabellerodrigues.com.br)

O site é exportado como páginas estáticas (`output: "export"`) e publicado pelo
GitHub Actions a cada envio para a branch `main` (`.github/workflows/deploy.yml`).

1. No repositório do GitHub: **Settings → Pages → Build and deployment → Source:
   GitHub Actions**.
2. Ainda em **Settings → Pages → Custom domain**: `draisabellerodrigues.com.br`
   (o arquivo `public/CNAME` já contém esse domínio). Depois que o certificado
   for emitido, marque **Enforce HTTPS**.
3. No Registro.br, em **DNS → Editar zona** do domínio, crie:

   | Tipo | Nome | Valor |
   |---|---|---|
   | A | (vazio) | 185.199.108.153 |
   | A | (vazio) | 185.199.109.153 |
   | A | (vazio) | 185.199.110.153 |
   | A | (vazio) | 185.199.111.153 |
   | CNAME | www | USUARIO.github.io |

   Troque `USUARIO` pelo nome da conta do GitHub. A propagação do DNS pode levar
   algumas horas.

Para testar localmente a versão final: `npm run build` e sirva a pasta `out/`.

## O que já está implementado

- Menu responsivo com navegação por âncoras, menu mobile acessível (Esc fecha, foco gerenciado).
- Botões de WhatsApp com mensagem pré-preenchida e codificada; cada tratamento abre o
  WhatsApp com uma mensagem específica.
- Botão flutuante de WhatsApp que aparece após a abertura e some na seção de contato.
- Imagens otimizadas pelo `next/image` (AVIF/WebP, tamanhos responsivos).
- Metadados SEO, Open Graph com imagem gerada, favicon, apple-icon, sitemap.xml,
  robots.txt, dados estruturados (`Dentist`) só com informações confirmadas.
- Página 404 e Política de Privacidade coerente com o site (sem formulários, sem cookies,
  sem rastreamento, fontes servidas localmente).
- Acessibilidade: H1 único, hierarquia de títulos, link "pular para o conteúdo", foco
  visível, textos alternativos, contraste legível, respeito a `prefers-reduced-motion`.
- Cabeçalhos de segurança básicos em `next.config.ts`.
