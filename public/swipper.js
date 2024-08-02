document.addEventListener('DOMContentLoaded', () => {
    // init Swiper:
    const swiper = new Swiper('.mySwiper', {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
    });
});