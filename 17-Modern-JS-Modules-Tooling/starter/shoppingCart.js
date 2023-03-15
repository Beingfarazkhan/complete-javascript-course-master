// Exporting module
console.log('Exported Module');

const shippingCost = 10;
const cart = [];

// Blocking Code :
// console.log('Started Fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finished Fetching users');

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `Added ${quantity} ${product}${quantity > 1 ? 's' : ''} to the cart.`
  );
};

const totalQuantity = 10;
const totalPrice = 1270;
export { cart, totalPrice, totalQuantity as tq };

// Note : Default exports are used when one default value has to be exported, it doesnt have a name

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `Added ${quantity} ${product}${quantity > 1 ? 's' : ''} to the cart.`
  );
}
