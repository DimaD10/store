document.addEventListener('click', e => {
    if (e.target.closest('.select')) {
        e.target.closest(".select").classList.toggle('_opened');
    }

    if (!e.target.closest('.select')) {
        document.querySelectorAll(".select").forEach(el => {
            el.classList.remove('_opened');
        });
    }
    if (e.target.classList.contains('select__item')) {
        selectChoose(e.target);
    }
})

function selectChoose(el) {
    const text = el.innerHTML;
    const select = el.closest('.select');
    const currentText = select.querySelector('.select__current');
    currentText.innerHTML = text;
    document.querySelectorAll(".select").forEach(el => {
        el.classList.remove('_opened');
    });
}