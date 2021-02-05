const fruits = ["apple", "apple", "banana", "peach", "pear"];

// HOF => Higher Order Function
// filter will loop through all the array's values
// return a brand new array, containing only the values that  passed the provided test
// the test you provide in the callback function should return a boolean

const filteredFruits = fruits.filter(function (fruit) {
  return fruit !== "apple" && fruit !== "peach"; // keep any fruit that's not an apple
});

console.log(filteredFruits === fruits);
// console.log("step 1");
// console.log(filteredFruits);
// console.log(filteredFruits === fruits);

// code a filter function using HOF
// keep only the apples

const onlyApples = fruits.filter(function (fruit, index, allFruits) {
  // console.log("--- filter callback has been called ---");
  // console.log(fruit);
  // console.log(Array.isArray(fruit));
  // console.log(index);
  // if (index === 0) console.log(allFruits);
  // console.log("------");
  // console.log(fruit === "apple");
  return fruit === "apple";
});

// console.log(onlyApples);

// CODE THE SAME AS ABOVE BUT WITH A FAT ARROW FUNCTION

// fruits.filter(function(fruit) {
//   return fruit === "apple";
// });

// const onlyApples2 = fruits.filter(fruit => fruit === "apple");

// const onlyApples3 = fruits.filter(fruit => {
//   return fruit === "melon";
// });

// console.log("step 3");
// console.log(onlyApples2);
// console.log(onlyApples3);


const noApplesThere = fruits.filter((fruit) => fruit !== "apple");

// console.log("onlyApples : ", onlyApples);

// console.log("noApplesThere : ", noApplesThere);

const numbers = [1, 20, 50, 100, 1000, -50];

// filter this array to keep only the values that >= 100

const greaterThanEqualTo100 = numbers.filter(number => number >= 100);

const greaterGigiThanEqualTo100 = numbers.filter(function(value) {
  return value >= 100;
});

console.log("greater than equal to 100");
console.log(greaterGigiThanEqualTo100);



return;


































const filteredNumbers = numbers.filter(function (nb) {
  return nb >= 100;
});

const filteredNumbers2 = numbers.filter((nb) => nb >= 100);

console.log(filteredNumbers2);

const equation = 1000 >= 100;

const products = [
  { name: "pan", price: 20 },
  { name: "seat", price: 30 },
  { name: "car", price: 20000 },
];

// keep only the products with a price less than 1000

const cheapProducts = products.filter(function (prod) {
  return prod.price > 1000;
});


console.log("cheapProducts > ", cheapProducts);