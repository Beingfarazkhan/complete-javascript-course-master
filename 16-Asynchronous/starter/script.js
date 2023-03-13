'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1; //Handled by finally() func
};

///////////////////////////////////////
/*//Our First AJAX Call : XMLHttpRequest

const getCountry = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

  request.send();
  console.log(request.responseText); //Does not load

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `<article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} million people</p>
      <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
      <p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>
    </div>
  </article>
`;
    countriesContainer.insertAdjacentHTML('beforeend', html);

    countriesContainer.style.opacity = 1;
});
};
// getCountry('india');
getCountry('spain');
getCountry('portugal');
*/
///////////////////////////////////////////////////////////////////////////////////
/////WELCOME TO CALLBACK HELL
const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} million people</p>
      <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
      <p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>
    </div>
  </article>
`;
  countriesContainer.insertAdjacentHTML('beforeend', html);

  // countriesContainer.style.opacity = 1; //Handled by finally() func
};
/*
const getCountryAndNeighbour = function (country) {
  //   AJAX HTTP request for country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

  request.send();
  console.log(request.responseText); //Does not load

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const neighbour = data.borders[0];
    console.log(neighbour);
    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('italy');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

// Old Way
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// New Way
// const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
// console.log(request);

// Normal version
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// Arrow Function
// const getCountryData = country => {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(
//       response => response.json()
//       /*Second CallBack Function for error handling aka Catching*/
//       // err => alert(err)
//     )
//     .then(data => {
//       renderCountry(data[0]);
//       // console.log(data[0]);
//       const neighbour = data[0].borders[0];
//       // console.log(neighbour);

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(
//       response => response.json(),
//       err => alert(err)
//     )
//     .then(data => {
//       // console.log(data[0]);
//       renderCountry(data[0], 'neighbour');
//     })
//     .catch(err => {
//       console.error(`${err} 💣💣🔥`);
//       renderError(`Something Went Wrong 💣💣🔥 ${err.message}. Try Again!`);
//     })
//     .finally(() => {
//       console.log('Always called wether the promise is fulfilled or rejected');
//       // Use Case : Add a spinner when an async operation starts
//       countriesContainer.style.opacity = 1;
//     });
// };

// // getCountryData('germany');
// // getCountryData('portugal');

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });
///////////////////////////////////////
// Consuming Promises
// Chaining Promises
// Handling Rejected Promises
// Throwing Errors Manually

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'dfsdfdef';

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

/*
const getCountryData = function (country) {
  // Country 1
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })

    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});
// getCountryData('australia');

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// fetch('https://geocode.xyz/52.508,13.381?geoit=json')
//   .then(response => {
//     console.log(response);
//     return response.json();
//   })
//   .then(data => console.log(data));

////////////////////////////////////////////////////////////////////////////////////
// Event Loop in Practice :

//  MICROTASK QUEUE >>> CALLBACK QUEUE

/*
console.log('Test Start');
setTimeout(() => console.log('0 sec timer'), 0); //Callback queue

// Promises are resolved in microtask queue
Promise.resolve('Promise 1 is resolved ').then(res => console.log(res));
Promise.resolve('Promise 2 is resolved').then(res => {
  console.log('Timer for promise 2 ends');
  setTimeout(() => {
    console.log(res);
  }, 1000);
});
Promise.resolve('Promise 3 is resolved ').then(res => console.log(res));
console.log('Test End');

*/

//////////////////////////////////////////////////////////////////////////////////////
// Creating Promises :

// Note : every promise has an executor function which runs whenever the Promise Constructor is executed
/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery Draw is awaiting....');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('Congratulations you win the lottery !!!');
    } else {
      reject(new Error('You Lost ! try again later'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
*/
