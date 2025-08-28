document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const nav = document.querySelector('.nav');

    burger.addEventListener('click', () => {
        nav.classList.toggle('open');
        burger.classList.toggle('active'); // можно анимировать иконку
    });
});