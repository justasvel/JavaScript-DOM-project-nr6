let btnLeft = document.querySelector('#btn-left');
let btnRight = document.querySelector('#btn-right');
let btnHide = document.querySelector('#btn-hide');
let btnUnder = document.querySelector('#btn-under');
let btnReset = document.querySelector('#btn-reset');
let container = document.querySelector('.main');

let img = document.querySelector('img');

btnLeft.addEventListener('click', function () {
    container.classList.add('left');
    container.classList.remove('right');
    container.classList.remove('under');
    container.classList.remove('reset');
    img.classList.remove('hide');
});

btnRight.addEventListener('click', function () {
    container.classList.add('right');
    container.classList.remove('left');
    container.classList.remove('under');
    container.classList.remove('reset');
    img.classList.remove('hide');
});

btnHide.addEventListener('click', function () {
    img.classList.add('hide');
    container.classList.remove('left');
    container.classList.remove('right');
    container.classList.remove('under');
    container.classList.remove('reset');
});

btnUnder.addEventListener('click', function () {
    container.classList.add('under');
    container.classList.remove('left');
    container.classList.remove('right');
    container.classList.remove('reset');
    img.classList.remove('hide');
});

btnReset.addEventListener('click', function () {
    container.classList.remove('under');
    container.classList.remove('left');
    container.classList.remove('right');
    container.classList.remove('reset');
    img.classList.remove('hide');
});