function initFilters() {
  const chips = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll(".cardproj");
  if (!chips.length || !cards.length) return;

  chips.forEach(btn => {
    btn.addEventListener("click", () => {
      const f = btn.getAttribute("data-filter");
      chips.forEach(x => x.classList.remove("active"));
      btn.classList.add("active");

      cards.forEach(card => {
        const cat = card.getAttribute("data-category");
        const show = (f === "all") || (cat === f);
        card.style.display = show ? "" : "none";
      });
    });
  });

  // default
  const first = chips[0];
  if (first) first.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  // Render per page
  renderFeatured();
  renderWork();
  renderProjectDetail();

  // Enable filters on work page
  initFilters();
});

