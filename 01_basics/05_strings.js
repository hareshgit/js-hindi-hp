const name = "Haresh"
const repoCount = 1

console.log(name + repoCount + " Value");    // Not recommended (old Style)

console.log(`Hello, my name is ${name} and my repository count is ${repoCount}.`);  // Recommended, (New Style). String Interpolation

const gameName = new String('Haresh-New')
console.log(gameName[0]);
console.log(gameName[3]);
console.log(gameName.__proto__);

console.log("===== String Length =====");
console.log(gameName.length);               // String length

console.log("===== String Upper Case =====");
console.log(gameName.toUpperCase());        // Convert to uppercase

console.log("===== String Character at Position =====");
console.log(gameName.charAt(5));            // Character at specifed index in string (Start from 0)

console.log("===== String index of character =====");
console.log(gameName.indexOf('e'));         // Specified charatcer position in string
console.log(gameName.indexOf('b'))

console.log("===== Sub String =====");
// Substring. Negative value ignore and starts from 0
const newName = gameName.substring(0, 3);
console.log(newName);
const newName1 = gameName.substring(-3, 3);
console.log(newName1);
const newName2 = gameName.substring(3, -3);
console.log(newName2);
const newName3 = gameName.substring(-3, 0);
console.log(newName3);
const newName4 = gameName.substring(3);
console.log(newName4);

console.log("===== Slice =====");
// Consider negative value and starts from negative value.
const anotherName = gameName.slice(3, 5);
const anotherName1 = gameName.slice(-8, 5);
console.log(anotherName);
console.log(anotherName1);

console.log("===== Trim =====");
const tName = "      Haresh  "
const tName1 = "      Har  esh  "
console.log(tName);
console.log(tName.trim());
console.log(tName1);
console.log(tName1.trim());

console.log("===== Replace =====");
const url = "https://haresh.com/haresh%20patel"
console.log(url.replace('%20', '-'));
console.log(url.includes('haresh'));
console.log(url.includes('rajesh'));

console.log("===== Split =====");
const spName = "Haresh-N-Patel"
console.log(spName.split('-'));
console.log(spName.bold());


