// const numbers = [-1, 10, 1.78, 100, 200000];

// // HOF : reduce !
// // swiss army knife of the HOFs

// function makeASum(arrayNumbers) {
//   let sum = 0;
//   for (let i = 0; i < arrayNumbers.length; i++) {
//     sum += arrayNumbers[i];
//   }
//   return sum;
// }
// console.log("LONG WAY");
// console.log(makeASum(numbers));

// const sumWithReduce = numbers.reduce((accumulator, currentValue) => accumulator += currentValue, 0);

// const sumWithReduce = numbers.reduce(function (accumulator, currentValue, i) {
//   console.log(`step ${i + 1} => `);
//   console.log(currentValue);
//   const tmp = (accumulator += currentValue);
//   return tmp;
// }, 0);

// console.log("SHORT WAY");
// console.log(sumWithReduce);

let annasCredit = 1000;

const shopcart = [
  { name: "smartphone", price: 440 },
  { name: "computer", price: 1000 },
  { name: "gps", price: 100 },
];

const shopcartTotal = shopcart.reduce((acc, currentProduct) => {
  return (acc += currentProduct.price);
}, -annasCredit);

console.log("gimme money : " + shopcartTotal + " $$$");

const playersTeam = [
  { name: "fanny", score: 10, isOnline: false },
  { name: "vinz", score: 100, isOnline: false },
  { name: "andy", score: 1000, isOnline: true },
  { name: "gui", score: -10, isOnline: true },
];

const isEverybodyOnline = playersTeam.reduce(
  (acc, player) => acc && player.isOnline,
  true
);

console.log("are all the team players connected ? ", isEverybodyOnline);

const strings = [
  "hello",
  "world",
  "wax on and off",
  "coding is hard, coding is art, coding is fun",
];

const concatenatedString = strings.reduce((stock, currentString) => {
  // console.log(stock);
  return stock + " " + currentString;
}, "Anna");

console.log(concatenatedString);

// const sum = numbers.reduce(function (acc, currentValue) {
//   acc += currentValue;
//   return acc;
// }, 0);

// console.log("sum : ", sum);

// const startingArray = ["tablet"];

// function keepOnlyProductName(acc, product) {
//   acc.push(product.name);
//   return acc;
// }

// // const keepOnlyProductName = (acc, product) => {
// //   acc.push(product.name);
// //   return acc;
// // }

// const prodNames = products.reduce(keepOnlyProductName, startingArray);

// console.log("sum : ", prodNames);
