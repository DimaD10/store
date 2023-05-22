const filter = document.querySelector('.catalog__aside');
const closeBtn = document.querySelector('.close-filter');

document.addEventListener('click', e => {
    if (e.target.closest('.catalog-body__filter-btn')) {
        filter.classList.add('_opened');
        document.querySelector('body').style.overflow = "hidden";
        closeBtn.classList.add('active');
    }
    if (e.target.classList.contains('close-filter')) {
        filter.classList.remove('_opened');
        document.querySelector('body').style.overflow = "visible";
        closeBtn.classList.remove('active');
    }
})