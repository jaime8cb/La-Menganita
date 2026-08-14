/* ==================================================
   IDIOMA
================================================== */

const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "es";


languageBtn.addEventListener("click", () => {

    const elements = document.querySelectorAll(
        "[data-es][data-en]"
    );


    elements.forEach(element => {

        if (currentLanguage === "es") {

            element.innerHTML = element.dataset.en;

        } else {

            element.innerHTML = element.dataset.es;

        }

    });


    currentLanguage =
        currentLanguage === "es" ? "en" : "es";


    languageBtn.textContent =
        currentLanguage === "es" ? "EN" : "ES";


    document.documentElement.lang =
        currentLanguage;

});


/* ==================================================
   BARRA DINÁMICA
================================================== */

const topbar = document.querySelector(".topbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 35) {

        topbar.style.background =
            "rgba(7,8,9,.98)";

    } else {

        topbar.style.background =
            "rgba(9,10,11,.93)";

    }

});


/* ==================================================
   ANIMACIÓN SUAVE AL APARECER
================================================== */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.12
    }

);


document
    .querySelectorAll(
        ".dish, .location-card, .rice-card, .local-content"
    )
    .forEach(element => {

        observer.observe(element);

    });