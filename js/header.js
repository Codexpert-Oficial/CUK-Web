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