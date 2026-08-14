const button = document.getElementById("lang");

let lang = "es";

button.addEventListener("click", () => {

    lang = lang === "es" ? "en" : "es";

    document
        .querySelectorAll("[data-es][data-en]")
        .forEach(element => {

            element.innerHTML =
                element.getAttribute(`data-${lang}`);

        });

    button.textContent =
        lang === "es" ? "EN" : "ES";

    document.documentElement.lang = lang;

});