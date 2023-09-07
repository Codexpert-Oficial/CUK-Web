
let startTitle = document.querySelector(".start__title-CUK");

const changeTitle = () => {
    if (window.innerWidth < 400) {
        startTitle.innerHTML = "CUK"
    } else {
        startTitle.innerHTML = "Confederación uruguaya de karate"
    }
}

changeTitle();
window.addEventListener("resize", changeTitle);