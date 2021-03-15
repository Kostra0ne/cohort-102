const myFridge = [
  { name: "Grape", icon: "🍇", price: 2, weight: 4, type: "fruit" },
  { name: "Beer", icon: "🍺", price: 8, weight: 50, type: "drink" },
  { name: "Apple", icon: "🍏", price: 3, weight: 10, type: "fruit" },
  { name: "Avocado", icon: "🥑", price: 10, weight: 5, type: "vegetable" },
  { name: "Peach", icon: "🍑", price: 3, weight: 6, type: "fruit" },
  { name: "Carrot", icon: "🥕", price: 2, weight: 10, type: "vegetable" },
  { name: "Mango", icon: "🥭", price: 10, weight: 15, type: "fruit" },
  { name: "Caprisun", icon: "🧃", price: 1, weight: 10, type: "drink" },
  { name: "Tomato", icon: "🍅", price: 2, weight: 8, type: "vegetable" },
  { name: "Cucumber", icon: "🥒", price: 4, weight: 8, type: "vegetable" },
  { name: "Kiwi", icon: "🥝", price: 4, weight: 5, type: "fruit" },
  { name: "Potato", icon: "🥔", price: 1, weight: 30, type: "vegetable" },
  { name: "Eggplant", icon: "🍆", price: 1, weight: 30, type: "vegetable" },
];

/** 1. Create 3 different arrays:
 *   - 1 containing only the fruits
 *   - 1 containing only the vegetables
 *   - 1 containing only the drinks
 */

// const fruits = myFridge.filter((element) => element.type === "fruit"); // Fat arrow

// const fruits = myFridge.filter(filterFruits); // standard function

function filterFruits(element) {
  return element.type === "fruit";
}

function genericFilter(type) {
  // closure
  return function (element) {
    return element.type === type;
  };
}

// const genericFilter = (type) => (element) => element.type === type; // Same as above

const fruits = myFridge.filter(genericFilter("fruit"));
// const fruits = myFridge.filter(genericFilter("vegetable"));
// const fruits = myFridge.filter(genericFilter("drink"));

console.log(fruits);

// const vegetables = myFridge.filter((element) => element.type === "vegetable");
// const drinks = myFridge.filter((element) => element.type === "drink");

// console.log(vegetables);
// console.log(drinks);

// /** 2. Create a new array containing only the icons
//  *  of the array of fruits.
//  *
//  */

// const fruitNames = fruits.map((fruit) => {
// console.log(fruit)
//   return fruit.name;
// });

const fruitNames = fruits.map((fruit) => fruit.name);
// console.log(fruitNames);

// /** 3. Display the total price (consol.log) of the:
//  *   - Fruits
//  *   - Vegetables
//  *   - Drinks
//  *
//  */

// const fruitTotalPrice = fruits.reduce((acc, curr) => acc + curr.price, 0);
// const vegetablesTotalPrice = vegetables.reduce(
//   (acc, curr) => acc + curr.price,
//   0
// );
// const drinksTotalPrice = drinks.reduce((acc, curr) => acc + curr.price, 0);

// console.log(fruitTotalPrice);
// console.log(vegetablesTotalPrice);
// console.log(drinksTotalPrice);
