let previousTitle = document.title

window.addEventListener(`blur`, () => {
    previousTitle = document.title
    document.title = "Mejor Calidad En Salud. 🩺"
})

window.addEventListener(`focus`, () => {
    previousTitle = document.title
    document.title = "Hospital Chakalito"
})

////

ScrollReveal().reveal('.cards');
ScrollReveal().reveal('#card1', { delay: 200 });
ScrollReveal().reveal('#card2', { delay: 400 });
ScrollReveal().reveal('#card3', { delay: 600 });
ScrollReveal().reveal('#card4', { delay: 800 });
ScrollReveal().reveal('#card5', { delay: 1000 });
ScrollReveal().reveal('#card6', { delay: 1200 });
ScrollReveal().reveal('#card7', { delay: 1400 });
ScrollReveal().reveal('#card8', { delay: 1600 });

ScrollReveal().reveal('.noticia', { delay: 500 });
