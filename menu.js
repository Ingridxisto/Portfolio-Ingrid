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
  const carouselContainer = document.querySelector('.carousel-container'); // Adicionado: seleciona o container do carrossel

  if (btnLeft && btnRight && carousel) {
    const scrollAmount = 320; // tamanho do card + gap aproximado

    btnLeft.addEventListener('click', () => {
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    btnRight.addEventListener('click', () => {
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
     // --- Nova lógica para o comportamento de hover ---
    let scrollTimeout; // Variável para controlar o delay de retorno

    // Função para rolar o carrossel para o início
    function scrollToStart() {
      carousel.scrollTo({ left: 0, behavior: 'smooth' });
    }

    // Função para rolar o carrossel para o final
    function scrollToEnd() {
      carousel.scrollTo({ left: carousel.scrollWidth - carousel.clientWidth, behavior: 'smooth' });
    }

    // Evento quando o mouse entra no container do carrossel
    carouselContainer.addEventListener('mouseenter', function() {
      clearTimeout(scrollTimeout); // Cancela qualquer timeout de retorno ao início
      scrollToEnd(); // Rola para o final do carrossel
    });

    // Evento quando o mouse sai do container do carrossel
    carouselContainer.addEventListener('mouseleave', function() {
      // Define um pequeno delay antes de rolar de volta para o início
      scrollTimeout = setTimeout(scrollToStart, 500); // 500ms de delay, ajuste se necessário
    });

    // Garante que o carrossel comece no início ao carregar a página
    scrollToStart();
  }
});
