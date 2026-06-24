import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { siteContent } from "../site/content.mjs";
import { renderPage } from "../site/render.mjs";

await rm("dist", { recursive: true, force: true });
await mkdir("dist/artifacts", { recursive: true });

await writeFile("dist/index.html", renderPage(siteContent), "utf8");
await cp("site/styles.css", "dist/styles.css");
await cp("site/interactions.js", "dist/interactions.js");

const assets = [
  ["public/artifacts/portfolio-page-1.png", "dist/artifacts/portfolio-page-1.png"],
  ["public/artifacts/portfolio-page-3.png", "dist/artifacts/portfolio-page-3.png"],
  ["public/artifacts/resume-page-1.png", "dist/artifacts/resume-page-1.png"],
  ["public/artifacts/ai-projects-poster.png", "dist/artifacts/ai-projects-poster.png"],
  ["public/artifacts/ai-projects-reel-preview.m4v", "dist/artifacts/ai-projects-reel-preview.m4v"]
];

for (const [from, to] of assets) {
  await cp(from, to);
}

const html = await readFile("dist/index.html", "utf8");
if (!html.includes("AI 工具，有用也有温度")) {
  throw new Error("Build output is missing the hero headline.");
}

console.log("Built dist/index.html");
