// This funstion helps us to access the Mobile-menu
// and be able to see the context inside

const navToggle =document.querySelector('.nav-toggle');
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})