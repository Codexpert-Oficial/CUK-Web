
// dark mode button
let swtichButton = document.querySelector(".start__switch");
let switchBackground = document.querySelector(".start__switch__background");

swtichButton.addEventListener("click", (e) => {
    e.preventDefault();
    switchCircle.classList.toggle("start__switch__circle-active");
    document.body.classList.toggle("light")

    if (document.body.classList.contains("light")) {
        localStorage.setItem("dark-mode", "false")
    } else {
        localStorage.setItem("dark-mode", "true")
    }
    init()
})



// let startTitle = document.querySelector(".start__title-CUK");

// const changeTitle = () => {
//     if (window.innerWidth < 400) {
//         startTitle.innerHTML = "CUK"
//     } else {
//         startTitle.innerHTML = "Confederación uruguaya de karate"
//     }
// }

// changeTitle();
// window.addEventListener("resize", changeTitle);




let slideBarElements = document.querySelectorAll(".start__sliderBar__element");


const changeSlideBarElement = (position) => {
    slideBarElements.forEach(element => {
        element.classList.remove("start__sliderBar__element-active");
    });
    slideBarElements[position].classList.add("start__sliderBar__element-active");    
}

const handleSlideBarClick = (event) => {
    clearInterval(sliderInterval);
    const clickedElement = event.target;
    const index = Array.from(slideBarElements).indexOf(clickedElement);
    sliderPosition = index - 1;
    autoChangeSliderPosition();
    sliderInterval = setInterval(autoChangeSliderPosition, 12000);
};

slideBarElements.forEach(element => {
    element.addEventListener("click", handleSlideBarClick);
});

let startBackground = document.querySelector(".start");
let startTitle = document.querySelector(".start__data__title");
let startDescription = document.querySelector(".start__data__description");
let startLink = document.querySelector(".start__data__link");
let progressBar = document.querySelector(".start__progressBar");

const changeStartContent = (position) => {

    startTitle.classList.remove("start__data__title-animation");
    startDescription.classList.remove("start__data__description-animation");
    startLink.classList.remove("start__data__link-animation");

    setTimeout(() => {
        
        startBackground.style.backgroundImage = `url(../imgs/background/start-background${position}.png)`;

        switch (position) {
            case 0: 
                startTitle.innerHTML = "Confederación Uruguaya de Karate";
                startDescription.innerHTML = "Promovemos la difusión, reglamentación, desarrollo, organización y práctica del Karate en todo el territorio de la República Oriental del Uruguay.";
                startLink.innerHTML = "Ver noticias";
                break;

            case 1: 
                startTitle.innerHTML = "Inscripciones siempre abiertas";
                startDescription.innerHTML = "La CUK tiene las inscripciones abiertas todo el año, para que seas bienvenido en todo momento. <br>¡Inscríbete ahora!";
                startLink.innerHTML = "Saber más";
                break;

            case 2: 
                startTitle.innerHTML = "El poder del entrenamiento";
                startDescription.innerHTML = "El entrenamiento en la CUK puede transformar tu vida, desarrollar tus habilidades físicas y mentales, y llevarte al siguiente nivel en el mundo del Karate.";
                startLink.innerHTML = "Saber más";
                break;
        }

    }, 1000);    

    changeSlideBarElement(position);
}

let sliderPosition = 0;

const autoChangeSliderPosition = () => {
    
    if (sliderPosition == 2) {
        sliderPosition = 0;
    } else {
        sliderPosition++;
    }
    progressBar.classList.remove("start__progressBar-animation");

    requestAnimationFrame(() => {
        startTitle.classList.add("start__data__title-animation");
        startDescription.classList.add("start__data__description-animation");
        startLink.classList.add("start__data__link-animation");
        progressBar.classList.add("start__progressBar-animation");
    });

    changeStartContent(sliderPosition);
}


let sliderInterval = setInterval(autoChangeSliderPosition, 12000);

changeStartContent(sliderPosition);