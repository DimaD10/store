const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.header-bottom');

burgerBtn.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    burgerMenu.classList.toggle('opened');
    e.target.closest('.header-top').classList.toggle('active');

    if (e.target.classList.contains('active')) {
        document.querySelector('body').style.overflow = "hidden";
    } else {
        document.querySelector('body').style.overflow = "visible";
    }
})