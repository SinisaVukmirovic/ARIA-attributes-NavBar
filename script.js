const nav = document.querySelector('nav');
const menuBtn = nav.querySelector('[data-menu-btn]');
const navLinks = nav.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    let isExpanded = JSON.parse(menuBtn.getAttribute('aria-expanded'));
    menuBtn.setAttribute('aria-expanded', !isExpanded);
});