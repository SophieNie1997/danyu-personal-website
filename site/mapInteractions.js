const startButton = document.querySelector("[data-map-start]");
const routeSection = document.querySelector("#guided-route");
const routeButtons = Array.from(document.querySelectorAll("[data-route-toggle]"));
const routeCards = Array.from(document.querySelectorAll("[data-map-card]"));
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const setExpanded = (button, expanded) => {
  button.setAttribute("aria-expanded", String(expanded));
};

const openRouteStep = (stepId) => {
  const targetStep = document.querySelector(`[data-step-id="${stepId}"]`);
  if (!targetStep) return;

  document.querySelectorAll("[data-route-step]").forEach((step) => {
    const isTarget = step === targetStep;
    step.classList.toggle("is-open", isTarget);
    const toggle = step.querySelector("[data-route-toggle]");
    if (toggle) setExpanded(toggle, isTarget);
  });
};

const startJourney = (targetStepId) => {
  document.body.classList.add("map-started");
  if (startButton) setExpanded(startButton, true);
  if (targetStepId) openRouteStep(targetStepId);

  const delay = reducedMotion.matches ? 0 : 620;
  window.setTimeout(() => {
    routeSection?.scrollIntoView({
      block: "start",
      behavior: reducedMotion.matches ? "auto" : "smooth"
    });
  }, delay);
};

const resetJourney = () => {
  document.body.classList.remove("map-started");
  if (startButton) {
    setExpanded(startButton, false);
    startButton.focus();
  }
};

startButton?.addEventListener("click", () => startJourney("ai-product"));

routeCards.forEach((card) => {
  card.addEventListener("click", () => startJourney(card.dataset.mapCard));
});

routeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const step = button.closest("[data-route-step]");
    if (!step) return;
    const isOpen = step.classList.contains("is-open");

    document.querySelectorAll("[data-route-step]").forEach((item) => {
      item.classList.remove("is-open");
      const toggle = item.querySelector("[data-route-toggle]");
      if (toggle) setExpanded(toggle, false);
    });

    if (!isOpen) {
      step.classList.add("is-open");
      setExpanded(button, true);
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.body.classList.contains("map-started")) {
    resetJourney();
  }
});
