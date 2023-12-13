
// start of index.html
document.addEventListener("DOMContentLoaded", function() {
    const carouselContainer = document.getElementById("carouselHTML");
    
    if (carouselContainer) {
    // definisem podatke za svaki slajd
    const slidesData = [
      {
        image: './images/carousel-img1-min.jpg',
        caption: {
          title: 'Glowing Beauty.',
          description: 'Revealing the Secrets of Makeup and Skincare with the Right Skills.',
          buttonLabel: "Let's begin",
          link: '#tips'
        },
        interval: 2000
      },
      {
        image: './images/carousel-img2-min.jpg',
        caption: {
          title: 'Beauty Bliss.',
          description: 'Elevate Your Look with Expert Makeup and Skincare Advice.',
          buttonLabel: 'Learn more',
          link: '#tips'
        },
        interval: 1000
      },
      {
        image: './images/carousel-img3-min.jpg',
        caption: {
          title: 'Feminine Splendor.',
          description: 'Embracing Your Beauty Inside and Out with Your favourite Brands.',
          buttonLabel: 'Explore them',
          link: '#brands'
        },
        interval: 500
      }
    ];
    // dinamicki generisem carousel HTML
    
    var carouselHTML = generateCarouselHTML(slidesData);
        carouselContainer.innerHTML = carouselHTML;
    }
  });
  
  function generateCarouselHTML(slidesData) {
    const indicatorsHTML = slidesData.map((_, index) => `<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="${index}" ${index === 0 ? 'class="active" aria-current="true"' : ''} aria-label="Slide ${index + 1}"></button>`).join('');
  
    const slidesHTML = slidesData.map((slide, index) => `
      <div class="carousel-item${index === 0 ? ' active' : ''}" data-interval="${slide.interval}">
        <div class="overlay-image" style="background-image: url('${slide.image}');"></div>
        <div class="container">
          <div class="carousel-caption ${index === 0 ? 'text-start' : (index === slidesData.length - 1 ? 'text-end' : '')}">
            <h1>${slide.caption.title}</h1>
            <p>${slide.caption.description}</p>
            <p><a class="btn btn-lg btn-primary btn-resize" href="${slide.caption.link}">${slide.caption.buttonLabel}</a></p>
          </div>
        </div>
      </div>
    `).join('');
  
    return `
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          ${indicatorsHTML}
        </div>
        <div class="carousel-inner">
          ${slidesHTML}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    `;
}



// za naslov tips to get started
$(document).ready(function(){
  $("#tips-container").click(function() {
    // promena boje i teksta na klik
    $(this).toggleClass('color-change');
    if ($(this).hasClass('color-change')) {
      $(this).find('h2').text("Go girl!");
    } else {
      $(this).find('h2').text("Tips to get started");
    }
  });
});



$(document).ready(function(){
  $(".image-box").hover(
    function() {
      
      $(this).find('img').fadeOut(200, function() {
        $(this).fadeIn(200);
      });
    },
    function() {
      
      $(this).find('img').fadeOut(200, function() {
        $(this).fadeIn(200);
      });
    }
  );
});
 // end of index.html