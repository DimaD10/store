const logH = document.querySelector('.form-login').offsetHeight;
const regH = document.querySelector('.form-register').offsetHeight;
const frame = document.querySelector('.auth__form-wrapper');

document.addEventListener('DOMContentLoaded', () => {
    checkForm();
});

document.addEventListener('click', e => {
    if (e.target.closest('.auth__tab')) {

        document.querySelectorAll('.auth__tab').forEach(el => {
            el.classList.remove('auth__tab_current');
        })
        e.target.closest('.auth__tab').classList.add('auth__tab_current');

        let text = e.target.dataset.action;
        window.location.hash = text;

        checkForm();
    }
})

document.addEventListener('click', e => {
    if (e.target.closest('.call-form')) {
        let text = e.target.dataset.action;
        window.location.hash = text;

        document.querySelectorAll('.auth__tab').forEach(el => {
            el.classList.remove('auth__tab_current');
        })
        if (text === 'reg') {
            document.querySelectorAll('.auth__tab')[0].classList.add('auth__tab_current');
        } else if (text === 'log') {
            document.querySelectorAll('.auth__tab')[1].classList.add('auth__tab_current');
        }

        checkForm();
    }
})


function checkForm() {
    if (window.location.href.includes('#reg')) {
        document.querySelector('.auth__form').classList.remove('log');
        document.querySelector('.auth__form').classList.add('reg');

        document.querySelectorAll('.auth__tab').forEach(el => {
            el.classList.remove('auth__tab_current');
        })
        document.querySelectorAll('.auth__tab')[0].classList.add('auth__tab_current');

        frame.style.height = `${regH}px`;
    } else if (window.location.href.includes('#log')) {
        document.querySelector('.auth__form').classList.remove('reg');
        document.querySelector('.auth__form').classList.add('log');

        document.querySelectorAll('.auth__tab').forEach(el => {
            el.classList.remove('auth__tab_current');
        })
        document.querySelectorAll('.auth__tab')[1].classList.add('auth__tab_current');

        frame.style.height = `${logH}px`;
    }
}