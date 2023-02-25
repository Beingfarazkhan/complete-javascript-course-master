'use strict';
// Destructuring
// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  orderDelivery( //es6
    { time = '21:30', starterIndex = 2, starterMenu = 0 },
    address = 'WhiteHouse'
  ) {
    console.log(`time = ${time}, starterIndex = ${starterIndex}, starterMenu = ${starterMenu} },
    address = ${address}`);
  },
  order: function (starterIndex, mainIndex) {
    //old declaration
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// }

// for (const [i, element] of menu.entries()) {
//   console.log(`${i + 1} : ${element}`);
// }

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`${day} : ${open}`);
}

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.Risottoorder?.(0, 1) ?? 'Method does not exist');

const user = [{ name: 'Zoro', email: 'zoro@lost.io' }];
// const user = [];

console.log(user[0]?.name ?? 'User Does not exist');

for (const day of Object.keys(openingHours)) {
  console.log(day);
}
console.log(Object.keys(openingHours));

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
// const player1 = [...game.players[0]];
// const player2 = [...game.players[1]];
// const allPlayers = [...game.players[0], ...game.players[1]];
// const [player1, player2] = game.players;
// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// const [gk1, ...fieldPlayers1] = player1;
// const [gk2, ...fieldPlayers2] = player2;
// console.log(gk1, gk2);

// const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// const { odds } = game;
// const { team1, draw, team2 } = odds;
// const { team1, x: draw, team2 } = game.odds;
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(draw);

// const printGoals = function (...scored) {
//   console.log(`The total number of goals scored are ${scored.length}`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// team1 > team2 && console.log('Team 2 is more likely to win.');
// team1 < team2 && console.log('Team 1 is more likely to win.');

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// let a = 999;
// let b = 234;
// console.log(a, b);

// let obj = { a: 23, b: 34, c: 33 };
// ({ a, b } = obj);
// console.log(a, b);

// let { fri } = openingHours;
// console.log(fri);

// let {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// // Object destructuring on function call
// restaurant.orderDelivery({
//   starterIndex: 1,
//   mainIndex: 0,
//   time: '22:00',
//   address: 'via del sole',
// });
// restaurant.orderDelivery({
//   time: '20:30',
//   address: 'via del sole',
// });

/*
const [first, second] = restaurant.categories;
console.log(first, second);
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// let temp = secondary;
// secondary = main;
// main = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starterDish, mainDish] = restaurant.order(2, 0);
console.log(starterDish, mainDish);

const nested = [1, 2, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Arguments
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
