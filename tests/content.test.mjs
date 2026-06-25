import test from "node:test";
import assert from "node:assert/strict";
import { siteContent } from "../site/content.mjs";

test("site content carries the approved evidence-driven living museum structure", () => {
  assert.equal(siteContent.meta.locale, "zh-CN");
  assert.match(siteContent.hero.headline, /AI 工具/);
  assert.equal(siteContent.work.length, 4);
  assert.equal(siteContent.thinking.length, 5);
  assert.equal(siteContent.timeline.length, 6);
  assert.equal(siteContent.values.length, 5);
  assert.ok(siteContent.archive.length >= 8);
});

test("site content uses Chinese as the primary visible language", () => {
  assert.match(siteContent.meta.description, /个人作品集/);
  assert.match(siteContent.hero.primaryCta, /看作品/);
  assert.match(siteContent.work[0].title, /AI 金融课程/);
  assert.match(siteContent.thinking[0].title, /把复杂讲清楚/);
  assert.match(siteContent.timeline[5].phase, /成为母亲/);
});

test("selected work items include problem, role, and evidence fields", () => {
  for (const item of siteContent.work) {
    assert.ok(item.title.length > 0);
    assert.ok(item.problem.length > 0);
    assert.ok(item.role.length > 0);
    assert.ok(item.evidence.length > 0);
  }
});

test("selected work items include visual evidence metadata", () => {
  const visualTypes = new Set(siteContent.work.map((item) => item.visual?.type));

  assert.deepEqual(
    Array.from(visualTypes).sort(),
    ["flow", "image", "trust", "video"]
  );

  for (const item of siteContent.work) {
    assert.ok(item.visual, `${item.title} needs a visual evidence block`);
    assert.ok(item.visual.caption.length > 0);
  }
});

test("travel credibility project carries trust-analysis animation data", () => {
  const travelProject = siteContent.work.find((item) => item.title.includes("旅行攻略可信度"));

  assert.equal(travelProject.visual.type, "trust");
  assert.ok(travelProject.visual.signals.length >= 3);
  assert.ok(travelProject.visual.checks.length >= 3);
  assert.match(travelProject.visual.caption, /可信/);
});
