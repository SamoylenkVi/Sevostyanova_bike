'use strict';
const regexPhoneSubmit = /^(\+7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
const regexPhoneInput = /[^-\d\s/(/)]/gi;
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
