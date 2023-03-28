const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-links');
burger.addEventListener('click', navActivate);

navLinks.forEach(link => {
    link.addEventListener('click', closeNav);
})

function closeNav(e) {

    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        burger.classList.remove('active');
    }
}
function navActivate(e) {
    e.preventDefault();
    const target = e.target;
    if (target.closest('.burger.active')) {
        navMenu.classList.remove('active');
        burger.classList.remove('active');
       return
    } 
    if(target.closest('.burger')) {
        navMenu.classList.add('active');
        burger.classList.add('active');
        return
    }
}