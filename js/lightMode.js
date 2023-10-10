
let switchCircle = document.querySelector(".start__switch__circle");

// light mode in localStorage
if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.remove("light");
    if (switchCircle) {
        switchCircle.classList.add("start__switch__circle-active");
    }
} else {
    document.body.classList.add("light");
    if (switchCircle) {
        switchCircle.classList.remove("start__switch__circle-active");
    }
}