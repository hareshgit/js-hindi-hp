console.log("======== Numbers =======");

console.log("======== Define Variable =======");
const score = 100
console.log(score);                     // Output: 100

const balance = new Number(21000)
console.log(balance);                   // Output: [Number: 21000]

console.log("======== Convert to String =======");
console.log(balance.toString());                // Output: 21000
console.log(balance.toString().length);         // Output: 5
console.log(balance.toString().concat('0'));    // Output: 210000

console.log("======== Fixed =======");
console.log(balance.toFixed);           // Output: [Function: toFixed]
console.log(balance.toFixed(2));        // Output: 21000.00
console.log(balance.toFixed(1));        // Output: 21000.0

console.log("======== Precision =======");
const preNumber = 12.8966
console.log(preNumber.toPrecision(1));      // Output: 1e+1
console.log(preNumber.toPrecision(2));      // Output: 13
console.log(preNumber.toPrecision(3));      // Output: 12.9
console.log(preNumber.toPrecision(4));      // Output: 12.90

const preNumber1 = 123.8966
console.log(preNumber1.toPrecision(3));     // Output: 124
console.log(preNumber1.toPrecision(4));     // Output: 123.9
console.log(preNumber1.toPrecision(5));     // Output: 123.90

console.log("======== toLocaleString =======");
const hundreds = 10000000
console.log(hundreds.toLocaleString());            // Output: 10,000,000 (American Standard)
console.log(hundreds.toLocaleString('en-IN'));     // Output: 1,00,00,000 (Indian Standard)
