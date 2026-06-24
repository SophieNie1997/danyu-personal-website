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
