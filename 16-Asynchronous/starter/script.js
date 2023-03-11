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
const getCountryData = country => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(
      response => response.json()
      /*Second CallBack Function for error handling aka Catching*/
      // err => alert(err)
    )
    .then(data => {
      renderCountry(data[0]);
      // console.log(data[0]);
      const neighbour = data[0].borders[0];
      // console.log(neighbour);

      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(
      response => response.json(),
      err => alert(err)
    )
    .then(data => {
      // console.log(data[0]);
      renderCountry(data[0], 'neighbour');
    })
    .catch(err => {
      console.error(`${err} 💣💣🔥`);
      renderError(`Something Went Wrong 💣💣🔥 ${err.message}. Try Again!`);
    })
    .finally(() => {
      console.log('Always called wether the promise is fulfilled or rejected');
      // Use Case : Add a spinner when an async operation starts
      countriesContainer.style.opacity = 1;
    });
};

// getCountryData('germany');
// getCountryData('portugal');

btn.addEventListener('click', function () {
  getCountryData('portugal');
});
