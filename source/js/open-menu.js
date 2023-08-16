/* MOBILE MENU */
let toggle = document.querySelector('.main-nav__mobile-toggle');
let list = document.querySelector('.main-nav__mobile--open');
let close = document.querySelector('.main-nav__mobile-close');

toggle.onclick = function () {
  list.classList.remove('hidden');
}

close.onclick = function () {
  list.classList.add('hidden');
}

/* Modal mobile menu */

let mobile_basket = document.querySelector('.main-nav__mobile-button');
let overlay = document.querySelector('.busket-overlay');
let add = document.querySelector('.busket-button');

mobile_basket.onclick = function () {
  overlay.classList.remove('hidden');
  list.classList.add('hidden');
}

add.onclick = function () {
  overlay.classList.add('hidden');
}

/* Modal tablet menu */

let tablet_basket = document.querySelector('.main-nav__tablet-button');

tablet_basket.onclick = function () {
  overlay.classList.remove('hidden');
  list.classList.add('hidden');
}

add.onclick = function () {
  overlay.classList.add('hidden');
}

/* Modal desktop menu */

let desktop_basket = document.querySelector('.main-nav__desktop-button');

desktop_basket.onclick = function () {
  overlay.classList.remove('hidden');
  list.classList.add('hidden');
}

add.onclick = function () {
  overlay.classList.add('hidden');
}
