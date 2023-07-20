
// open gallery image with modal 
let imgs = document.querySelectorAll(".gallery__img");
let modal__container = document.querySelector(".modal__container");
let modal__img = document.querySelector(".modal__img");

imgs.forEach((img) => {
  img.addEventListener("click", () => {
    modal__container.style.display = "flex";
    let getBackgroundImg = window.getComputedStyle(img).backgroundImage;
    let backgroundImage = getBackgroundImg.substring(5);
    backgroundImage = backgroundImage.slice(0, -2);
    modal__img.setAttribute("src", backgroundImage);
  });
});

modal__container.addEventListener("click", () => {
  modal__container.style.display = "none";
})

modal__img.addEventListener('click', (e) => {
  e.stopPropagation();
})


// modal icons events
let modal__close = document.querySelector(".modal__close__icon__container");
let modal__arrow__right = document.querySelector(".modal__arrow__icon-right");
let modal__arrow__left = document.querySelector(".modal__arrow__icon-left");

modal__close.addEventListener("click", () => {
  modal__container.style.display = "none";
});


function ModalArrowChange(e, change) {
  e.stopPropagation();
    let imgRoute = modal__img.getAttribute("src");

    // la expresion regular /\d+/ busca el número en la ruta de la imagen, y [0] accede al primer elemento del array devuelto por match()
    const currentNumberRouteImg = parseInt(imgRoute.match(/\d+/)[0]);
    const nextNumberRouteImg = currentNumberRouteImg + change;
    let nextImgRoute = imgRoute.replace(currentNumberRouteImg, nextNumberRouteImg);

    modal__img.setAttribute("src", nextImgRoute);
}

modal__arrow__right.addEventListener("click", (e) => {
  ModalArrowChange(e, 1)
})

modal__arrow__left.addEventListener("click", (e) => {
  ModalArrowChange(e, -1)
})



// load more images
let load__more__buttons = document.querySelectorAll(".load__more");
let gallery__containers = document.querySelectorAll(".gallery__container__hidden");

for (let i = 0; i < load__more__buttons.length; i++) {
  load__more__buttons[i].addEventListener("click", () => {
    gallery__containers[i].style.display = "flex";
    load__more__buttons[i].style.display = 'none';
  });
}
