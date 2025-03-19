// Inicialize o Swiper após o carregamento da página
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.mySwiper', {
        loop: true,
        autoplay: {
            delay: 3000, // Tempo em milissegundos (3 segundos)
            disableOnInteraction: false, // Continua o autoplay mesmo após interação do usuário
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
