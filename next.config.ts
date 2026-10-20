import type { NextConfig } from "next";

/**
 * Exportação estática para o GitHub Pages.
 * `npm run build` gera a pasta `out/`, que é publicada pelo workflow
 * em .github/workflows/deploy.yml.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    // O GitHub Pages não processa imagens no servidor; as fotos já são
    // otimizadas por `npm run images`.
    unoptimized: true,
  },
};

export default nextConfig;
