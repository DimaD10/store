document.addEventListener('click', e => {
    if (e.target.closest('.spoiler')) {
        let parent = e.target.closest('.spoiler');

        parent.classList.toggle('_opened');
    }
})