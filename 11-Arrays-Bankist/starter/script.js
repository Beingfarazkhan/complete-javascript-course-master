'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
/////////////////////////////////////////////////

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i, arr) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
  <div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__value">${mov}€</div>
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
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, curr) => acc + curr);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, curr) => acc + curr);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .reduce((acc, curr) => acc + curr);
  labelSumInterest.textContent = `${interest}€`;
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
  displayMovements(acc.movements);
  // Display calculated Balance
  calcDisplayBalance(acc);
  // Display Summary of the Movements
  calcDisplaySummary(acc);
};
// Logout functionality
const loginUser = function () {
  inputLoginPin.style.opacity = 0;
  inputLoginUsername.style.opacity = 0;
  btnLogin.style.opacity = 0;
  btnLogout.style.opacity = 100;
  btnLogout.style.top = '30px';
};
const logoutUser = function () {
  inputLoginPin.style.opacity = 100;
  inputLoginUsername.style.opacity = 100;
  btnLogin.style.opacity = 100;
  btnLogout.style.opacity = 0;
  btnLogout.style.top = '-30px';
  containerApp.style.opacity = 0;
  labelWelcome.textContent = 'Log in to get started';
  // window.location.reload();
};

let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount) {
    if (currentAccount.pin === Number(inputLoginPin.value)) {
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
  const amount = Number(inputTransferAmount.value);
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
    updateMovements(currentAccount);
  } else {
    console.log('Insufficient Balance');
  }

  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
  inputTransferTo.blur();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
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

/* LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

console.log('For Of method');

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You Deposited ${movement}`);
  } else {
    console.log(`You Withdrew ${Math.abs(movement)}`);
  }
}
console.log('ForEach Method');
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You Deposited ${movement}`);
  } else {
    console.log(`You Withdrew ${Math.abs(movement)}`);
  }
});

console.log('For Of with indexing');

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Transaction ${i} : You Deposited ${movement}`);
  } else {
    console.log(`Transaction ${i} : You Withdrew ${Math.abs(movement)}`);
  }
}

console.log('For each Method with indexing');

movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Transaction ${i} : You Deposited ${movement}`);
  } else {
    console.log(`Transaction ${i} : You Withdrew ${Math.abs(movement)}`);
  }
});
*/
/* Lecture 2
const newCurrencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

newCurrencies.forEach(function (value, key, map) {
  console.log(`Country : ${key} , Currency : ${value}`);
});

const uniqueCurrency = new Set(['USD', 'GBP', 'EUR', 'USD', 'EUR', 'GBP']);

uniqueCurrency.forEach(function (value, _, set) {
  console.log(`${value} : ${value}`);
});
*/
