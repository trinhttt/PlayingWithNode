/*
New Features in ES6
* The let keyword
The let keyword allows you to declare a variable with block scope.
Let cho phép chúng ta khai báo biến trong phạm vi các khối lệnh. Các khối lệnh được định nghĩa bởi cặp ngoặc nhọn {}
*/
var x = 10;// Here x is 10
{
  let x = 2; // Here x is 2
}
// Here x is 10
/*
* The const keyword
The const keyword allows you to declare a constant (a JavaScript variable with a constant value).
Constants are similar to let variables, except that the value cannot be changed.
*/
var x = 10;// Here x is 10
{
  const x = 2; // Here x is 2
}
// Here x is 10

//* JavaScript Arrow Functions
// ES5
var x = function(x, y) {
   return x * y;
}

// ES6
const x = (x, y) => x * y;
const x = (x, y) => { return x * y };

//* JavaScript For/of
let cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + "<br>";
}

document.getElementById("demo").innerHTML = text;

//* JavaScript Classes
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);
//* JavaScript Promises
let myPromise = new Promise(function(myResolve, myReject) {
  myResolve(); // when successful
  myReject();  // when error
});

myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
//Example Using a Promise

let myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("I love You !!"); }, 3000);
});

myPromise.then(function(value) {
  document.getElementById("demo").innerHTML = value;
});

//or 
var wait1000 =  new Promise((resolve, reject)=> {
  setTimeout(resolve, 1000)
}).then(()=> {
  console.log('Yay!')
})

//or 
var wait1000 =  ()=> new Promise((resolve, reject)=> {setTimeout(resolve, 1000)})

wait1000()
    .then(function() {
        console.log('Yay!')
        return wait1000()
    })
    .then(function() {
        console.log('Wheeyee!')
    });

//* JavaScript Symbol
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  //Using Symbol() to create a unique identifiers
  let id = Symbol('id');
  person[id] = 140353;
// but person.id is still undefined
  Symbol("id") == Symbol("id") // false

//* Default Parameters
function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
  }
  myFunction(5); // will return 15

//* Function Rest Parameter
  function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
//* Array.find()
var numbers = [4, 9, 16, 25, 29];
//find(predicate: (value: number, index: number, obj: number[]) => unknown
/*Note that the function takes 3 arguments:

The item value
The item index
The array itself
*/
var first = numbers.find();

//value, index, array
function myFunction(value, index, array) {
  return value > 18;
}
//* Array.findIndex()
var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
//* New Math Methods

//Math.trunc()returns the integer part of x:
Math.trunc(4.9);    // returns 4
Math.trunc(4.7);    // returns 4
Math.trunc(4.4);    // returns 4
Math.trunc(4.2);    // returns 4
Math.trunc(-4.2);    // returns 4

//Math.sign(x) returns if x is negative, null or positive:
Math.sign(-4);    // returns -1
Math.sign(0);    // returns 0
Math.sign(4);    // returns 1

//Math.cbrt(x) returns the cube root of x:
Math.cbrt()
Math.log2()
Math.log10()

//* New Number Properties

var  x = Number.EPSILON;//2.220446049250313e-16
var x = Number.MIN_SAFE_INTEGER;//-9007199254740991
var x = Number.MIN_SAFE_INTEGER;//9007199254740991
//* New Number Methods
//Safe integers are all integers from -(2^53 - 1) to +(2^53 - 1).
//This is safe: 9007199254740991. This is not safe: 9007199254740992.
//ES6 added 2 new methods to the Number object:
Number.isInteger(10);        // returns true
Number.isInteger(10.5);      // returns false
Number.isSafeInteger(10);    // returns true
Number.isSafeInteger(12345678901234567890);  // returns false
//
//* New Global Methods
//ES6 added 2 new global number methods:

//isFinite(): method returns false if the argument is Infinity or NaN.
isFinite(10/0);       // returns false
isFinite(10/1);       // returns true
//The global isNaN() method returns true if the argument is NaN
isNaN("Hello");       // returns true
//* JavaScript Modules


// New Features in ECMAScript 2016

//1.x ** y produces the same result as Math.pow(x, y):
let x = 5;
let z = x ** 2;          // result is 25
let z = Math.pow(x,2);   // result is 25
x **= 2; // result 25

// JavaScript Array.includes()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango"); // is true

// New Features in ECMAScript 2017
// JavaScript String padding
//padStart and padEnd to support padding at the beginning and at the end of a string.
let str = "5";
str = str.padStart(4,0);
// result is 0005

let str = "5";
str = str.padEnd(4,0);
// result is 5000

// JavaScript Object.entries: 
// JavaScript Object.values

//Object.values are similar to Object.entries, but returns a single dimension array of the object values
const person = {
  firstName : "John",
  lastName  : "Doe",
  age     : 50,
  eyeColor  : "blue"
};
Object.entries(person); //firstName,John,lastName,Doe,age,50,eyeColor,blue
Object.values(person);//John,Doe,50,blue

// JavaScript async functions
async function myDisplay() {
  let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
// JavaScript shared memory

// New Features in ECMAScript 2018
// Asynchronous Iteration
//for await () {}

// Promise Finally
let myPromise = new Promise();

myPromise.then();
myPromise.catch();
myPromise.finally();
// Object Rest Properties
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x; // 1
y; // 2
z; // { a: 3, b: 4 }
// New RegExp Features