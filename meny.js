document.addEventListener("DOMContentLoaded", () => {
  // Mobil meny toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const menuNav = document.querySelector(".menu-nav");

  if (menuToggle && menuNav) {
    menuToggle.addEventListener("click", (e) => {
      // kun toggl .open på menyen — IKKE legge .open på selve knappen (unngå X)
      const isOpen = menuNav.classList.toggle("open");
      // visuell state via underline/active; oppdater aria
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Lukk meny ved klikk utenfor
    document.addEventListener("click", (e) => {
      if (!menuNav.contains(e.target) && !menuToggle.contains(e.target)) {
        menuNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });

    // Lukk meny når en lenke trykkes (mobil)
    menuNav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        menuNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Aktiv-state for nav links (visuell respons)
  document.querySelectorAll(".menu-nav a").forEach((a) => {
    a.addEventListener("click", function () {
      document
        .querySelectorAll(".menu-nav a")
        .forEach((x) => x.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
