import { chromium } from "playwright-core";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const chromePath =
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const target = process.argv[2] || "https://bruno-port.vercel.app/";
const outputDir = path.resolve("reference");

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true,
});

for (const viewport of [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 844 },
]) {
  const page = await browser.newPage({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: 1,
  });
  const requests = new Set();
  page.on("response", (response) => requests.add(response.url()));
  await page.goto(target, { waitUntil: "networkidle", timeout: 120_000 });
  await page.screenshot({
    path: path.join(outputDir, `${viewport.name}.png`),
    fullPage: true,
  });
  await writeFile(
    path.join(outputDir, `${viewport.name}-dom.html`),
    await page.content(),
  );
  await writeFile(
    path.join(outputDir, `${viewport.name}-requests.txt`),
    [...requests].sort().join("\n"),
  );
  await page.close();
}

await browser.close();
