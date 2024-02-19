// This funstion helps us to access the Mobile-menu
// and be able to see the context inside

const navToggle =document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link'); //will find all elements with this id


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})