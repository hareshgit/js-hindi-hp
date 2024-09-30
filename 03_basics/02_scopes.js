let a = 10
const b = 20
var c = 30

console.log(a);         // Output: 10
console.log(b);         // Output: 20
console.log(c);         // Output: 30         
// ====================================================================
// {} means scope
// when coming with function or if-else then called as scope
// when coming with object then called as object declaration

var f = 300         // Global scope

if (true){
    let d = 10          // Block scope
    const e = 20        // Block scope
    var f = 30          // Block scope
}

// console.log(d);         // Output: ReferenceError: d is not defined
// console.log(e);         // Output: ReferenceError: e is not defined
console.log(f);         // Output: 30

// ====================================================================

let d = 100                 // Global scope
const e = 200               // Global scope
var f = 300                 // Global scope

if (true){
    let d = 10                  // Block scope
    const e = 20                // Block scope
    var f = 30                  // Block scope
    console.log("Inner: ", a);  // Output: 10
    
}

console.log(d);         // Output: 100
console.log(e);         // Output: 200
console.log(f);         // Output: 30