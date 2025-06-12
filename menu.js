let btnMenu = document.getElementById("btn-menu")
let menu = document.getElementById("menu-mobile")
let overlay = document.getElementById("overlay-menu")

btnMenu.addEventListener("click", ()=>{
    menu.classList.add("abrir-menu")
})

menu.addEventListener("click", ()=>{
    menu.classList.remove("abrir-menu")
})

overlay.addEventListener("click", ()=>{
    menu.classList.remove("abrir-menu")
})


document.addEventListener('DOMContentLoaded', function () {
    const btnLeft = document.querySelector('.btn-left');
    const btnRight = document.querySelector('.btn-right');
    const carousel = document.querySelector('.carousel');
    const carouselContainer = document.querySelector('.carousel-container'); // Container do carrossel

    if (btnLeft && btnRight && carousel) {
        const scrollAmount = 320; // tamanho do card + gap aproximado

        btnLeft.addEventListener('click', () => {
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        btnRight.addEventListener('click', () => {
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }
});
