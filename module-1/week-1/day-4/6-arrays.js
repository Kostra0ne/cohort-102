const array1 = [10, 2, 3, 4, 23, 44, 66, 5, 100, 1000]; // l(5)
//              0   1  2  3  4 ....
// access first value in array1[]
// console.log(array1.length);
console.log("------ 1 ----");
console.log(array1[0]);
// access last value in array1[]
console.log(array1[array1.length - 1]);
// loop through array1[] with a for loop
//              0 > 10
for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

console.log("loop 1 end");

// loop through array1[] with a while loop
let count = 0;
console.log("------ 2 ----");

while (count < array1.length) {
  console.log(count + " => " + array1[count]);
  count++;
}

console.log("------ 3 ----");
const alphabet = "abcdefghijklmnopqrstuvwxyz";

/**
 * @description a simple function parsing a provided string
 * @author guillaume@owlab.io
 * @param {String} a string to parse
 * @throws new Error if str is not a string
 */
function parseString(str) {
  if (typeof str !== "string")
    throw new Error("Hey ! I need a string here !!!");

  for (let index = str.length - 1; index >= 0; index--) {
    const element = str[index];
    console.log(element);
  }
  console.log("------");
}

try {
  parseString(alphabet);
  parseString("guillaume");
  parseString({});
} catch (err) {
  console.log(err);
}

// try {
//   console.log("hello");
//   console.log("foo");
//   console.log("bar");
//   throw new Error("damn ...");
//   console.log("dead code");
// } catch(totoTheError) {
//   console.log(totoTheError);
// }

console.log("------------------");
console.log("PART II");
console.log("------------------");

const users = ["jill", "will", "bill", "jack", "tom", "john", "kim", "kill"]; // (l=8)
// indexes       0        1       2       3      4      5       6      7

const numbers = [100, 2.2, 42, 123, 100000, 200.2];

console.log(" users array length > ", users.length);
// console.log("-------");npm i jsdoc

// users.push("brian");
// console.log(" users array length > ", users.length);
// console.log(users.push("Siham"));

// users.push("johnny");

// users.unshift("hakim");
// users.unshift("sue", "rita");

console.log("--------");
console.log(users);
console.log("---A--->", users.length);
const removedUsers = users.splice(0, 3);
console.log("---B--->", users.length);
console.log(removedUsers);
console.log(users);

// users.unshift("toto");


// console.log(users);
// console.log(users[users.length - 1]);

// console.log( users[0] );

for (let i = 0; i < users.length; i += 1) {
  console.log(i);
  console.log(users[i]);
}

const booleans = [true, false, false, true, false];

for (let i = 0; i < booleans.length; i++) {
  console.log(booleans[i]);
}

/*

    USEFULL ARRAY METHODS
    ---------------------
    push	Adds a value at the end
    unshift	Adds a value at the beginning
    shift	Removes the first element
    pop 	Removes the last element
    splice	Removes elements from anywhere in the array
*/

//
const users2 = users;
const users2Real = [...users];

// users2.push("gui");

users2Real.push("gui");

// console.log(users);

// console.log(users2Real);

const copyOfNumbers = [...numbers];

// Copy an array with the spread operator
