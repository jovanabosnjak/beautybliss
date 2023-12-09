//start of makeup.html 
function showPreview() {
    document.getElementById("previewContent").style.display = "block";
}

function hidePreview() {
    document.getElementById("previewContent").style.display = "none";
}

const makeupHacks = [
    { src: "./images/double-duty-min.jpg", alt: "Hack 1", text: "Hack1" },
    { src: "./images/white-eyeliner-min.jpg", alt: "Hack 2", text: "Hack2" },
    { src: "./images/mascara-min.jpg", alt: "Hack 2", text: "Hack3" },
    { src: "./images/lip-scrub-min.jpg", alt: "Hack 2", text: "Hack4" },
    { src: "./images/set-lips-min.jpg", alt: "Hack 2", text: "Hack5" },
    { src: "./images/concealer-min.jpg", alt: "Hack 2", text: "Hack6" },
    { src: "./images/lip-liner-min.jpg", alt: "Hack 2", text: "Hack7" },
    { src: "./images/mascara2-min.jpg", alt: "Hack 2", text: "Hack8" }
  ];


  function generateMakeupLooks() {
    const makeupRow = document.getElementById("makeup-row");

    makeupHacks.forEach((hack, index) => {
      const makeupLookHTML = `
        <div class="col-md-6 col-lg-3 d-flex align-items-center">
          <div class="image-box">
            <img src="${hack.src}" alt="${hack.alt}" class="img-fluid image6" id="pic${index + 1}">
            <div class="overlay-text">${hack.text}</div>
          </div>
        </div>
      `;

      
      makeupRow.insertAdjacentHTML('beforeend', makeupLookHTML);
    });
  }

  document.addEventListener('DOMContentLoaded', generateMakeupLooks);
//end of makeup.html

