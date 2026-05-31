// Mobile navigation drawer toggle
(function () {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  if (!header || !toggle) return;

  toggle.addEventListener("click", function () {
    const isOpen = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close the drawer when a nav link is tapped
  header.querySelectorAll(".main-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      header.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();
