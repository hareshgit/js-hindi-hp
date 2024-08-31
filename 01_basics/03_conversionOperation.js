// =============== Number testing ===============
let score = 33
let score1 = "33"
let score2 = "33abc"
let score3 = null
let score4 = undefined
let score5 = true
let score6 = false
let score7 = "Haresh"

// "33" => 33
// "33abc" => NaN (Not a Number)
// null => 0
// undefined => Nan
// true => 1
// false => 0
// "Haresh" => NaN


console.log(typeof score);
console.log(typeof(score));

console.log(typeof score1);
console.log(typeof(score1));

console.log("=============== Number testing ===============")
let valueInNumber = Number(score1)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let valueInNumber1 = Number(score2)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

let valueInNumber2 = Number(score3)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let valueInNumber3 = Number(score4)
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

let valueInNumber4 = Number(score5)
console.log(typeof valueInNumber4);
console.log(valueInNumber4);

let valueInNumber5 = Number(score6)
console.log(typeof valueInNumber5);
console.log(valueInNumber5);

let valueInNumber6 = Number(score7)
console.log(typeof valueInNumber6);
console.log(valueInNumber6);

// =============== Boolean testing ===============
// 1 => true
// 0 => false
// "" => false
//"Haresh" => true
console.log("=============== Boolean testing ===============")
let isLoggedIn1 = 1
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1);

let isLoggedIn2 = 0
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2);

let isLoggedIn3 = ""
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3);

let isLoggedIn4 = "Haresh"
let booleanIsLoggedIn4 = Boolean(isLoggedIn4)
console.log(booleanIsLoggedIn4);

// String Testing
console.log("=================== Number to String conversion ================")
let Age = 45
let numberString = String(Age)
console.log(numberString);
console.log(typeof numberString)


// ********************* Operations ************************
console.log("======================== Operation =================");
let value = 3
let negValue = -value
console.log(negValue);

console.log("============= Basic Math operation ===========")
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2); // 2 power 2
console.log(2**3);
console.log(2/2);
console.log(2%2);

console.log("================== ToPrimitive ===============");
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); // whichever is first type, it is converted on that type
console.log(1 + 2 + "2");
console.log(3 + 2 * 4 / 5);

console.log("================== Tricky Conversion ================");
console.log(true);
console.log(+true); 
// console.log(true+); // SyntaxError: Unexpected token ')'
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

console.log(num1);
console.log(num2);
console.log(num3);

let gameCounter = 100
gameCounter++           // refer "prefix and postfix js mdn" from googling
console.log(gameCounter);

console.log("=================== prefix and postfix operator =====================")

// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`); // output: x:4, y:3

// If used prefix, with operator before operand (for example, ++a), the increment operator increments and returns the value after incrementing.
let a = 3;
let b = ++a;
console.log(`a:${a}, b:${b}`); // outuput: a:4, b:4

// ++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation

// link to study https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


