'use strict';

/*
Lecture 1
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5 Way of doing the shorting in order to achieve default parameters
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH211');
createBooking('LH211', 3);
createBooking('LH211', 3, 250);
createBooking('LH211', undefined, 5);
*/

/*Lecture 2
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schemadtann',
  passport: 2345487423,
};
// const jonas = ['Jonas Schemadtann', 2345487423];
const checkIn = function (
  flightNum,
  { name: passengerName, passport: passengerPassport }
) {
  flightNum = 'LH199';
  console.log(passengerName);
  console.log(passengerPassport);
  passengerName = 'Mr. ' + passengerName;
  if (passengerPassport === 2345487423) {
    alert('Checked In !');
  } else {
    alert('Wrong Passport !');
  }
};

checkIn(flight, jonas);

// const arr = [2, 3, [4, 5]];
// const [i, , [x, y]] = arr;
// console.log(i, x, y);

// const arr1 = [9, 8];
// const [c = 1, d = 1, f = 1] = arr1;
// console.log(c, d, f);

const objectArray = {
  name: 'Faraz',
  age: 20,
  year: 2002,
  sports: ['cricket', 'football', 'volleyball'],
};
const {
  name: myName = 'Mr faraz',
  age: myAge = 23,
  gender = 'Male',
} = objectArray;
console.log(myName);
console.log(myAge);
console.log(gender);

let name = 'Jojo';
let age = 25;

({ name, age } = objectArray);
console.log(name);
console.log(age);

const openingHours = {
  fri: {
    open: 10,
    close: 20,
  },
  sat: {
    open: 12,
    close: 22,
  },
  sun: {
    open: 11,
    close: 23,
  },
};

const {
  // fri: { openFri: oFri, closeFri: cFri },
  // sat: { openSat: oSat, closeSat: cSat },
  // sun: { openSun: oSun, closeSun: cSun },
  fri: { open: openFri, close: closeFri },
  sat: { open: openSat, close: closeSat },
  sun: { open: openSun, close: closeSun },
} = openingHours;
// console.log(fri, sat, sun);
console.log(openFri, closeFri, openSat, closeSat, openSun, closeSun);

*/

/*Lecture 3
const oneword = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transform = function (str, fn) {
  console.log(`Original String : ${str}`);
  console.log(`Transformed String : ${fn(str)}`);
  console.log(`Tranformed by ${fn.name}`);
};

transform('Javascript is a good language', oneword);
transform('Javascript is a good language', upperFirstWord);

const high5 = function () {
  console.log('🎃');
};

document.body.addEventListener('click', high5);
*/

/*Lecture 4

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Faraz');

// const greet = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };
// greet('Hey')('Faraz');

const greet = greeting => name => {
  console.log(`${greeting} ${name}`);
};
greet('Hey')('Faraz');
greet('Hello')('Khan');
*/

/*Lecture 5
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} has booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(289, 'Faraz');
lufthansa.book(345, 'Khan');
// console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, 'Jonas');
console.log(eurowings);

book.call(lufthansa, 238, 'Brown');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss',
  iataCode: 'SZ',
  bookings: [],
};

book.call(swiss, 455, 'Kales');
console.log(swiss);

//Apply Method
const flightData1 = [787, 'Zoro'];
const flightData_2 = [100, 'Luffy'];

book.apply(swiss, flightData1);
console.log(swiss);

book.call(swiss, ...flightData_2);
console.log(swiss);

//Lecture 6

const bookEW = book.bind(eurowings);
const bookLH = book.bind(eurowings);
const bookSZ = book.bind(eurowings);

bookEW(23, 'Sarah Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Joseph kennedy');
bookEW23('Jibran Gallgory');

const bookEWzoro = book.bind(eurowings, 23, 'zoro');
bookEWzoro();
bookEWzoro();

// Binding object to function
lufthansa.planes = 300;
lufthansa.buyNewPlanes = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyNewPlanes.bind(lufthansa));

swiss.planes = 150;
eurowings.planes = 250;

const buyPlanes = lufthansa.buyNewPlanes;

document
  .querySelector('.buy2')
  .addEventListener('click', buyPlanes.bind(swiss));
document
  .querySelector('.buy1')
  .addEventListener('click', buyPlanes.bind(eurowings));

// Partial Application:
const addtax = (rate, value) => value + rate * value;
console.log(addtax(0.1, 100));

const addVat = addtax.bind(null, 0.23);
// Function looks like
// addvat  = value => value + value*0.23
console.log(addVat(100));

const addNewTax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addNewVat = addNewTax(0.23);
console.log(addNewVat(2000));
console.log(addNewVat(1000));

const newAddTaxrate = rate => value => value + value * rate;
const newAddVatrate = newAddTaxrate(0.23);
console.log(newAddVatrate(2000));
console.log(newAddVatrate(1000));
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀


const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const opt = Number(
      prompt(
        `${this.question}\n${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}\n(Write option number)`
      )
    );
    console.log(opt);
    if (opt === 0 || opt == 1 || opt === 2 || opt === 3) {
      this.answers[opt] += 1;
      this.displayResults();
      this.displayResults('string');
    }
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll Results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();
// console.log(poll.answers);

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });



// Immediately invoked functions

(function () {
  console.log('This function will not be called again');
})();

(() => {
  console.log('This func will also not called again');
})();
*/

/*
// closures

const privateBooking = function () {
  let passengerCount = 5;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} Passengers`);
  };
};
const booker = privateBooking();

booker();
booker();
booker();
*/
///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
// */
// let redOn = true;
// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//     redOn = false;
//   });
// })();

const togglw = function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  const bg = document.querySelector('body');
  let redOn = true;
  bg.addEventListener('click', function () {
    if (redOn === true) {
      header.style.color = 'blue';
      redOn = false;
    } else {
      header.style.color = 'red';
      redOn = true;
    }
  });
};
togglw();
togglw();
togglw();
togglw();
togglw();
togglw();
togglw();
togglw();
togglw();
togglw();
togglw();
togglw();
