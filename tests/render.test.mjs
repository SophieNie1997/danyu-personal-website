import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { siteContent } from "../site/content.mjs";
import { renderPage } from "../site/render.mjs";

test("rendered page includes the approved homepage structure", () => {
  const html = renderPage(siteContent);

  assert.match(html, /<html lang="zh-CN">/i);
  assert.match(html, /<nav/i);
  assert.match(html, /AI 工具，有用也有温度/);
  assert.match(html, /课程点评自动生成工作流/);
  assert.match(html, /把复杂讲清楚/);
  assert.match(html, /成为母亲/);
  assert.match(html, /href="#work">看作品/i);
  assert.match(html, /id="archive"/i);
  assert.match(html, /id="contact"/i);
});

test("rendered page uses Chinese navigation and section labels", () => {
  const html = renderPage(siteContent);

  assert.match(html, />作品</);
  assert.match(html, />思考方式</);
  assert.match(html, />故事</);
  assert.match(html, />生活档案</);
  assert.match(html, />联系</);
  assert.match(html, /作品作为证据/);
  assert.match(html, /生活也是作品集/);
});

test("rendered page references stylesheet, script, and proof artifacts", () => {
  const html = renderPage(siteContent);

  assert.match(html, /styles\.css/);
  assert.match(html, /interactions\.js/);
  assert.match(html, /portfolio-page-1\.png/);
  assert.match(html, /resume-page-1\.png/);
});

test("work section renders a visual evidence wall instead of text-only cards", () => {
  const html = renderPage(siteContent);

  assert.match(html, /work-proof-wall/);
  assert.match(html, /data-work-preview/);
  assert.match(html, /work-visual work-visual-video/);
  assert.match(html, /work-flow-preview/);
  assert.match(html, /work-visual work-visual-trust/);
  assert.match(html, /work-trust-preview/);
  assert.match(html, /data-trust-signal/);
  assert.match(html, /推荐频次/);
  assert.match(html, /原帖溯源/);
  assert.match(html, /ai-projects-reel-preview\.m4v/);
  assert.doesNotMatch(html, /Conceptual workflow artifact/);
});

test("rendered page includes the AI projects reel as lightweight dynamic evidence", () => {
  const html = renderPage(siteContent);

  assert.match(html, /id="projects-reel"/);
  assert.match(html, /AI Projects Reel/);
  assert.match(html, /<video[^>]+poster="\.\/artifacts\/ai-projects-poster\.png"/);
  assert.match(html, /preload="metadata"/);
  assert.match(html, /src="\.\/artifacts\/ai-projects-reel-preview\.m4v"/);
  assert.match(html, /href="\.\/artifacts\/ai-projects-reel-preview\.m4v"/);
  assert.doesNotMatch(html, /ai-projects-full\.m4v/);
  assert.match(html, /这些不是概念 demo/);
});

test("local preview server serves m4v files with a video mime type", async () => {
  const serverSource = await readFile(new URL("../scripts/serve.mjs", import.meta.url), "utf8");

  assert.match(serverSource, /"\.m4v": "video\/mp4"/);
});

test("build does not require oversized private video assets", async () => {
  const buildSource = await readFile(new URL("../scripts/build.mjs", import.meta.url), "utf8");

  assert.doesNotMatch(buildSource, /ai-projects-full\.m4v/);
  assert.match(buildSource, /ai-projects-reel-preview\.m4v/);
});

test("repository includes a GitHub Pages deployment workflow", async () => {
  const workflow = await readFile(new URL("../.github/workflows/pages.yml", import.meta.url), "utf8");

  assert.match(workflow, /name: Deploy Personal Website/);
  assert.match(workflow, /npm test/);
  assert.match(workflow, /npm run build/);
  assert.match(workflow, /actions\/upload-pages-artifact@v4/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
  assert.match(workflow, /path: dist/);
});

test("map page renders the approved inspiration-map entrance", async () => {
  const { mapContent } = await import("../site/mapContent.mjs");
  const { renderMapPage } = await import("../site/renderMap.mjs");
  const html = renderMapPage(mapContent);

  assert.match(html, /<html lang="zh-CN">/i);
  assert.match(html, /开始整理我的探索路径/);
  assert.match(html, /id="inspiration-map"/);
  assert.match(html, /data-map-card="ai-product"/);
  assert.match(html, /AI 产品与工具/);
  assert.match(html, /AI 金融教育/);
  assert.match(html, /工作流与 Agent/);
  assert.match(html, /数据与可信度/);
  assert.match(html, /动态作品影像/);
  assert.match(html, /跨界方法/);
  assert.match(html, /生活与价值观/);
  assert.match(html, /ai-projects-reel-preview\.m4v/);
  assert.match(html, /mapStyles\.css/);
  assert.match(html, /mapInteractions\.js/);
});

test("build script emits the inspiration-map page and assets", async () => {
  const buildSource = await readFile(new URL("../scripts/build.mjs", import.meta.url), "utf8");

  assert.match(buildSource, /renderMapPage/);
  assert.match(buildSource, /dist\/map\.html/);
  assert.match(buildSource, /mapStyles\.css/);
  assert.match(buildSource, /mapInteractions\.js/);
});

test("map interaction supports collection transition and reduced motion", async () => {
  const script = await readFile(new URL("../site/mapInteractions.js", import.meta.url), "utf8");
  const css = await readFile(new URL("../site/mapStyles.css", import.meta.url), "utf8");

  assert.match(script, /map-started/);
  assert.match(script, /aria-expanded/);
  assert.match(script, /keydown/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /transform/);
  assert.match(css, /opacity/);
});

test("map entrance organizes cards into intentional layers", async () => {
  const { mapContent } = await import("../site/mapContent.mjs");
  const layers = Array.from(new Set(mapContent.cards.map((card) => card.layer))).sort();
  const stacks = Array.from(new Set(mapContent.cards.map((card) => card.stack).filter(Boolean))).sort();
  const routeCards = mapContent.cards.filter((card) => card.route);

  assert.deepEqual(layers, ["archive", "evidence", "primary"]);
  assert.ok(mapContent.cards.length >= 24);
  assert.ok(stacks.length >= 4);
  assert.ok(mapContent.cards.filter((card) => card.stack).length >= 16);
  assert.ok(routeCards.every((card) => Number.isInteger(card.order)));
  assert.equal(routeCards[0].id, "ai-product");
  assert.ok(mapContent.cards.every((card) => card.x >= 12 && card.x <= 88));
  assert.ok(mapContent.cards.every((card) => card.y >= 12 && card.y <= 88));
});

test("map route renders as a normal clickable color-board after entry", async () => {
  const { mapContent } = await import("../site/mapContent.mjs");
  const { renderMapPage } = await import("../site/renderMap.mjs");
  const html = renderMapPage(mapContent);
  const css = await readFile(new URL("../site/mapStyles.css", import.meta.url), "utf8");

  assert.match(html, /data-route-board/);
  assert.match(html, /class="route-step tone-primary/);
  assert.match(html, /class="route-step tone-blue/);
  assert.match(html, /class="route-step tone-sage/);
  assert.match(html, /class="route-step tone-rose/);
  assert.match(html, /data-route-card="projects-reel"/);
  assert.match(css, /\.route-steps\s*{[^}]*grid-template-columns: repeat\(4, minmax\(0, 1fr\)\)/s);
  assert.doesNotMatch(css, /map-started \.map-entry-panel[^}]*opacity: 0\.18/s);
  assert.doesNotMatch(css, /map-started \.map-card\.is-route[^}]*opacity: 0\.46/s);
});
