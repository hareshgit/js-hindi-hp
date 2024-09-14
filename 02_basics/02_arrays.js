const marvel_heros = ['Thor', 'Ironman', 'Spiderman']
const dc_heros = ['Superman', 'Flash', 'Batman']

// =========== push method ==============
console.log("=============== push method ============");

//marvel_heros.push(dc_heros);                    // Add array inside array, which is not good method

// console.log(marvel_heros);           // Ouput: [ 'Thor', 'Ironman', 'Spiderman', [ 'Supoerman', 'Flash', 'Batman' ] ]
// console.log(marvel_heros[3][1]);     // Output: Flash

// =========== concat method ==============
console.log("=============== concat method ============");

const allHeros = marvel_heros.concat(dc_heros)                    // Add array inside array, which is not good method
console.log(allHeros);                  // Output: [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

// =========== spread method ==============
console.log("=============== spread method ============");

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);             // Output: [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

// =========== flat method ==============
console.log("=============== flat method ============");
const array_in_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_array1 = array_in_array.flat(0)
const real_array2 = array_in_array.flat(1)
const real_array3 = array_in_array.flat(2)
const real_array4 = array_in_array.flat(Infinity)
console.log(real_array1);
console.log(real_array2);
console.log(real_array3);
console.log(real_array4);

// =========== from method (Convert any data type into array)==============
console.log("=============== from method ============");
console.log(Array.isArray("Haresh"));
console.log(Array.from("Haresh"));
console.log(Array.from("Haresh")[0]);
console.log(Array.from({name: "Haresh"}));  // Output Empty array . Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
