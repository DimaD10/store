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