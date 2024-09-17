//Singleton object
// const tinderUser = new Object()          // Singleton object

const tinderUser1 ={}                       // Non Singleton object

// console.log(tinderUser);                // Output: {} Empty object
console.log(tinderUser1);               // Output: {} Empty object

tinderUser1.id = "123abc"
tinderUser1.name = "Sam"
tinderUser1.isLoggedIn = false

console.log(tinderUser1);            // Output: { id: '123abc', name: 'Sam', isLoggedIn: false }

console.log("=============== Objects inside Object ==============");
const regularUser = {
    email: "sam.other@google.com",
    fullname: {
        userfullname: {
            firstname: "Sam",
            lastname: "Other"
        }
    }
}

console.log(regularUser);
console.log(regularUser.email);         // Output: sam.other@google.com
console.log(regularUser.fullname);      // Output: { userfullname: { firstname: 'Sam', lastname: 'Other' } }
console.log(regularUser.fullname.userfullname);     // Output: { firstname: 'Sam', lastname: 'Other' }
console.log(regularUser.fullname.userfullname.firstname);   // Output: Sam
console.log(regularUser.fullname.userfullname.lastname);    // Output: Other

console.log("=============== Merge Objects ==============");
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1, obj2}
const obj4 = Object.assign(obj1, obj2)              //source taken as obj1
const obj5 = Object.assign({}, obj1, obj2)          //source taken as Empty curley brackets (recommended method)
const obj6 = {...obj1, ...obj2}                     // Spread method (Most recommended)
console.log(obj3);              // Output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
console.log(obj4);              // Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj5);              // Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj6);              // Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log("=============== Value coming from DB ==============");

const users = [
    {
        id: 1,
        name: "haresh",
        age: 49
    },
    {
        id: 2,
        name: "rajesh",
        age: 43
    }
]

console.log(users[0].name);                 // Output: haresh
console.log(users[1].name);                 // Output: rajesh

console.log("=============== Separate keys and Values. Help us while looping ==============");

console.log(tinderUser1);                                           // Ouput: { id: '123abc', name: 'Sam', isLoggedIn: false }

console.log(Object.keys(tinderUser1));                              // Ouput: [ 'id', 'name', 'isLoggedIn' ]           
console.log(Object.values(tinderUser1));                            // Ouput: [ '123abc', 'Sam', false ]
console.log(Object.entries(tinderUser1));                           // Ouput: [ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]

console.log(Object.values(tinderUser1).length);                     // Ouput: 3

console.log("=============== value available inobject or not ==============");

console.log(tinderUser1.hasOwnProperty(`isLoggedIn`));              // Ouput: true
console.log(tinderUser1.hasOwnProperty(`firstname`));               // Ouput: false

console.log("=============== De structuring of object ==============");
const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "haresh"
}

console.log(course.courseInstructor);
console.log(course["courseInstructor"]);

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: instructor} = course
const {courseInstructor: instructor} = course
const {courseInstructor: instructor} = course
console.log(instructor);

console.log("=============== API ==============");
// mdn: https://developer.mozilla.org/
// API: https://randomuser.me/
// JSON formatter: https://jsonformatter.org/





