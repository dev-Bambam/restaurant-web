document.addEventListener('DOMContentLoaded', () => {
    // init Swiper: for hero section
    const swiper = new Swiper('.mySwiper', {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
    });

    // for testimonial section
    const testimonialSwiper = new Swiper('.mySwiper3', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.testimonial-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 1,
            }
        }
    });
});