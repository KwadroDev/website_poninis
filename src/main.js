document.querySelector('.navbar-toggler').addEventListener('click', () => {
    document.querySelector('.collapse').classList.toggle('show');
});

ScrollReveal().reveal('.articulo1');
ScrollReveal().reveal('.articulo2', { delay: 250 });
ScrollReveal().reveal('.articulo3', { delay: 250 });
ScrollReveal().reveal('.articulo4', { delay: 250 });
ScrollReveal().reveal('.imgbg', { delay: 250 });
ScrollReveal().reveal('.footer', { delay: 250 });