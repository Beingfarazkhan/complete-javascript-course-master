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

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10); //Cutting edge javascript

  constructor(coords, distance, duration) {
    // this.date = ...
    // this.id = ... // Conventional Method
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);

    this.cadence = cadence;

    // Calling Methods
    this.calcPace();
  }

  // Calculating the pace
  calcPace() {
    // min/km
    this.pace = this.distance / this.duration;
    return this.pace;
  }
}

class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);

    this.elevationGain = elevationGain;

    // Calling Methods
    this.calcSpeed();
  }

  // Calculating the speed
  calcSpeed() {
    // km/hr
    this.speed = this.distance / this.duration;
    return this.speed;
  }
}

let map, mapEvent;

class App {
  #map;
  #mapEvent;
  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Error! getting your location.');
        }
      );
    }
  }

  _loadMap(position) {
    //   console.log(position);
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    //   console.log(latitude, longitude);
    console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);

    this.#map = L.map('map').setView([latitude, longitude], 13); //format [coords], zoom

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //   L.marker([latitude, longitude])
    //     .addTo(map)
    //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //     .openPopup();

    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }
  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }
  _newWorkout(e) {
    e.preventDefault();

    //   Clear Input Fields
    inputDistance.value =
      inputCadence.value =
      inputDuration.value =
      inputElevation.value =
        ' ';

    //   Display Marker
    console.log(this.#mapEvent);
    const { lat: mapLatitude, lng: mapLongitude } = this.#mapEvent.latlng;
    console.log(mapLatitude, mapLongitude);
    L.marker([mapLatitude, mapLongitude])
      .addTo(this.#map)
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
  }
}

// App Creation
const app = new App();
app._getPosition();
