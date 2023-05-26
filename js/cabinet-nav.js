const stepList = document.querySelectorAll(".cab-nav__el");
const contentList = document.querySelectorAll(".content-section");

window.addEventListener('load', (e) => {
    contentList.forEach(el => {
        el.classList.remove('content-section_showed');
    });
    contentList[0].classList.add('content-section_showed');
});
window.addEventListener('click', (e) => {
    if(!e.target.classList.contains("cab-nav__el_current") && e.target.classList.contains('cab-nav__el')) {
        document.querySelectorAll('.edit-section').forEach(el => {
            el.classList.remove('edit-section_showed');
        })
        stepList.forEach(el => {
            el.classList.remove("cab-nav__el_current");
        });
        e.target.classList.add("cab-nav__el_current");
        
        var points = [...document.querySelectorAll('.cab-nav__el')]
        var elPos = points.indexOf(e.target);
        contentList.forEach(el => {
            el.classList.remove('content-section_showed');
        });
        contentList[elPos].classList.add('content-section_showed');
    };

    if(!e.target.classList.contains("admin-edit__point_current") && e.target.classList.contains('admin-edit__point')) {
        contentList.forEach(el => {
            el.classList.remove('content-section_showed');
        });
        
        var points = [...document.querySelectorAll('.admin-edit__point')]
        var elPos = points.indexOf(e.target);
        contentList.forEach(el => {
            el.classList.remove('edit-section_showed');
        });
        let sections = document.querySelectorAll('.edit-section');
        sections[elPos].classList.add('edit-section_showed');
    };
});

document.querySelector('.profile-edit').addEventListener('click', e => {
    contentList.forEach(el => {
        el.classList.remove('content-section_showed');
    });
    document.querySelector('.edit-section').classList.add('edit-section_showed');
})

document.addEventListener('click', e => {
    if (e.target.dataset.form === "close-edit") {
        document.querySelectorAll('.edit-section').forEach(el => {
            el.classList.remove('edit-section_showed');
        })
        contentList[0].classList.add('content-section_showed');
    }
})