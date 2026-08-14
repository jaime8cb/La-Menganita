/* =========================
   CARTA
========================= */

const categoryButtons = document.querySelectorAll(".category");
const dishes = document.querySelectorAll(".dish");

function showCategory(category) {

    dishes.forEach(dish => {

        if (dish.classList.contains(category)) {
            dish.style.display = "flex";
        } else {
            dish.style.display = "none";
        }

    });
}


categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        showCategory(button.dataset.category);

    });

});


/* Mostrar entrantes al entrar */

showCategory("entrantes");


/* =========================
   IDIOMA
========================= */

const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "es";


function changeLanguage() {

    const elements = document.querySelectorAll("[data-es][data-en]");

    elements.forEach(element => {

        if (currentLanguage === "es") {
            element.innerHTML = element.dataset.en;
        } else {
            element.innerHTML = element.dataset.es;
        }

    });

    if (currentLanguage === "es") {
        languageBtn.textContent = "ES";
        currentLanguage = "en";
    } else {
        languageBtn.textContent = "EN";
        currentLanguage = "es";
    }

}


languageBtn.addEventListener("click", changeLanguage);


/* =========================
   BARRA AL HACER SCROLL
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        navbar.style.background = "rgba(17,16,14,.98)";
    } else {
        navbar.style.background = "rgba(17,16,14,.95)";
    }

});