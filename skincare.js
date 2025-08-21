
document.addEventListener("DOMContentLoaded", function () {
    const dugme = document.getElementById("dugmeProvera");
    if (dugme) dugme.addEventListener("click", proveriFormu);

    const inputIme = document.getElementById("inputIme");
    const inputPrezime = document.getElementById("inputPrezime");
    const inputEmail = document.getElementById("inputEmail");
    const inputTelefon = document.getElementById("inputTelefon");

    if (inputIme) inputIme.addEventListener("input", proveriImePrezime);
    if (inputPrezime) inputPrezime.addEventListener("input", proveriImePrezime);
    if (inputEmail) inputEmail.addEventListener("input", proveriEmail);
    if (inputTelefon) inputTelefon.addEventListener("input", proveriTelefon);
});

function proveriFormu() {
    let isValid = true;
    if (!proveriImePrezime()) isValid = false;
    if (!proveriEmail()) isValid = false;
    if (!proveriTelefon()) isValid = false;

    let ddlUsluga = document.getElementById("ddlUsluga");
    let ddlUslugaError = document.getElementById("ddlUslugaError");

    if (ddlUsluga && ddlUslugaError) {
        if (ddlUsluga.value === "0") {
            isValid = false;
            ddlUslugaError.innerText = "Choose a product.";
            ddlUslugaError.classList.remove("az-invisible", "success-message");
            ddlUslugaError.classList.add("error-message");
        } else {
            ddlUslugaError.innerText = "Product chosen successfully.";
            ddlUslugaError.classList.remove("error-message", "az-invisible");
            ddlUslugaError.classList.add("success-message");
        }
    }

    let tipKontaktaSMS = document.getElementById("kontaktSMS")?.checked;
    let tipKontaktaEmail = document.getElementById("kontaktMail")?.checked;

    if (!tipKontaktaSMS && !tipKontaktaEmail) {
        prikaziGlobalnuPoruku(false, "Choose one contact method");
        isValid = false;
    }

    if (isValid) {
        prikaziGlobalnuPoruku(true, "Form submitted successfully!");
        const forma = document.getElementById("kontaktForm");
        if (forma) forma.reset();
    } else {
        prikaziGlobalnuPoruku(false, "Form has errors, please check fields.");
    }
}

function proveriImePrezime() {
    const inputIme = document.getElementById("inputIme");
    const inputPrezime = document.getElementById("inputPrezime");
    if (!inputIme || !inputPrezime) return false;

    const regexImePrezime = /^[A-ZŠĐČĆŽ][a-zšđčćž]*(\s[A-ZŠĐČĆŽ][a-zšđčćž]*)*$/;

    const isValidIme = regexImePrezime.test(inputIme.value);
    const isValidPrezime = regexImePrezime.test(inputPrezime.value);

    prikaziPoruku(isValidIme, inputIme, "Invalid name format");
    prikaziPoruku(isValidPrezime, inputPrezime, "Invalid last name format");

    return isValidIme && isValidPrezime;
}

function proveriEmail() {
    const inputEmail = document.getElementById("inputEmail");
    if (!inputEmail) return false;

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValidEmail = regexEmail.test(inputEmail.value);

    prikaziPoruku(isValidEmail, inputEmail, "Invalid email format");

    return isValidEmail;
}

function proveriTelefon() {
    const inputTelefon = document.getElementById("inputTelefon");
    if (!inputTelefon) return false;

    const regexTelefon = /^06[0-9]\/?[0-9]{5,7}$/;
    const isValidTelefon = regexTelefon.test(inputTelefon.value);

    prikaziPoruku(isValidTelefon, inputTelefon, "Invalid phone format");

    return isValidTelefon;
}

function prikaziPoruku(isValid, inputElement, errorMessage) {
    if (!inputElement) return;

    const porukaElement = inputElement.parentElement
        ? inputElement.parentElement.querySelector(".az-red")
        : null;

    if (!porukaElement) return;

    if (isValid) {
        porukaElement.classList.add("az-invisible");
        porukaElement.classList.remove("error-message");
    } else {
        porukaElement.classList.remove("az-invisible");
        porukaElement.classList.add("error-message");
        porukaElement.innerText = errorMessage;
    }
}

function prikaziGlobalnuPoruku(isValid, message) {
    const porukaForme = document.getElementById("porukaForme");
    if (!porukaForme) return;

    porukaForme.innerText = message;

    if (isValid) {
        porukaForme.classList.remove("az-invisible", "error-message");
        porukaForme.classList.add("success-message");
    } else {
        porukaForme.classList.remove("az-invisible", "success-message");
        porukaForme.classList.add("error-message");
    }
}

function autoScroll() {
    const container = document.querySelector('.skincare-tips');
    const sections = document.querySelectorAll('.section');
    if (!container || sections.length === 0) return;

    let index = 0;
    const interval = setInterval(() => {
        const scrollAmount = sections[index].offsetHeight;

        container.scrollBy({
            top: scrollAmount,
            behavior: 'smooth',
        });

        index++;

        if (index === sections.length) {
            clearInterval(interval);
        }
    }, 5000);
}

window.onload = autoScroll;







