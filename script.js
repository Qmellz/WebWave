// script.js
function toggleNav() {
    const nav = document.querySelector('nav');
    const body = document.body;
    
    nav.classList.toggle('active');
    body.classList.toggle('nav-open');
}

function closeNav() {
    const nav = document.querySelector('nav');
    const body = document.body;

    nav.classList.remove('active');
    body.classList.remove('nav-open');
}
