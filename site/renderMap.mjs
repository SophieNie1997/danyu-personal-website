const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const routeIndexById = (steps) =>
  new Map(steps.map((step, index) => [step.id, index]));

const renderCard = (card, routeIndexes) => {
  const routeIndex = routeIndexes.has(card.id) ? routeIndexes.get(card.id) : -1;
  const routeClass = card.route ? "is-route" : "is-side";

  return `
    <button
      class="map-card tone-${escapeHtml(card.tone)} ${routeClass}"
      type="button"
      data-map-card="${escapeHtml(card.id)}"
      style="--x: ${Number(card.x)}%; --y: ${Number(card.y)}%; --rotation: ${Number(card.rotation)}deg; --route-index: ${routeIndex};"
      aria-label="${escapeHtml(card.label)}，${escapeHtml(card.category)}"
    >
      <span>${escapeHtml(card.category)}</span>
      <strong>${escapeHtml(card.label)}</strong>
    </button>
  `;
};

const renderStepMedia = (step) => {
  if (!step.video) return "";

  return `
    <div class="route-video-frame">
      <video
        controls
        muted
        playsinline
        preload="metadata"
        poster="${escapeHtml(step.poster)}"
        aria-label="${escapeHtml(step.title)}视频"
      >
        <source src="${escapeHtml(step.video)}" type="video/mp4" />
      </video>
    </div>
  `;
};

const renderRouteStep = (step, index) => `
  <article class="route-step ${index === 0 ? "is-open" : ""}" data-route-step data-step-id="${escapeHtml(step.id)}">
    <button class="route-step-button" type="button" data-route-toggle aria-expanded="${index === 0 ? "true" : "false"}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <strong>${escapeHtml(step.title)}</strong>
    </button>
    <div class="route-step-detail">
      <p>${escapeHtml(step.text)}</p>
      <small>${escapeHtml(step.detail)}</small>
      ${renderStepMedia(step)}
    </div>
  </article>
`;

export const renderMapPage = (content) => {
  const routeIndexes = routeIndexById(content.routeSteps);

  return `<!doctype html>
<html lang="${escapeHtml(content.meta.locale ?? "zh-CN")}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(content.meta.description)}" />
    <title>${escapeHtml(content.meta.title)}</title>
    <link rel="stylesheet" href="./mapStyles.css" />
  </head>
  <body>
    <main class="map-page-shell" id="inspiration-map">
      <section class="map-canvas" aria-labelledby="map-title">
        <div class="map-entry-panel">
          <p>${escapeHtml(content.entry.eyebrow)}</p>
          <h1 id="map-title">${escapeHtml(content.entry.title)}</h1>
          <span>${escapeHtml(content.entry.description)}</span>
          <button class="map-entry-button" type="button" data-map-start aria-expanded="false" aria-controls="guided-route">
            ${escapeHtml(content.entry.action)}
          </button>
          <a href="./index.html">返回作品主页</a>
        </div>
        <div class="map-card-layer" aria-label="散落的经历和作品卡片">
          ${content.cards.map((card) => renderCard(card, routeIndexes)).join("")}
        </div>
      </section>

      <section class="guided-route" id="guided-route" aria-labelledby="guided-route-title">
        <div class="route-heading">
          <h2 id="guided-route-title">一条从能力到人的路径</h2>
          <p>先看职业能力，再看这些能力如何连接到作品、方法和生活经验。</p>
        </div>
        <div class="route-steps">
          ${content.routeSteps.map(renderRouteStep).join("")}
        </div>
      </section>
    </main>
    <script src="./mapInteractions.js"></script>
  </body>
</html>`;
};
