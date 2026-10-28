const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "मेन्यू बंद करें" : "मेन्यू खोलें");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const categoryButtons = document.querySelectorAll(".category");
const productCards = document.querySelectorAll(".product-card");
const emptyState = document.getElementById("emptyState");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    categoryButtons.forEach((item) => item.classList.toggle("active", item === button));
    let visibleCount = 0;

    productCards.forEach((card) => {
      const show = filter === "all" || card.dataset.category === filter;
      card.hidden = !show;
      if (show) visibleCount++;
    });

    emptyState.hidden = visibleCount > 0;
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
