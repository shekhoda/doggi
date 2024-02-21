'use strict'

const navbarBurger = document.querySelector('.navbar__burger');
const navbarBottom = document.querySelector('.navbar__bottom');
const bodyLock = document.querySelector('body');
navbarBurger.addEventListener('click', function (evt) {
	navbarBottom.classList.toggle('menu-active');
	bodyLock.classList.toggle('lock');
});