
let headerContainer = document.querySelector(".header");
let headerLogo = document.querySelector(".nav__logo__container");

const checkScrolled = () => {
    if (window.scrollY > 0) {
        headerContainer.classList.add("header-active");
        headerLogo.classList.add("nav__logo-active")
    } else {
        headerContainer.classList.remove("header-active");
        headerLogo.classList.remove("nav__logo-active")
    }
}

window.addEventListener("scroll", checkScrolled);
window.addEventListener("load", checkScrolled);



const headerOpen = document.querySelector(".header__nav__open__icon");
const headerClose = document.querySelector(".header__nav__close__icon");
const headerLinksContainer = document.querySelector(".header__links__container");

headerOpen.addEventListener("click", () => {
    headerLinksContainer.style.left = "0";
    headerOpen.style.display = "none";
    headerClose.style.display = "flex";
})

headerClose.addEventListener("click", () => {
    headerLinksContainer.style.left = "1800px";
    headerOpen.style.display = "flex";
    headerClose.style.display = "none";
})