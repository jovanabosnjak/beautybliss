// zajednicki js za stranice

document.addEventListener("DOMContentLoaded", function () {
  // Provera jQuery i js
  if (typeof jQuery == 'undefined') {
      console.error("jQuery is not loaded!");
  } else {
      console.log("jQuery is loaded!");
  }

  console.log("main.js is loaded!");

  
});


// navigacija
function createNavigation() {
    // definisem elemente
    const navItems = [
      { text: "Home", link: "index.html" },
      { text: "Skincare", link: "skincare.html" },
      { text: "Makeup", link: "makeup.html" },
      { text: "Contact", link: "contact.html" },
      { text: "Author", link: "author.html" }
    ];
  
    // ubacujem u navList
    const navList = document.getElementById("navList");
  
    // prolazim  kroz stavke i stvaram HTML za svaku od njih
    if (navList) {
      navItems.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("nav-item");
  
        const a = document.createElement("a");
        a.classList.add("nav-link");
        a.href = item.link;
        a.textContent = item.text;
  
        li.appendChild(a);
        navList.appendChild(li);
      });
    } else {
      console.error("Element with ID 'navList' not found.");
    }
}
  
  document.addEventListener("DOMContentLoaded", createNavigation);
//kraj navigacije
