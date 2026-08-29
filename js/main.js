// JavaScript general de la web
// =========================================================
// MENÚ RESPONSIVE
// =========================================================

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-navigation");

if (menuButton && navigation) {

  menuButton.addEventListener("click", () => {

    const isOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute(
      "aria-expanded",
      String(!isOpen)
    );

    menuButton.classList.toggle("is-open");

    navigation.classList.toggle("is-open");

  });


  // Cerrar el menú al pulsar un enlace
  navigation.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      menuButton.classList.remove("is-open");

      navigation.classList.remove("is-open");

    });

  });

}


// =========================================================
// AÑO AUTOMÁTICO DEL PIE DE PÁGINA
// =========================================================

const currentYear =
  document.querySelector("#current-year");

if (currentYear) {

  currentYear.textContent =
    new Date().getFullYear();

}
