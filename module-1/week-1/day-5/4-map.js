// map is a HOF (Higher Order Function)
// it's part of Array's prototype : you can call it on any array
// map is usefull to modify values on the targeted array
// map ALWAYS returns a brand new array

const users = ["jill", "hakim", "suzane", "yang", "jose"];

// function foo () {
//   return "bar";
// }

// const foo = () => {
//   return "bar";
// }

// const foo = () =>  "bar";

console.log("here we are now ...");

// const userToUppercase = users.map(function (user) {
//   const modifiedName = user.toUpperCase();
//   // console.log(modifiedName);
//   return modifiedName;
// });

// console.log(users);
// console.log("here we are now ...");
// console.log(userToUppercase);

// const userToUppercase2 = users.map((user) => {
//   return user.toUpperCase();
// });

const userToUppercase3 = users.map((user) => user.toUpperCase());

const userToUppercase4 = users.map((user) => {
  if (user.length < 5) return user.toUpperCase();
});

// console.log(userToUppercase4);

const products = [
  { name: "pan", price: 20 },
  { name: "seat", price: 30 },
  { name: "car", price: 10000 },
];

const discountProducts = products.map((product) => {
  const cloneProduct = {...products }; 
  // above make a (shallow) copy of the product object
  cloneProduct.price -= 10;
  return cloneProduct;
});

// const discountProducts2 = products.map(function(product) {
//   const cloneProduct = { ...product };
//   cloneProduct.price -= 10;
//   return cloneProduct;
// });

console.log("'IT'S SALE TIME !!!");
console.log("original array of products");
console.log(products);
console.log("array of discounted products");
console.log(discountProducts);

return;

users.push("Freddo");

// A - use map to upperCase each user
const modifiedUsers = users.map(function (user) {
  return user.toUpperCase();
  //   return user.startsWith("j") ? user.toUpperCase() : user;
});

console.log("\n-------- A ---------");

// console.log(users);
// console.log(modifiedUsers);

// console.log("\nis it the same array ? : ", users === modifiedUsers);

// console.log("\n-------- B ---------");

// console.log(products);

// console.log("************");

// B -  use map to divide each product's price by 2
const modifiedProducts = products.map(function (product) {
  // console.log(product);
  //   product.price /= 2;
  //   return product;
});

// console.log(modifiedProducts);

// console.log("=============");

// console.log(products[0]);

// console.log("\nis it the same array ? : ", modifiedProducts === products);

// C - use map to clone each object and mutiply each price by 2
// warning : object are passed as reference, previously we modified the original object

// console.log("lets have a look to the original array ...");
// console.log(products);

// how can we leave the orginial objects untouched ?

const modifiedBrandNewProducts = products.map(function (product) {
  const copiedProduct = { ...product }; // cloned each product
  //   console.log(copiedProduct === product);
  copiedProduct.price *= 2;
  return copiedProduct;
});

console.log(modifiedBrandNewProducts);

console.log("=============");

console.log(products);

// console.log("\nis it the same array ? : ", modifiedProducts === products);

const booleans = [true, false, true, false];

// const o = {};
// const oo = o;
// const oCopied = {...o};

const modifiedBooleans = booleans.map(function (b) {
  return !b;
});

// const modifiedBooleans = booleans.map(b => !b)

// primitives string, numbers, booleans, null, undefined
// objects, arrays, function => passed as reference

console.log(booleans);
console.log(modifiedBooleans);
