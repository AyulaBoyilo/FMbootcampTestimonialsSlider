# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [How I did it](#how-i-did-it)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider infinitely to the left or the right

### Screenshot

![](./design/desktop-design-slide-1.jpg)

### Links

- Solution URL: [GitHub repository](https://github.com/AyulaBoyilo/FMbootcampTestimonialsSlider/)
- Live Site URL: [GitHub Pages](https://ayulaboyilo.github.io/FMbootcampTestimonialsSlider/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS and CSS3
- JavaScript
- GSAP JavaScript animation

### How I did it

Most of the layout positioning is relative or absolute because of the animations.
The navigation buttons call the slide function with parameters for the animation to play to the left or the right.
The animation slides the current image to the right and than resets the position of the image to the start using the GSAP modifier and modulus clamp function.

```html
<a class="prev" onclick="slide(-500)"><i class="fas fa-chevron-left"></i></a>
<a class="next" onclick="slide(500)"><i class="fas fa-chevron-right"></i></a>
```

```js
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
  ...
```

### Useful resources

- [GSAP modifiers](https://greensock.com/docs/v3/GSAP/CorePlugins/ModifiersPlugin) - GSAP documentation explaining the modifiers

## Author

- Ayula Boyilo
