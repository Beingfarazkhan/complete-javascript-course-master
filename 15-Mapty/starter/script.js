'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      //   console.log(position);
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      //   console.log(latitude, longitude);
      console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);

      map = L.map('map').setView([latitude, longitude], 13); //format [coords], zoom

      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      //   L.marker([latitude, longitude])
      //     .addTo(map)
      //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      //     .openPopup();

      map.on('click', function (mapE) {
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
      });
    },
    function () {
      alert('Error! getting your location.');
    }
  );
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  //   Clear Input Fields
  inputDistance.value =
    inputCadence.value =
    inputDuration.value =
    inputElevation.value =
      ' ';

  //   Display Marker
  console.log(mapEvent);
  const { lat: mapLatitude, lng: mapLongitude } = mapEvent.latlng;
  console.log(mapLatitude, mapLongitude);
  L.marker([mapLatitude, mapLongitude])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('Workout')
    .openPopup();
});

inputType.addEventListener('change', function () {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});
