// Object Literals & Object Contructor
// Prepared through constructor then it is called as Singleton
//Object.create

// Object literals
const mySym = Symbol("key1")

const jsUser = {
    name: "Haresh",
    "full name": "Haresh Vaviya",
    [mySym]: "mykey1",                  // For type as Symbol
    age: 49,
    location: "Surat",
    email: "haresh.v@google.com",
    isLoggedIn: false,
    lastLoggedInDay: ["Monday", "Saturday"]
}

console.log(jsUser.name);                   // Output: Haresh
console.log(jsUser["name"]);                // Output: Haresh

console.log(jsUser["full name"]);           // Output: Haresh Vaviya

console.log(jsUser.mySym);                  // Output: undefined
console.log(typeof jsUser.mySym);           // Output: undefined

console.log(jsUser[mySym]);                 // Output: mykey1
console.log(typeof jsUser[mySym]);          // Output: string

jsUser.email = "haresh.v@microsoft.com"     // change value if require
console.log(jsUser["email"]);               // Output: haresh.v@microsoft.com

// Object.freeze(jsUser)            // Freeze all values in Object. Changes in value will not reflect
jsUser.email = "haresh.v@surat.com"         // Try to change value
console.log(jsUser);
console.log(jsUser["email"]);               // Output: haresh.v@microsoft.com     

jsUser.greeting = function(){               
    console.log("Hello JS User");           // Output: Hello JS User
}
console.log(jsUser.greeting);               // Output: [Function (anonymous)]
console.log(jsUser.greeting());             // Output: undefined

jsUser.greeting2 = function(){
    console.log(`Hello, JS User, ${jsUser.name}`);  // Output: Hello, JS User, Haresh
}
console.log(jsUser.greeting2());            // Output: undefined
