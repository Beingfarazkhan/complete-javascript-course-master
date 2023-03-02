'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const header = document.querySelector('.header');
/*
// Creating Element and Inserting element
const message = document.createElement('div');
message.classList.add('cookie-message');

// message.textContent = "We use cookies for improved functionality and analytics."
message.innerHTML =
  'We use cookies for improved functionality and analytics.<button class="btn btn--close--cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete Elements
document.querySelector('.btn--close--cookie').addEventListener('click', () => {
  message.remove();
  // message.parentNode.removeChild(message); Conventional
});

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// Accessing styles
console.log(message.style.color); //Doesnt display because it isnt inline
console.log(message.style.backgroundColor);

// Access the class styles
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 50 + 'px';

console.log(message.style.height);

// manipulating css variables
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful Minimalist Logo';

// Non Standard

console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src); //gets relative link
console.log(logo.getAttribute('src')); //gets actual link

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data Attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

// Dont use : override all the existing classes and also it allows us only one class
logo.className = 'jonas';
*/

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current Scroll (x, y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'Heigth, width of the viewport ',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Old School technique :

  // Scrolling Functionality
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // New Method
  section1.scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('keyup', function (e) {
  console.log(e.key);
});

const alertH1 = function (e) {
  alert('addEventListener : You are now reading the heading element');

  // h1.removeEventListener('mouseenter', alertH1);
};

// remove event listener
// h1.removeEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000);

// Adding event listeners:

// Method 1 : New Method , you can add multiple eventlisteners using this
const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', alertH1);

// Method 2 : Old Method and only one event listener can be added rest are overrided
// h1.onmouseenter = function (e) {
//   alert('addEventListener : You are now reading the heading element');
// };

// Event Propagation

// Bubbling

// Capturing
