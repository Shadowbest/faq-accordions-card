const accordions = document.querySelectorAll(".accordion-trigger");

accordions.forEach(accordion => {
  accordion.addEventListener("click", toggleAccordion);
});

function toggleAccordion(e) {
  const targetEl = e.target;
  const associatedPanel = document.getElementById(targetEl.getAttribute("aria-controls"));

  if (targetEl.getAttribute("aria-expanded") === "true") {
    targetEl.setAttribute("aria-expanded", "false");
    associatedPanel.classList.remove("active");
    return;
  }

  closePanels();

  targetEl.setAttribute("aria-expanded", "true");
  associatedPanel.classList.add("active");
}

function closePanels() {
  accordions.forEach(accordion => {
    const associatedPanel = document.getElementById(accordion.getAttribute("aria-controls"));
    accordion.setAttribute("aria-expanded", "false");
    associatedPanel.classList.remove("active");
  });
}
