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
});
