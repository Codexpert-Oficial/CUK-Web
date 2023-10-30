
let headerContainer = document.querySelector(".header");
let headerLogo = document.querySelector(".nav__logo__container");

const checkScrolled = () => {
    if (window.scrollY > 0) {
        headerContainer.classList.add("header-active");
        headerLogo.classList.add("nav__logo-active");
    } else {
        headerContainer.classList.remove("header-active");
        headerLogo.classList.remove("nav__logo-active");
    }
}

window.addEventListener("scroll", checkScrolled);
window.addEventListener("load", checkScrolled);



const headerOpen = document.querySelector(".nav__barsIcon-open");
const headerClose = document.querySelector(".nav__barsIcon-close");
const headerLinksContainer = document.querySelector(".nav__elements__container");
const switchContainer = document.querySelector(".start__switch__container");

const changeHeader = (e) => {
    e.preventDefault()
    headerLinksContainer.classList.toggle("nav__elements__container-active");
    headerOpen.classList.toggle("nav__barsIcon-active");
    headerClose.classList.toggle("nav__barsIcon-active");
    if (switchContainer) {
        switchContainer.classList.toggle("start__switch__container-active");
    }
}

headerOpen.addEventListener("click", (e) => changeHeader(e));
headerClose.addEventListener("click", (e) => changeHeader(e));