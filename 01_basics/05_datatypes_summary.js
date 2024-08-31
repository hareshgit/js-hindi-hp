// Primitive Data types (call by value)
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100               // Data type number
const scoreValue = 100.3        // Data type number

const isLoggedIn = true         // Data type boolean
const outSideTemp = null        // Data type object
let userEmail;                  // Data type undefined

const id = Symbol('123')            // Data type symbol
const anotherId = Symbol('123')     // Data type symbol

console.log(id);                    //Output: Symbol(123)
console.log(anotherId);             //Output: Symbol(123)
console.log(id == anotherId);       //Output: false

const bigNumber = 344545465464654645645645564563    // Data type number

// Non Primitive Data type (Reference)
// 3 Types: Array, Objects, Functions
// data types for all is Function

const heros = ["Shaktiman", "Nagraaj", "Doga"]      // Data type object
let myObj = {
    name: "Haresh",
    Age: 23
}                                                   // Data type object

console.log(heros);
console.log(myObj);

const myFunction = function(){
    console.log("Hello World!");
}                                                   // Data type function

myFunction();

console.log("============Data types of above defined parameters================")
console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outSideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);

// please refer: https://262.ecma-international.org/5.1/#sec-11.4.3
