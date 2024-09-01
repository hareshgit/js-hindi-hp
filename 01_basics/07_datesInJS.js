// Reference Doc:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

console.log("========== Define date ============")
let myDate = new Date()
console.log(typeof myDate);

console.log("========== Date methods ============")
console.log(myDate);                            // Output: 2024-09-01T05:15:29.818Z
console.log(myDate.toString());     // Output: Sun Sep 01 2024 05:15:29 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());             // Output: Sun Sep 01 2024
console.log(myDate.toISOString());              // Output: 2024-09-01T05:15:29.818Z
console.log(myDate.toJSON());                   // Output: 2024-09-01T05:15:29.818Z
console.log(myDate.toLocaleDateString());       // Output: 9/1/2024
console.log(myDate.toLocaleString());           // Output: 9/1/2024, 5:15:29 AM
console.log(myDate.toLocaleTimeString());       // Output: 5:15:29 AM
console.log(myDate.toTimeString());     // Output: 05:15:29 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString());              // Output: Sun, 01 Sep 2024 05:15:29 GMT
console.log(myDate.getTime());                  // Output: 1725167729818
console.log(myDate.getTimezoneOffset());        // Output: 0
console.log(myDate.setTime());                  // Output: NaN (Not a Number)

console.log("=============== Declaring of Dates ==============")
let myCreatedDate = new Date(2023, 0, 25)           
console.log(myCreatedDate);                         // Output: 2023-01-25T00:00:00.000Z
console.log(myCreatedDate.toDateString());          // Output: Wed Jan 25 2023    

let myCreatedDate1 = new Date(2023, 0, 25, 5, 3)
console.log(myCreatedDate1);                        // Output: 2023-01-25T05:03:00.000Z
console.log(myCreatedDate1.toLocaleString());       // Output: 1/25/2023, 5:03:00 AM

let myCreatedDate2 = new Date(2023, 0, 25, 20, 3)
console.log(myCreatedDate2);                        // Output: 2023-01-25T20:03:00.000Z
console.log(myCreatedDate2.toLocaleString());       // Output: 1/25/2023, 8:03:00 PM

console.log("=============== Declaring of Dates with Date Format ==============")
let myCreatedDate3 = new Date("09-00-2024")
let myCreatedDate4 = new Date("09-01-2024")

console.log(myCreatedDate3);                         // Output: Invalid Date
console.log(myCreatedDate4);                         // Output: 2024-09-01T00:00:00.000Z
console.log(myCreatedDate4.toDateString());          // Output: Sun Sep 01 2024
console.log(myCreatedDate4.toLocaleString());        // Output: 9/1/2024, 12:00:00 AM

console.log("================= Time Stamp =================");
let myTimeStamp = Date.now()

console.log(myTimeStamp);                   // Output: 1725169042150
console.log(myCreatedDate4.getTime());      // Output: 1725148800000

console.log("=========== Convert miliseconds to seconds =============");
console.log(Date.now());                    // Output: 1725169233379
console.log(Date.now()/1000);               // Output: 1725169233.379
console.log(Math.floor(Date.now()/1000));   // Output: 1725169233

console.log("=========== Get specific information from Date =============");
let newDate = new Date()

console.log(newDate);                       // Output: 2024-09-01T05:47:02.746Z
console.log(newDate.getDate());             // Output: 1 
console.log(newDate.getDay());              // Output: 0
console.log(newDate.getFullYear());         // Output: 2024
console.log(newDate.getHours());            // Output: 5
console.log(newDate.getMilliseconds());     // Output: 746
console.log(newDate.getMinutes());          // Output: 47
console.log(newDate.getMonth());            // Output: 8
console.log(newDate.getMonth() + 1);        // Output: 9
console.log(newDate.getSeconds());          // Output: 2
console.log(newDate.getTime());             // Output: 1725169622746
console.log(newDate.getTimezoneOffset());   // Output: 0
console.log(newDate.getUTCDate());          // Output: 1
console.log(newDate.getUTCDay());           // Output: 0
console.log(newDate.getUTCFullYear());      // Output: 2024
console.log(newDate.getUTCHours());         // Output: 5
console.log(newDate.getUTCMilliseconds());  // Output: 746
console.log(newDate.getUTCMinutes());       // Output: 47
console.log(newDate.getUTCMonth());         // Output: 8
console.log(newDate.getUTCSeconds());       // Output: 2

console.log("=========== Customize format =============");
newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "GMT"
})
console.log(newDate);           // Output: 2024-09-01T05:57:34.806Z







