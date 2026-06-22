const fs = require("fs");
const path = require("path");

const root = __dirname;
const output = path.join(root, "dist");

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

const assets = [
  "index.html",
  "portfolio-copy.css",
  "portfolio-copy.js",
  "hero-bruno.png",
  "bruno-expert.png",
  "logo-de-cria.png",
  "logo-bruno-motion.png",
  "offer-logo-bruno.png",
  "favicon-bruno.png",
  "no-code-pages-saturn.png",
  "pen-tool.png",
  "card1.png",
  "card2.png",
  "card3.png",
  "card4.png",
  "card5.png",
  "project-nickson.png",
  "project-mariana-links.png",
  "project-ia-de-verdade.png",
  "project-wing.png",
  "project-x32.png",
  ...Array.from(
    { length: 9 },
    (_, index) => `carousel-${String(index + 1).padStart(2, "0")}.gif`,
  ),
  ...Array.from(
    { length: 9 },
    (_, index) => `carousel-${String(index + 10).padStart(2, "0")}.png`,
  ),
];

for (const asset of assets) {
  fs.copyFileSync(path.join(root, asset), path.join(output, asset));
}

console.log(`Site estático gerado em dist/ com ${assets.length} arquivos.`);
