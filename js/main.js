let slideIndex = 0;
let slideImages = document.querySelectorAll('.slide-img');
let slideText = document.querySelectorAll('.slide-txt');

// Show first slide
slideImages[slideIndex].style.display = 'block';
slideImages[slideIndex].style.opacity = 1;
slideText[slideIndex].style.display = 'block';
slideText[slideIndex].style.opacity = 1;

function slide(xSide){
  // Current slide to right
  gsap.to(slideImages[slideIndex], {
    display: 'none', 
    x: xSide,
    opacity: 0,
    modifiers: {
      x: function(x) {
        x = parseInt(x);
        let newX = x % 500; // Reset x to 0 after reaching 500
        return newX + 'px';
      }
    },
    duration: .5,
  });
 
  // Next slide from left
  let slideNext = (slideIndex+1)%2; // Next slide index

  // Reset and show next image slide
  slideImages[slideNext].style.display = 'block';
  slideImages[slideNext].style.opacity = 1;
  gsap.from(slideImages[slideNext], {x: -xSide, duration: .5, delay: .5, display: 'none', opacity: 0});

  nextText(slideNext);

  // Reset slideIndex after reaching last slide in array
  if (slideIndex < (slideImages.length - 1)) {
    slideIndex = slideIndex + 1;
  } else {
    slideIndex = 0;
  }
}

function nextText(slideNext) {
  // Reset and show next text slide
  slideText[slideNext].style.display = 'block';
  slideText[slideNext].style.opacity = 0;
  gsap.to(slideText[slideNext], {opacity: 1, duration: 2, delay: .7, ease: 'power.in'});
  // Hide current text slide
  gsap.to(slideText[slideIndex], {opacity: 0, display: 'none', duration: .7, ease: 'power.in'});
}