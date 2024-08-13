document.addEventListener('DOMContentLoaded', () =>{
      // init Swiper for hero section
      const swiper = new Swiper('.mySwiper', {
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });
})