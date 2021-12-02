// Object
const person = {
  firstName: "Test",
  lastName: "Testsson",
  age: 30,
};

// Accessing properties with dot notation
console.log(`Age is ${person.age}`);
// Accessing properties with square bracket notation
console.log(`Age is ${person["age"]}`);

// Iterating keys of object
for (const key of Object.keys(person)) {
  console.log(`The object key is ${key}`);
}

// Iterating values of object
for (const value of Object.values(person)) {
  console.log(`The object value is ${value}`);
}

const anotherPerson = {
  firstName: "Test2",
  lastName: "Testsson2",
  age: 302,
};

// Array of objects
const people = [person, anotherPerson];
console.log(people);

// Anonymous function
// Arrow function

function sayHi() {
  console.log("Hi!");
}

/* Function as a parameter 
  (this means we don't call the function when we pass it) */

/* setTimeout/setInterval (the first introduction to something that accepts
  a function as a parameter) */

// Named function as parameter
setTimeout(sayHi, 500);

// Anonymous function as a parameter
setTimeout(function () {
  console.log("I will run after 1 second");
}, 1000);

// Anonymous arrow function as a parameter
setTimeout(() => {
  console.log("I will run after 2 seconds");
}, 2000);

/* forEach, filter, map, reduce: four different functions
  that operate on all items of an array, by accepting a function that
  we define. */

const numbers = [1, 2, 3, 4, 5];

// forEach to print every value in an array
numbers.forEach((value) => console.log(value));

// filter to filter out certain values and produce a NEW array
const aboveThree = numbers.filter((value) => value > 3);
console.log(aboveThree);

// map to create a NEW array based on a return value
const ages = people.map((person) => person.age);

// reduce to produce a NEW value based on "reducing" an array
const totalAge = people.reduce((total, person) => total + person.age, 0);
console.log(`The average age is ${totalAge / people.length}`);
