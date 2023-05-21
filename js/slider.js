const swiper = new Swiper('.presentation-slider', {
    loop: true,
    effect: "fade",
    autoplay: true,
    speed: 600,

    autoplay: {
        delay: 6000,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
})

const prodSlider = new Swiper('.slider-product', {
    loop: true,
    effect: "fade",
    speed: 600,
    //autoHeight: true,

    thumbs: {
        swiper: {
            el: '.product-thumbs',
            slidesPerView: 'auto',
            loop: false,
            spaceBetween: 20,
        }
    },
})


const recSlider = new Swiper('.rec-slider', {
    loop: true,
    speed: 400,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        867.98: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 32,
        }
    }
})