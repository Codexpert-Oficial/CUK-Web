let imgs = document.querySelectorAll(".gallery__img");
let modal__container = document.querySelector(".modal__container");
let modal__img = document.querySelector(".modal__img");
let modal__close = document.querySelector(".modal__close__icon__container");

let load__more__buttons = document.querySelectorAll(".load__more");
let gallery__containers = document.querySelectorAll(".gallery__container__hidden");

imgs.forEach((img) => {
  img.addEventListener("click", () => {
    modal__container.style.display = "flex";
    let getBackgroundImg = window.getComputedStyle(img).backgroundImage;
    let backgroundImage = getBackgroundImg.substring(5);
    backgroundImage = backgroundImage.slice(0, -2);
    modal__img.setAttribute("src", backgroundImage);
  });
});

modal__close.addEventListener("click", () => {
  modal__container.style.display = "none";
});

modal__container.addEventListener("click", () => {
  modal__container.style.display = "none";
})

modal__img.addEventListener('click', (e) => {
  e.stopPropagation();
})

for (let i = 0; i < load__more__buttons.length; i++) {
  load__more__buttons[i].addEventListener("click", () => {
    gallery__containers[i].style.display = "flex";
    load__more__buttons[i].style.display = 'none';
  });
}
