// Открытие и закрытие бургер-меню
const burgerMenu = document.getElementById('burger-menu');
const navMenu = document.getElementById('nav-menu');

burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Закрытие меню при клике вне его области
document.addEventListener('click', (event) => {
    if (!event.target.closest('#burger-menu') && !event.target.closest('#nav-menu')) {
        navMenu.classList.remove('active');
    }})