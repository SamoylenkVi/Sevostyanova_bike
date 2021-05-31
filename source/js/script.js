'use strict';
const regexPhoneSubmit = /^(\+7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
const regexPhoneInput = /[^-\d\s/(/)]/gi;
const headerToggle = document.querySelector('.header__toggle');
const navigation = document.querySelector('.navigation');
const headerIcon = document.querySelector('.header__icon');
const header = document.querySelector('.header');
const inputPhone = document.querySelector('#phone');
const inputName = document.querySelector('#name');
const form = document.querySelector('.promo__form');

const validate = () => {
  if (inputPhone) {
    inputPhone.addEventListener('input', () => {
      inputPhone.value = inputPhone.value.replaceAll(regexPhoneInput, '');
    });
  }
  if (form && inputName && inputPhone) {
    form.addEventListener('submit', (evt) => {

      const isPhoneValid = inputPhone.value.search(regexPhoneSubmit) !== -1;
      const isNameValid = inputName.value.length !== 0;

      if (!isPhoneValid || !isNameValid) {
        evt.preventDefault();
      }

      if (!isPhoneValid) {
        inputPhone.classList.add('invalid');
      } else {
        inputPhone.classList.remove('invalid');
      }

      if (!isNameValid) {
        inputName.classList.add('invalid');
      } else {
        inputName.classList.remove('invalid');
      }
    });
  }
};

validate();

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

inputPhone.addEventListener('input', () => {

});
