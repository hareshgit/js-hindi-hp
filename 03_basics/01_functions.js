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
