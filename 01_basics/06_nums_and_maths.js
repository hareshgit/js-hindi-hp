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

console.log("======== Maths =======");
console.log(Math);                      // Output: Object [Math] {}

console.log("======== Absolute Value =======");
console.log(Math.abs(-4));              // Output: 4
console.log(Math.abs(5));               // Output: 5

console.log("======== Round of value =======");
console.log(Math.round(3.2));           // Output: 3
console.log(Math.round(3.6));           // Output: 4

console.log("======== Ceiling of value =======");
console.log(Math.ceil(3.2));            // Output: 4
console.log(Math.ceil(3.6));            // Output: 4

console.log("======== Floor of value =======");
console.log(Math.floor(3.2));           // Output: 3
console.log(Math.floor(3.6));           // Output: 3

console.log("======== Square root of value =======");
console.log(Math.sqrt(9));              // Output: 3

console.log("======== Power of value =======");
console.log(Math.pow(2, 3));              // Output: 8 (2 rest to 3 mean 2*2*2)
console.log(Math.pow(3, 3));              // Output: 27 (3 rest to 3 mean 3*3*3)

console.log("======== Minimum Value of array value =======");
console.log(Math.min(2, 5, 6, 1));              // Output: 1
console.log(Math.min(2, 5, -6, 1));              // Output: -6

console.log("======== Maximum Value of array value =======");
console.log(Math.max(2, 5, 6, 1));              // Output: 6
console.log(Math.max(2, 5, -6, 1));              // Output: 5

console.log("======== Random value (Always display value between 0 to 1) =======");
console.log(Math.random());         // Output: 0.2933934100352982
console.log(Math.random()*10);      // Output: 7.034521540343556 (may be 0 valu coming. so add 1 to avoid 0 value)
console.log(Math.random()*10 + 1);  // Output: 8.242116063920676 (Not recommended)
console.log((Math.random()*10) + 1);  // Output: 4.388836810800915 (Recommended)
console.log(Math.round((Math.random()*10) + 1));  // Output: 4 

console.log("======== Output value must be greater than 10 and less than 20 =======");
const minValue = 10
const maxValue = 20
console.log(Math.floor((Math.random() * (maxValue - minValue)) + 1) + minValue);  // Output: between 10 to 20

