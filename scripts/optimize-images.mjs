// Gera as versões para web a partir das fotos originais em assets/originais.
// Ajuste técnico mínimo: leve correção do balanço de branco (as fotos vieram
// com dominante azulada). Não há retoque de rosto, corpo ou fisionomia.
import sharp from "sharp";
import { readdir } from "node:fs/promises";
import path from "node:path";

const SRC = "assets/originais";
const OUT = "public/images";

// Só estas fotos vieram com dominante azulada e recebem a leve correção de branco.
const WARM = new Set(["retrato-jaleco"]);

const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png)$/i.test(f));

for (const file of files) {
  const name = path.parse(file).name;
  let img = sharp(path.join(SRC, file)).rotate().resize({ width: 1400, withoutEnlargement: true });
  if (WARM.has(name)) img = img.linear([1.04, 1.0, 0.96], [0, 0, 0]);
  await img
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toFile(path.join(OUT, `${name}.jpg`));
  console.log(`ok  ${name}.jpg`);
}
