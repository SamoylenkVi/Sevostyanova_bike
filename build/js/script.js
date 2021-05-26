const headerToggle = document.querySelector('.header__toggle');
const navigation = document.querySelector('.navigation')
const headerIcon = document.querySelector('.header__icon');
const header = document.querySelector('.header')

function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

// функция для проверки pageYOffset и накручивания/скручивания соответствующего класса
const checkYOffset = () => {
  if (window.pageYOffset > 0) {
    header.classList.add('header--scroll')
  } else {
    header.classList.remove('header--scroll')
  }
}

headerToggle.classList.remove('header__toggle--no-js');
navigation.classList.add('navigation--close')

headerToggle.addEventListener('click', (evt) => {
  evt.target.classList.toggle('header__toggle--open')
  headerIcon.classList.toggle('header__icon--open')
  navigation.classList.toggle('navigation--open')
  navigation.classList.toggle('navigation--close')
});

window.addEventListener('scroll', throttle(
  checkYOffset, // callback функция для проверки pageYOffset и накручивания/скручивания соответствующего класса
  300
));
