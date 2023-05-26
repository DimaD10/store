let logH, regH, frame;

if (document.querySelector('.auth__form-wrapper')) {
    logH = document.querySelector('.form-login').offsetHeight;
    regH = document.querySelector('.form-register').offsetHeight;
    frame = document.querySelector('.auth__form-wrapper');
}

const cachedChoose = localStorage.getItem('choose');

if (document.querySelector('.auth__form-wrapper')) {
    if (cachedChoose === 'reg') {
        document.querySelector('.auth__form').classList.add('reg');
        frame.style.height = `${regH}px`;

        document.querySelectorAll('.auth__tab').forEach(el => {
            el.classList.remove('auth__tab_current');
        })
        document.querySelectorAll('.auth__tab')[0].classList.add('auth__tab_current');
    
        frame.style.height = `${regH}px`;
    } else if (cachedChoose === 'log') {
        document.querySelector('.auth__form').classList.add('log');
        frame.style.height = `${logH}px`;

        document.querySelectorAll('.auth__tab').forEach(el => {
            el.classList.remove('auth__tab_current');
        })
        document.querySelectorAll('.auth__tab')[1].classList.add('auth__tab_current');
    
        frame.style.height = `${logH}px`;
    }
}

document.addEventListener('click', e => {
    if (e.target.dataset.auth === "reg") {
        localStorage.setItem('choose', 'reg');

        if (document.querySelector('.auth__form-wrapper')) {
            setReg()
        }
    } else if (e.target.dataset.auth === "log") {
        localStorage.setItem('choose', 'log');

        if (document.querySelector('.auth__form-wrapper')) {
            setLog()
        }
    }
})

function setReg() {
    if (document.querySelector('.auth__form-wrapper')) {
        document.querySelector('.auth__form').classList.remove('log');
        document.querySelector('.auth__form').classList.add('reg');
    
        document.querySelectorAll('.auth__tab').forEach(el => {
            el.classList.remove('auth__tab_current');
        })
        document.querySelectorAll('.auth__tab')[0].classList.add('auth__tab_current');
    
        frame.style.height = `${regH}px`;
    }
}

function setLog() {
    document.querySelector('.auth__form').classList.remove('reg');
    document.querySelector('.auth__form').classList.add('log');

    document.querySelectorAll('.auth__tab').forEach(el => {
        el.classList.remove('auth__tab_current');
    })
    document.querySelectorAll('.auth__tab')[1].classList.add('auth__tab_current');

    frame.style.height = `${logH}px`;
}