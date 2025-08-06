

//start of skincare.html

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("dugmeProvera").addEventListener("click", proveriFormu);
    document.getElementById("inputIme").addEventListener("input", proveriImePrezime);
    document.getElementById("inputPrezime").addEventListener("input", proveriImePrezime);
    document.getElementById("inputEmail").addEventListener("input", proveriEmail);
    document.getElementById("inputTelefon").addEventListener("input", proveriTelefon);
    
});

// provere forme
function proveriFormu() {
    let isValid = true;
    isValid = isValid && proveriImePrezime();
    isValid = isValid && proveriEmail();
    isValid = isValid && proveriTelefon();

    function prikaziPoruku(imePolja, isValid, inputElement, errorMessage) {
        let porukaElement = inputElement.parentElement ? inputElement.parentElement.querySelector(".az-red") : null;
        let porukaDiv = document.getElementById("porukaDiv");

        if (isValid) {
            porukaElement.classList.add("az-invisible", "success-message");
        } else {
            porukaElement.classList.remove("az-invisible", "success-message");
            porukaElement.classList.add("error-message");
            porukaElement.innerText = errorMessage;
            porukaDiv.innerText = "Please fill out.";
            porukaDiv.classList.add("error-message");
        }
    }

    let ddlUsluga = document.getElementById("ddlUsluga");
    let ddlUslugaError = document.getElementById("ddlUslugaError");

    if (!ddlUsluga || !ddlUslugaError) {
        console.error("Element with id 'ddlUsluga' or 'ddlUslugaError' not found.");
    } else {
        if (ddlUsluga.value === "0") {
            isValid = false;
            ddlUslugaError.innerText = "Choose a product.";
            ddlUslugaError.classList.remove("az-invisible");
        } else {
            ddlUslugaError.classList.add("az-invisible");
        }
    }

    document.getElementById("ddlUsluga").addEventListener("change", function () {
        let ddlUsluga = document.getElementById("ddlUsluga");
        let ddlUslugaError = document.getElementById("ddlUslugaError");

        if (ddlUsluga.value === "0") {
            ddlUslugaError.innerText = "Please choose a product.";
            ddlUslugaError.classList.remove("az-invisible", "success-message");
            ddlUslugaError.classList.add("error-message");
        } else {
            ddlUslugaError.innerText = "Product chosen successfully.";
            ddlUslugaError.classList.remove("az-invisible", "error-message");
            ddlUslugaError.classList.add("success-message");
        }
    });

    let tipKontaktaSMS = document.getElementById("kontaktSMS").checked;
    let tipKontaktaEmail = document.getElementById("kontaktMail").checked;

    if (!tipKontaktaSMS && !tipKontaktaEmail) {
        prikaziPoruku("Choose one", false, null, "Choose one contact method");
        isValid = false;
    } else {
        prikaziPoruku("Choose one", true, null, "");
    }


    console.log("isValid nakon provere forme:", isValid);

    if (isValid) {
        document.getElementById("kontaktForm").reset();
        prikaziPoruku("Form is valid!", true, null, "");
    } else {
        prikaziPoruku("Form is invalid!", false, null, "");
    }
}

function proveriImePrezime() {
    let inputIme = document.getElementById("inputIme");
    let inputPrezime = document.getElementById("inputPrezime");
    let regexImePrezime = /^[A-ZŠĐČĆŽ][a-zšđčćž]*(\s[A-ZŠĐČĆŽ][a-zšđčćž]*)*$/;

    let isValidIme = regexImePrezime.test(inputIme.value);
    let isValidPrezime = regexImePrezime.test(inputPrezime.value);

    prikaziPoruku("Name", isValidIme, inputIme, "Invalid name format");
    prikaziPoruku("Last Name", isValidPrezime, inputPrezime, "Invalid last name format");

    return isValidIme && isValidPrezime;
}

function proveriEmail() {
    let inputEmail = document.getElementById("inputEmail");
    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    let isValidEmail = regexEmail.test(inputEmail.value);

    prikaziPoruku("Email", isValidEmail, inputEmail, "Invalid email format");

    return isValidEmail;
}

function proveriTelefon() {
    let inputTelefon = document.getElementById("inputTelefon");
    let regexTelefon = /^06[0-9]\/?[0-9]{5,7}$/;

    let isValidTelefon = regexTelefon.test(inputTelefon.value);

    prikaziPoruku("Phone", isValidTelefon, inputTelefon, "Invalid phone format");

    return isValidTelefon;
}

function prikaziPoruku(imePolja, isValid, inputElement, errorMessage) {
    if (!inputElement) {
        console.log("inputElement nije definisan.");
        return;
    }
    let porukaElement = inputElement.parentElement ? inputElement.parentElement.querySelector(".az-red") : null;

    if (!porukaElement) {
        console.log("porukaElement nije definisan.");
        return;
    }

    if (isValid) {
        porukaElement.classList.add("az-invisible");
    } else {
        porukaElement.classList.remove("az-invisible");
        porukaElement.innerText = errorMessage;
    }

    let porukaDiv = document.getElementById("porukaDiv");

    if (!inputElement) {
        porukaDiv.innerText = isValid ? "" : "Choose one";
        porukaDiv.style.color = isValid ? "" : "red";
        porukaDiv.classList.toggle("error-message", !isValid);
    }
    
}


// skincare tips autoscroll
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
  //end of skincare.html

