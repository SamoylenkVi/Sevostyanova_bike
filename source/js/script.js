'use strict';
const headerToggle = document.querySelector('.header__toggle');
const navigation = document.querySelector('.navigation');
const headerIcon = document.querySelector('.header__icon');
const header = document.querySelector('.header');


function throttle(callback, wait, immediate = false) {
  let timeout = null;
  let initialCall = true;

  return function () {
    const callNow = immediate && initialCall;
    const next = () => {
      callback.apply(this, arguments);
      timeout = null;
    };

    if (callNow) {
      initialCall = false;
      next();
    }

    if (!timeout) {
      timeout = setTimeout(next, wait);
    }
  };
}

// функция для проверки pageYOffset и накручивания/скручивания соответствующего класса
const checkYOffset = () => {
  if (window.pageYOffset > 0) {
    header.classList.add('header--scroll');
  } else {
    header.classList.remove('header--scroll');
  }
};

headerToggle.classList.remove('header__toggle--no-js');
navigation.classList.add('navigation--close');

headerToggle.addEventListener('click', () => {
  if (headerToggle) {
    headerToggle.classList.toggle('header__toggle--open');
    headerIcon.classList.toggle('header__icon--open');
    navigation.classList.toggle('navigation--open');
    navigation.classList.toggle('navigation--close');
    document.body.classList.toggle('fixed');
  }
});

window.addEventListener('scroll', throttle(
    checkYOffset, // callback функция для проверки pageYOffset и накручивания/скручивания соответствующего класса
    300
));
