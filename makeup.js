

//start of makeup.html 

// tips
const makeupTips = [
  {
      title: "Double Duty.",
      description: "Make the most out of your makeup products by using them for multiple purposes. For example, a shimmery eyeshadow can also be used as a highlighter on your cheekbones, or a matte bronzer can double as an eyeshadow in the crease of your eyelids. This hack saves both space and money in your makeup collection. Get creative and experiment with different product combinations for unique looks."
  },
  {
      title: "White Eyeliner Pencil.",
      description: "Applying a white eyeliner pencil to your waterline can make your eyes appear brighter and more awake. This trick is especially useful on those days when you haven't had enough sleep or want to make your eyes pop. It can also help create the illusion of larger eyes. Experiment with different eyeliner shades to enhance your eye color."
  },
  {
      title: "Make Mascara Last Longer.",
      description: "If your mascara is starting to dry out or become clumpy, add a few drops of saline solution or eye drops into the tube. Gently swirl the wand to mix the solution, and your mascara should be good to use again. This hack can help revive your mascara and make it last longer. Say goodbye to dry, clumpy lashes. Remember to replace your mascara every three months to maintain eye health and prevent bacterial buildup."
  },
  {
      title: "DIY Lip Scrub.",
      description: "Create a simple lip scrub at home using a mixture of honey and sugar. Apply the scrub to your lips and gently massage in circular motions to exfoliate and remove any dry or flaky skin. Rinse off the scrub with warm water, and your lips will feel smooth and ready for lipstick application. This natural lip scrub will leave your lips feeling soft and nourished. Follow up with a hydrating lip balm for extra moisture and protection."
  },
  {
      title: "Set Your Lipstick with Translucent Powder.",
      description: "To make your lipstick last longer and prevent it from smudging or transferring, apply your desired lip color, place a tissue over your lips, and lightly dust translucent powder over the tissue. This helps to set the lipstick and increase its longevity. You'll have a beautiful, long-lasting pout throughout the day. Opt for a translucent powder with a matte finish for a more natural look."
  },
  {
      title: "Concealer as Eyeshadow Primer.",
      description: "If you don't have an eyeshadow primer on hand, you can use a small amount of concealer as a substitute. Apply a thin layer of concealer to your eyelids and blend it out. This creates a smooth and even base for your eyeshadow, helps intensify the color payoff, and increases its longevity. Just make sure to set the concealer with a translucent powder or a neutral eyeshadow shade to prevent creasing."
  },
  {
      title: "Fuller Lips with Lip Liner.",
      description: "To create the illusion of fuller lips, use a lip liner that is slightly darker than your natural lip color. Start by lining the outer edges of your lips, slightly exaggerating the shape. Then, fill in your lips with the lip liner before applying your lipstick or lip gloss. This technique helps define and enhance your lips, giving them a plumper appearance."
  },
  {
      title: "Mascara for Lash Curling.",
      description: "If you don't have a lash curler on hand, you can use your mascara to curl your lashes. Start by applying a coat of mascara to your upper lashes. Then, take the mascara wand and gently press it against the base of your lashes. Slowly wiggle the wand upwards to lift and curl the lashes. The mascara formula will help hold the curl in place, giving your lashes a lifted and voluminous look. Just be careful not to poke your eye while doing this hack!"
  }
];

document.addEventListener('DOMContentLoaded', function () {
  const makeupTipsContainer = document.getElementById("makeup-tips");

  makeupTips.forEach((tip, index) => {
      const makeupTipHTML = `
          <div class="col-12 mt-5">
              <div class="makeup d-flex flex-column align-items-center text-center" id="makeup-${index + 1}">
                  <h2 class="p-text2 fw-bolder fs-1 text-center">${tip.title}</h2>
                  <p class="p-text fw-lighter text-center h-auto d-inline-block fs-4">${tip.description}</p>
                  <p><a class="btn btn-secondary" href="#makeup-looks">See the look &#8675;</a></p>
              </div>
          </div>
      `;

      
      makeupTipsContainer.innerHTML += makeupTipHTML;
  });
});



//---------------------------------slike makeup looks
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

