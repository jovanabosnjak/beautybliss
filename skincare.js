

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("dugmeProvera").addEventListener("click", proveriFormu);
    document.getElementById("inputIme").addEventListener("input", proveriImePrezime);
    document.getElementById("inputPrezime").addEventListener("input", proveriImePrezime);
    document.getElementById("inputEmail").addEventListener("input", proveriEmail);
    document.getElementById("inputTelefon").addEventListener("input", proveriTelefon);
});

function proveriFormu() {
    let isValid = true;
    isValid = isValid && proveriImePrezime();
    isValid = isValid && proveriEmail();
    isValid = isValid && proveriTelefon();

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

    let tipKontaktaSMS = document.getElementById("kontaktSMS").checked;
    let tipKontaktaEmail = document.getElementById("kontaktMail").checked;

    if (!tipKontaktaSMS && !tipKontaktaEmail) {
        prikaziGlobalnuPoruku(false, "Choose one contact method");
        isValid = false;
    }

    if (isValid) {
        prikaziGlobalnuPoruku(true, "Form submitted successfully!");
        document.getElementById("kontaktForm").reset();
    } else {
        prikaziGlobalnuPoruku(false, "Form has errors, please check fields.");
    }
}

function proveriImePrezime() {
    let inputIme = document.getElementById("inputIme");
    let inputPrezime = document.getElementById("inputPrezime");
    let regexImePrezime = /^[A-ZŠĐČĆŽ][a-zšđčćž]*(\s[A-ZŠĐČĆŽ][a-zšđčćž]*)*$/;

    let isValidIme = regexImePrezime.test(inputIme.value);
    let isValidPrezime = regexImePrezime.test(inputPrezime.value);

    prikaziPoruku(isValidIme, inputIme, "Invalid name format");
    prikaziPoruku(isValidPrezime, inputPrezime, "Invalid last name format");

    return isValidIme && isValidPrezime;
}

function proveriEmail() {
    let inputEmail = document.getElementById("inputEmail");
    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    let isValidEmail = regexEmail.test(inputEmail.value);

    prikaziPoruku(isValidEmail, inputEmail, "Invalid email format");

    return isValidEmail;
}

function proveriTelefon() {
    let inputTelefon = document.getElementById("inputTelefon");
    let regexTelefon = /^06[0-9]\/?[0-9]{5,7}$/;

    let isValidTelefon = regexTelefon.test(inputTelefon.value);

    prikaziPoruku(isValidTelefon, inputTelefon, "Invalid phone format");

    return isValidTelefon;
}

function prikaziPoruku(isValid, inputElement, errorMessage) {
    if (!inputElement) return;
    let porukaElement = inputElement.parentElement ? inputElement.parentElement.querySelector(".az-red") : null;
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
    let porukaForme = document.getElementById("porukaForme");
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





