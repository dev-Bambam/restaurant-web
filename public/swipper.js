document.addEventListener('DOMContentLoaded', () => {
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
  
    // for testimonial section
    const testimonialSwiper = new Swiper('.mySwiper2', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.testimonial-pagination',
        clickable: true,
      },
      breakpoints: {
        357: {
          slidesPerView: 1,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  });
  



  ScrollReveal().reveal('.footer-section', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: true
});

ScrollReveal().reveal('.footer-logo', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: true
});

ScrollReveal().reveal('.footer-links', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: true
});

ScrollReveal().reveal('.footer-social', {
    origin: 'right',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: true
});

ScrollReveal().reveal('.footer-copyright', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: true
});