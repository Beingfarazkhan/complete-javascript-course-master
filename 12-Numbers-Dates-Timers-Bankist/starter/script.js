'use strict';

// Modified Bankist Application

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2023-02-28T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2023-01-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnLogout = document.querySelector('.func');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions
const formatCurrency = function (value, locale, currency) {
  const options = {
    style: 'currency',
    currency: currency,
  };
  const formattedMov = new Intl.NumberFormat(locale, options).format(value);
  return formattedMov;
};

const startLogOutTimer = function () {
  const tick = function () {
    // decrementing timer
    time--;

    // displaying timer
    const min = String(Math.floor(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    labelTimer.textContent = `${min}:${sec}`;

    // Stopping condition
    if (time === 0) {
      clearInterval(timer);
      logoutUser();
    }
  };
  // Set time to 5 minutes
  let time = 300;

  // call the function
  tick();

  // call the timer every second
  const timer = setInterval(tick, 1000);
  return timer;
};

const calcDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();

    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i, arr) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = calcDate(date, acc.locale);

    const formattedMov = formatCurrency(mov, acc.locale, acc.currency);

    const html = `
  <div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__date">${displayDate}</div>
  <div class="movements__value">${formattedMov}</div>
  </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);

  labelBalance.textContent = formatCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  );
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, curr) => acc + curr);
  labelSumIn.textContent = formatCurrency(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, curr) => acc + curr);
  labelSumOut.textContent = formatCurrency(
    Math.abs(out),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .reduce((acc, curr) => acc + curr);
  labelSumInterest.textContent = formatCurrency(
    interest,
    acc.locale,
    acc.currency
  );
};

const createUsernames = function (user) {
  const username = user
    .toLowerCase()
    .split(' ')
    .map(function (name) {
      return name[0];
    })
    .join('');
  return username;
};
accounts.forEach(function (user) {
  user.username = createUsernames(user.owner);
});

const updateMovements = function (acc) {
  // Display Credentials and Movements for the user
  displayMovements(acc);
  // Display calculated Balance
  calcDisplayBalance(acc);
  // Display Summary of the Movements
  calcDisplaySummary(acc);
};
// Login functionality

const loginUser = function () {
  inputLoginPin.style.opacity = 0;
  inputLoginUsername.style.opacity = 0;
  btnLogin.style.opacity = 0;
  btnLogout.style.opacity = 100;
  btnLogout.style.top = '30px';
};

// Logout functionality
const logoutUser = function () {
  inputLoginPin.style.opacity = 100;
  inputLoginUsername.style.opacity = 100;
  btnLogin.style.opacity = 100;
  btnLogout.style.opacity = 0;
  btnLogout.style.top = '-30px';
  containerApp.style.opacity = 0;
  labelWelcome.textContent = 'Log in to get started';
  labelTimer.textContent = `05:00`;
  // Reset Timer
  if (timer) clearInterval(timer);
  timer = startLogOutTimer();

  // window.location.reload();
};

let currentAccount, timer;

// Fake Logged in

// currentAccount = account1;
// updateMovements(account1);
// containerApp.style.opacity = 100;

// const date = new Date();
// const hour = `${date.getHours()}`.padStart(2, 0);
// const min = `${date.getMinutes()}`.padStart(2, 0);

// labelDate.textContent = `${calcDate(date)}, ${hour}:${min}`;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount) {
    if (currentAccount.pin === +inputLoginPin.value) {
      console.log('You are Logged In');
    } else {
      console.log('Incorrect Pin');
    }
  } else {
    console.log('Incorrect UserName');
  }
  // Display Ui and Welcome message
  labelWelcome.textContent = `Welcome Back, ${
    currentAccount.owner.split(' ')[0]
  }!`;
  // labelDate.textContent = `${calcDate(date)}, ${hour}:${min}`;

  // Timer starts
  if (timer) clearInterval(timer);
  timer = startLogOutTimer();

  // Date
  const now = new Date();

  const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    // weekday: 'long',
  };
  const locale = currentAccount.locale;
  console.log(locale);

  labelDate.textContent = Intl.DateTimeFormat(locale, options).format(now);

  // clear Login Credentials
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();
  inputLoginUsername.blur();

  // Display Credentials and Movements for the user
  // displayMovements(currentAccount.movements);
  // Display calculated Balance
  // calcDisplayBalance(currentAccount);
  // Display Summary of the Movements
  // calcDisplaySummary(currentAccount);
  // Making the app visible
  // can also be implemented using the function below
  updateMovements(currentAccount);

  containerApp.style.opacity = 100;
  // Removing the input fields and add Logout button
  loginUser();
  btnLogout.addEventListener(
    'click',
    logoutUser /* => {
    //   window.location.reload();
    // }*/
  );
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  if (
    amount <= currentAccount.balance &&
    amount > 0 &&
    recieverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);

    // Pushing dates
    currentAccount.movementsDates.push(new Date().toISOString());
    recieverAcc.movementsDates.push(new Date().toISOString());

    // update ui
    updateMovements(currentAccount);

    // Reset Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
  } else {
    console.log('Insufficient Balance');
  }
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
  inputTransferTo.blur();
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('loan');
  const amount = +inputLoanAmount.value;
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount / 10)) {
    setTimeout(function () {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());

      // update UI
      updateMovements(currentAccount);
    }, 3000);

    // Reset Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    inputLoanAmount.value = '';
    inputLoanAmount.blur();
  } else {
    console.log('Insufficient Requirements');
  }
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    // cleaning the ui
    inputCloseUsername.value = inputClosePin.value = '';
    inputCloseUsername.blur();
    inputClosePin.blur();
    logoutUser();
  } else {
    console.log('Invalid Credentials');
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// Number -> + in type conversion

/* create a date
const date = new Date();
console.log(date);

console.log(new Date(account1.movementsDates[0]));


// Get Methods
const future = new Date(2037, 11, 19, 15, 35, 5);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2144829905000));

console.log(Date.now());

// Set Methods
future.setFullYear(2040);
console.log(future);
// just like get methods , set methods exist for all of the above


// Number manipulations Intl

const num = 3883764.23;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping: false,
};

console.log('US :  ', new Intl.NumberFormat('en-US', options).format(num));
console.log('GB :  ', new Intl.NumberFormat('en-GB', options).format(num));
console.log('SY :  ', new Intl.NumberFormat('ar-SY', options).format(num));
*/

// set timeout

const ingredients = ['olives', 'spinach'];

const pizzatimer = setTimeout(
  (ing1, ing2) => {
    console.log(`Here is your pizza with ${ing1} and ${ing2}`);
  },
  10000,
  ...ingredients
);

if (ingredients.includes('spinach')) clearTimeout(pizzatimer);

console.log('waiting');

// Set Interval

// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);
