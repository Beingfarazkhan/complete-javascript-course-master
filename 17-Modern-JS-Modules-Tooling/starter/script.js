// Importing Module
import { addToCart, totalPrice as price, tq, cart } from './shoppingCart.js';
// console.log('Importing Module');

addToCart('bread', 5);
addToCart('butter', 1);
console.log(cart);
console.log(price, tq);

console.log('Importing Module');

// Named Imports :

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.cart);

// ShoppingCart.addToCart('butter', 1);
// console.log(ShoppingCart.cart);

// Default Imports :
// note: you can use default and named exports together but its not a good practice to do that
// import add, {
//     addToCart,
//   totalPrice as price,
//   tq,
//   cart,
// } from './shoppingCart.js';

// add('pizza', 2);
// console.log(price, tq);

// console.log(cart); //Cart is dynamic

// addToCart('bread', 4);
// addToCart('pasta', 1);
// addToCart('milk', 6);

// import add from './shoppingCart.js';

// add('pizza', 2);

/*
// Top Level Await

// Blocks execution of entire module : Await outside any async will block the code of the module as well as the module importing it

// console.log('Start Fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = await getLastPost();
// Not clean
// const lastPost = getLastPost();
// lastPost.then(last => console.log(last));

console.log(lastPost);

///////////////////////////////////////
// The Module Pattern using IIFE

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);


///////////////////////////////////////
// CommonJS Modules
// Export
export.addTocart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
  );
};

// Import
const { addTocart } = require('./shoppingCart.js');
*/

import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';

const state = {
  cart: [{ pizza: 2, burger: 9, pasta: 3 }],
  addToCart() {
    console.log('added');
  },
  removeFromCart() {
    console.log('removed');
  },
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('Test').then(res => console.log(res));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';
