console.log("=======number==========");
console.log("2" > 1);       // Output: true
console.log("02" > 1);      // Output: true
console.log(2 > "1");       // Output: true

console.log("=======bollean==========");
console.log("2" > true);       // Output: true
console.log("02" > true);      // Output: true
console.log(1 > true);       // Output: false
console.log(1 == true);       // Output: true
console.log(0 == true);       // Output: false
console.log(1 == false);       // Output: false
console.log(0 == false);       // Output: true

console.log("=======null==========");
console.log(null > 0);      // Output: false
console.log(null == 0);     // Output: false
console.log(null >= 0);     // Output: true
// The reason is that an equality check == and comparisons >, <, >=, <= work diffrently.
// Comparisons convert null to a number, treatinf it as 0. That's why "null >= 0" is true and "null > 0" is false.

console.log(undefined > 0);      // Output: false
console.log(undefined < 0);      // Output: false
console.log(undefined == 0);     // Output: false
console.log(undefined >= 0);     // Output: false

//Strict check (===)
console.log("2" == 2);          // Output: true
console.log("2" === 2);         // Output: false

// Note: Avoid above tyoe of comparison while coding.
