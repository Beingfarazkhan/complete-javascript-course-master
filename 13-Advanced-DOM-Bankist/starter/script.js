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

// Button Scroll
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

// Navigation Scroll (Event Delegation)

// Normal Method
// document.querySelectorAll('.nav__link').forEach(el =>
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = el.getAttribute('href'); //this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// );

// Event delegation :
// 1) Add event listener to the common parent element
// 2) Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target);

  // MAtching Strategy
  if (e.target.classList.contains('nav__link')) {
    // console.log('Link');
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////     PRACTICE     ///////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

// Removing Event Listeners

// document.addEventListener('keyup', function (e) {
//   console.log(e.key);
// });

// const alertH1 = function (e) {
//   alert('addEventListener : You are now reading the heading element');

//   // h1.removeEventListener('mouseenter', alertH1);
// };

// remove event listener
// h1.removeEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000);

// Adding event listeners:

// Method 1 : New Method , you can add multiple eventlisteners using this
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', alertH1);

// Method 2 : Old Method and only one event listener can be added rest are overrided
// h1.onmouseenter = function (e) {
//   alert('addEventListener : You are now reading the heading element');
// };

/*

// Event Propagation

// Bubbling

// Capturing
//////////////////////////////////////
// Event Propagation in Practice
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});

*/

///////////////////////////////////////////////////////////////////////////////////////////
/*
// Dom Traversal

const h1 = document.querySelector('h1');

// Going Downwards to the child
console.log(h1.querySelectorAll('.highlight'));

console.log(h1.childNodes); //Gives everything inside the html including comments

console.log(h1.children); //Gives list of all the html elements inside the h1 tag(live collection)
// the above only works for direct children

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards to the parent
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
// closest can be defined as the opposite of query selector
// query selector finds child whereas
// Closest() finds parents
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways
console.log(h1.previousElementSibling);

console.log(h1.nextElementSibling);

console.log(h1.previousSibling);

console.log(h1.nextSibling);

// Trick to get all the sibiling is : get to parent element and then find all children

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    el.style.transform = 'scale(0.5)';
  }
});

*/
///////////////////////////////////////////////////////////////////////////////////////////
