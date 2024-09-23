function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName --> reference of function
// sayMyName() -->  execution of function

sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);    
}

// addTwoNumbers()                 // Output; NaN (Not a Number)

addTwoNumbers(3, 4)                 // Output: 7
addTwoNumbers(3, "4")               // Output : 34
addTwoNumbers(3, "a")               // Output : 3a
addTwoNumbers(3, null)               // Output : 3

// Please Note: function addTwoNumbers(number1, number2){ --- (number1, number2) called as parameters when function define.
// addTwoNumbers(3, 4) --- called as argument when function execution/call

const result = addTwoNumbers(3, 6)      // Output: 9
console.log("Result: ", result);        // Output: undefined

function multiplyTwoNumbers (number3,  number4){
    let result1 = number3 * number4
    console.log("Haresh");      // Whatever code written before return in functionn will execute
    return result1
    console.log("Haresh");      // Whatever code written after return in functionn will not execute
}

const result1 = multiplyTwoNumbers(3, 9)
console.log("Result: ", result1);

// You can write code as below too
function multiplyTwoNumbers (number5,  number6){
    return number5 * number6
}

const result2 = multiplyTwoNumbers(4, 9)
console.log("Result: ", result2);

function loginUserMessasge(username){
//    if (username === undefined){
//        console.log("Please enter a username");
//        return
//    }
    if (!username){
        console.log("Please enter a username");
        return
    }

    return `${username} just loggen in`
}

console.log(loginUserMessasge());

function loginUserMessasge1(username = "sam"){
    if (!username){
        console.log("Please enter a username");
        return
    }
        return `${username} just loggen in`
}
    
console.log(loginUserMessasge1("haresh"));

// Shoping Cart
console.log("=============== Shopping Cart ====================");
function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(2));         // Output: 2

function calculateCartPrice1(num2){
    return num2
}
console.log(calculateCartPrice1(200, 400, 500));         // Output: 200

function calculateCartPrice2(...num3){                  //... is a rest operator. Sometime use as a spread
    return num3
}
console.log(calculateCartPrice2(200, 400, 500));         // Output: [ 200, 400, 500 ]

function calculateCartPrice3(val1, val2, ...num4){       //... is a rest operator. Sometime use as a spread
    return num4
}
console.log(calculateCartPrice3(200, 400, 500, 2000));         // Output: [ 500, 2000 ]

console.log("=============== Functions with Object ====================");
const user = {
    username: "haresh",
    price: 199
}

function handleObject (anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);             // Output: Username is haresh and price is 199

handleObject({                  // Output: Username is sam and price is 299
    username: "sam",
    price: 299
})

console.log("=============== Functions with Arrays ====================");
const myNewArray = [200, 400, 100, 600]

function returnThirdValue(getArray){
    return getArray[1]
}

console.log(returnThirdValue(myNewArray));      // Output: 400

console.log(returnThirdValue([200, 100, 600, 400]));    // Output: 100

console.log("=============== Function scope, Global scope, Local scope etc.. ====================");
