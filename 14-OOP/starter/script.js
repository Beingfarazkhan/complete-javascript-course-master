'use strict';

/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to do this : because it creates different properties.
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(jonas instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.__proto__);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';

console.log(jonas.species, matilda.species);
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

// const arr = [10, 12, 13, 321, 2, 121, 423];
console.log(arr.__proto__);

///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);



////////////////////////////////////////////////////////////////////////////////
// Classes in JS

// Class Expressions :
// const PersonCl = class{}

// Class Declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Instance Methods

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey! ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  set bloodType(type) {
    this._bloodType = type;
  }
  get bloodType() {
    return this._bloodType;
  }

  // Static Method
  static hey() {
    console.log('Hello Brother !🙋🏻‍♂️');
  }
}

PersonCl.hey = function () {
  console.log('Hello Brother !🙋🏻‍♂️');
};

PersonCl.hey();
// jonas.hey() gives error because hey() is not defined in the prototype of Jonas

const jessica = new PersonCl('Jessica', 1990);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__);
PersonCl.prototype.greet = function () {
  console.log(`Hey! ${this.firstName}`);
};

jessica.greet();

//1) Classes are not hoisted :
// cannot be used before declaration

//2) Classes are first class citizes :
// we can pass them into functions and can also return them

//3) Classes are Executed in strict modes :

const walter = new PersonCl('Walter White', 1965);
walter.bloodType = 'Meth';
console.log(walter);
// PersonCl.hey();

///////////////////////////////////////
// Setters and Getters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

/////////////////////////////////////////////////////////
// Objects Create

const personProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // Init Function works as Constructor

  init(fullName, birthYear) {
    this.firstName = fullName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(personProto);
console.log(steven);

steven.fullName = 'Steven';
steven.birthYear = 1991;

steven.calcAge();

const sarah = Object.create(personProto);
sarah.init('Sarah Conors', 1980);
sarah.calcAge();

console.log(sarah.__proto__);



///////////////////////////Inheritance//////////////////////////////////////////////

// Inheritance Between Classes : Using Constructor Function

const Person = function (fullName, birthYear) {
  this.birthYear = birthYear;
  this.fullName = fullName;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);
// Student.prototype = Person.prototype Wont Work as it will make Student
// the exact Replica of Person

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

//////////////////////////////
// Inheritance Between "Classes": ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Super always called first !!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 1990, 'Computer Science');

console.log(martha);
martha.introduce();
martha.calcAge();
// console.log(`${martha.introduce()} and my age is ${martha.calcAge()}`); wont work
