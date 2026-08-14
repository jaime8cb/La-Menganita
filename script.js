const languageButton = document.getElementById("language");

let language = "es";


languageButton.addEventListener("click", function () {

    const elements =
        document.querySelectorAll("[data-es][data-en]");


    elements.forEach(function (element) {

        if (language === "es") {

            element.innerHTML =
                element.getAttribute("data-en");

        } else {

            element.innerHTML =
                element.getAttribute("data-es");

        }

    });


    language =
        language === "es"
            ? "en"
            : "es";


    languageButton.textContent =
        language === "es"
            ? "EN"
            : "ES";


    document.documentElement.lang =
        language;

});