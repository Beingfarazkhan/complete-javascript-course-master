// Importing Module
// import { addToCart, totalPrice as price, tq, cart } from './shoppingCart.js';
// console.log('Importing Module');

// addToCart('bread', 5);
// addToCart('butter', 1);
// console.log(cart);
// console.log(price, tq);

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

import add from './shoppingCart.js';

add('pizza', 2);
