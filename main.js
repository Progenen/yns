'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const burgerBtn = document.querySelector('.burger');
    const headerMenu = document.querySelector('.header__menu');

    burgerBtn.addEventListener('click', () => {
        headerMenu.classList.toggle('active');
        burgerBtn.classList.toggle('active');
    });
});