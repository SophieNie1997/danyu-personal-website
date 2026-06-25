const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const renderWorkVisual = (item, index) => {
  const visual = item.visual;

  if (!visual) return "";

  if (visual.type === "video") {
    return `
      <figure class="work-visual work-visual-video" data-work-preview>
        <div class="work-phone-frame">
          <video
            controls
            muted
            playsinline
            preload="metadata"
            poster="${escapeHtml(visual.poster)}"
            aria-label="${escapeHtml(visual.label)}"
          >
            <source src="${escapeHtml(visual.src)}" type="video/mp4" />
          </video>
        </div>
        <figcaption>${escapeHtml(visual.caption)}</figcaption>
      </figure>
    `;
  }

  if (visual.type === "flow") {
    return `
      <figure class="work-visual work-visual-flow" data-work-preview>
        <div class="work-flow-preview" aria-label="${escapeHtml(item.title)}项目流程">
          <span class="work-flow-thread" aria-hidden="true"></span>
          ${visual.steps
            .map(
              (step, stepIndex) => `
                <div class="work-flow-step" style="--step-index: ${stepIndex};">
                  <span>${String(stepIndex + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>${escapeHtml(step.title)}</strong>
                    <small>${escapeHtml(step.text)}</small>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
        <figcaption>${escapeHtml(visual.caption)}</figcaption>
      </figure>
    `;
  }

  return `
    <figure class="work-visual work-visual-image" data-work-preview>
      <img src="${escapeHtml(visual.src)}" alt="${escapeHtml(visual.alt)}" loading="${index === 0 ? "eager" : "lazy"}" />
      <figcaption>${escapeHtml(visual.caption)}</figcaption>
    </figure>
  `;
};

const renderHeader = (content) => `
  <header class="site-header">
    <a class="brand-mark" href="#top" aria-label="${escapeHtml(content.meta.chineseName)}首页">
      <span>D</span>
      <span>${escapeHtml(content.meta.chineseName)}</span>
    </a>
    <nav class="site-nav" aria-label="主导航">
      ${content.nav
        .map((item) => `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`)
        .join("")}
    </nav>
  </header>
`;

const renderHero = (content) => `
  <section class="hero section-shell" id="top">
    <div class="hero-proof" aria-hidden="true">
      <img src="${escapeHtml(content.hero.proofImage)}" alt="" />
    </div>
    <div class="hero-copy">
      <p class="section-kicker">${escapeHtml(content.hero.eyebrow)}</p>
      <h1>${escapeHtml(content.hero.headline)}</h1>
      <p class="hero-intro">${escapeHtml(content.hero.intro)}</p>
      <div class="hero-actions" aria-label="Primary actions">
        <a class="button button-primary" href="#work">${escapeHtml(content.hero.primaryCta)}</a>
        <a class="button button-secondary" href="#story">${escapeHtml(content.hero.secondaryCta)}</a>
      </div>
    </div>
    <div class="artifact-orbit" aria-label="能力证据">
      ${content.hero.artifacts
        .map(
          (artifact, index) => `
            <div class="artifact-chip artifact-chip-${index + 1}">
              <span>${escapeHtml(artifact)}</span>
            </div>
          `
        )
        .join("")}
    </div>
  </section>
`;

const renderWork = (content) => `
  <section class="section-shell work-section" id="work" aria-labelledby="work-title">
    <div class="section-heading">
      <h2 id="work-title">作品作为证据</h2>
      <p>四个切面，分别展示 AI 教育、工作流设计、旅行数据和以学生为中心的产品思考。</p>
    </div>
    <div class="work-grid work-proof-wall">
      ${content.work
        .map(
          (item, index) => `
            <article class="work-card work-card-${index + 1} accent-${escapeHtml(item.accent)}" style="--work-index: ${index};">
              ${renderWorkVisual(item, index)}
              <div class="work-card-copy">
                <p class="card-label">${escapeHtml(item.category)}</p>
                <h3>${escapeHtml(item.title)}</h3>
                <dl>
                  <div>
                    <dt>问题</dt>
                    <dd>${escapeHtml(item.problem)}</dd>
                  </div>
                  <div>
                    <dt>角色</dt>
                    <dd>${escapeHtml(item.role)}</dd>
                  </div>
                  <div>
                    <dt>证据</dt>
                    <dd>${escapeHtml(item.evidence)}</dd>
                  </div>
                </dl>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  </section>
`;

const renderProjectsReel = (content) => `
  <section class="section-shell reel-section" id="projects-reel" aria-labelledby="projects-reel-title">
    <div class="reel-layout">
      <div class="reel-copy">
        <p class="card-label">${escapeHtml(content.reel.subtitle)}</p>
        <h2 id="projects-reel-title">${escapeHtml(content.reel.title)}</h2>
        <p>${escapeHtml(content.reel.description)}</p>
        <a class="button button-secondary" href="${escapeHtml(content.reel.fullSrc)}">${escapeHtml(content.reel.fullLabel)}</a>
      </div>
      <div class="reel-media">
        <div class="reel-video-frame">
          <video
            controls
            muted
            playsinline
            preload="metadata"
            poster="${escapeHtml(content.reel.poster)}"
            aria-label="${escapeHtml(content.reel.videoLabel)}"
          >
            <source src="${escapeHtml(content.reel.previewSrc)}" type="video/mp4" />
          </video>
        </div>
      </div>
      <div class="reel-points" aria-label="视频呈现的能力">
        ${content.reel.points
          .map(
            (point) => `
              <article>
                <h3>${escapeHtml(point.title)}</h3>
                <p>${escapeHtml(point.text)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  </section>
`;

const renderThinking = (content) => `
  <section class="section-shell thinking-section" id="thinking" aria-labelledby="thinking-title">
    <div class="section-heading narrow">
      <h2 id="thinking-title">我的思考方式</h2>
      <p>这些跨界经历背后有一个共同模式：把复杂讲清楚，再把它变成可以使用的下一步。</p>
    </div>
    <div class="thinking-list">
      ${content.thinking
        .map(
          (item) => `
            <article class="thinking-item">
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.text)}</p>
            </article>
          `
        )
        .join("")}
    </div>
  </section>
`;

const renderTimeline = (content) => `
  <section class="section-shell timeline-section" id="story" aria-labelledby="story-title">
    <div class="section-heading">
      <h2 id="story-title">一条非线性路径</h2>
      <p>这不是一条标准简历线，而是一条穿过理性训练、教育、AI 产品、自我重建和照顾的路径。</p>
    </div>
    <div class="timeline">
      ${content.timeline
        .map(
          (item) => `
            <article class="timeline-item">
              <div class="timeline-marker" aria-hidden="true"></div>
              <div>
                <p class="card-label">${escapeHtml(item.label)}</p>
                <h3>${escapeHtml(item.phase)}</h3>
                <p>${escapeHtml(item.text)}</p>
                <blockquote>${escapeHtml(item.note)}</blockquote>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  </section>
`;

const renderArchive = (content) => `
  <section class="section-shell archive-section" id="archive" aria-labelledby="archive-title">
    <div class="section-heading narrow">
      <h2 id="archive-title">生活也是作品集</h2>
      <p>电影、食物、城市、友谊、成为母亲，以及那些后来长成项目的小念头。</p>
    </div>
    <div class="archive-grid">
      ${content.archive
        .map(
          (item) => `
            <button class="archive-card" type="button" aria-expanded="false">
              <span class="card-label">${escapeHtml(item.type)}</span>
              <strong>${escapeHtml(item.title)}</strong>
              <span>${escapeHtml(item.text)}</span>
            </button>
          `
        )
        .join("")}
    </div>
  </section>
`;

const renderValues = (content) => `
  <section class="section-shell values-section" aria-labelledby="values-title">
    <div class="values-panel">
      <div>
        <p class="section-kicker">价值观</p>
        <h2 id="values-title">什么让一件事值得做</h2>
      </div>
      <div class="values-list">
        ${content.values
          .map(
            (item) => `
              <article>
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.text)}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  </section>
`;

const renderContact = (content) => `
  <section class="section-shell contact-section" id="contact" aria-labelledby="contact-title">
    <div>
      <p class="section-kicker">${escapeHtml(content.meta.alternateName)} / ${escapeHtml(content.meta.chineseName)}</p>
      <h2 id="contact-title">让下一个项目，有用，也有人味。</h2>
      <p>${escapeHtml(content.contact.note)}</p>
    </div>
    <div class="contact-links">
      ${content.contact.links
        .map(
          (link) => `
            <a class="button button-secondary" href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>
          `
        )
        .join("")}
    </div>
  </section>
`;

export const renderPage = (content) => `<!doctype html>
<html lang="${escapeHtml(content.meta.locale ?? "zh-CN")}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(content.meta.description)}" />
    <title>${escapeHtml(content.meta.name)} / ${escapeHtml(content.meta.alternateName)}</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="page-grain" aria-hidden="true"></div>
    ${renderHeader(content)}
    <main>
      ${renderHero(content)}
      ${renderWork(content)}
      ${renderProjectsReel(content)}
      ${renderThinking(content)}
      ${renderTimeline(content)}
      ${renderArchive(content)}
      ${renderValues(content)}
      ${renderContact(content)}
    </main>
    <script src="./interactions.js"></script>
  </body>
</html>`;
