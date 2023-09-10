
const tablesImgs = document.querySelectorAll(".table__img");
const modalContainer = document.querySelector(".modal__container");
let modalImg = document.querySelector(".modal__content__img");

modalImg.addEventListener("click", (e) => {
    e.stopPropagation();
})

const OpenImg = (img, i) => {
    img.addEventListener("click", () => {
        modalContainer.classList.add("modal__container-active");
        modalImg.setAttribute("src", '../imgs/table' + (i + 1) +'.jpg');
    })
}

const CloseImg = () => {
    modalContainer.classList.remove("modal__container-active");
}

const closeModalIcon = document.querySelector(".modal__icon__container");
closeModalIcon.addEventListener("click", CloseImg);
modalContainer.addEventListener("click", CloseImg);


tablesImgs.forEach((tableImg, index) => {
   tableImg.addEventListener("click", OpenImg(tableImg, index));
});

const openTablesImgs = document.querySelectorAll(".ranking__element__openImg");
openTablesImgs.forEach((openTableImg, index) => {
    openTableImg.addEventListener("click", OpenImg(openTableImg, index));
 });
 
