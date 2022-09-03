// offvanvas toggle

const offcanvasToggler = document.querySelector(".offcanvas-toggler");
const mainNavigation = document.getElementById("main-navigation");

offcanvasToggler.addEventListener("click", () => {
    offcanvasToggler.classList.toggle("active");
    mainNavigation.classList.toggle("active");
});