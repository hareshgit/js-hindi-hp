// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

console.log("=============== Basics of Array ===================");
const myArr = [1, 2, 3, 4, 5, 6, 7, 8]

const myHeros = ["Shaktiman", "Spiderman", "Superman"]
const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[0]);                          // Output: 1

// Array Methods

console.log("=============== push method (add value in array at last) ===================");
myArr.push(9);
myArr.push(10);
console.log(myArr);                             // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("=============== pop method (remove last value from array)===================");
myArr.pop();
console.log(myArr);                             // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("=============== unshift method (add value in array at start) ===================");
myArr.unshift(11);
console.log(myArr);                             // Output: [11, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("=============== shift method (remove first value from array)===================");
myArr.shift();
console.log(myArr);                             // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("=============== includes method (check whether values available in array or not (true/false))===================");
console.log(myArr.includes(9));                 // Output: true
console.log(myArr.includes(10));                // Output: false

console.log("=============== indexOf method (Current index of value in array)===================");
console.log(myArr.indexOf(12));                 // Output: -1
console.log(myArr.indexOf(8));                  // Output: 7

console.log("=============== Array join (join and convert into typeof string)===================");
const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


// slice and splice
// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
console.log("=============== slice method (join and convert into typeof string)===================");
console.log(myArr.slice(2));
console.log(myArr.slice(2, 9));
console.log(myArr.slice(1, 10));
console.log(myArr.slice(-2));
console.log(myArr.slice(2, -1));
console.log(myArr.slice());


console.log("A ", myArr);
const myArrN1 = myArr.slice(1,3)
console.log(myArrN1);
console.log("B", myArr);

console.log("=============== splice method (join and convert into typeof string)===================");
const months = ['Jan', 'March', 'April', 'June'];
console.log(months);
months.splice(1, 0, 'Feb');             // 0 means Not delete
console.log(months);
months.splice(4, 1, 'May');             // 1 means delete
console.log(months);

const myArrN2 = myArr.splice(1,3)
console.log(myArrN2);
console.log("C", myArr);





