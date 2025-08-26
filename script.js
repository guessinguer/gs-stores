document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

window.addEventListener("scroll", () => {
  document.querySelectorAll(".feature-card").forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});
