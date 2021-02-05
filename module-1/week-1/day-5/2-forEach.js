const numbers = [1, 2, 3, 4, 5, 33];
const users = ["jill", "will", "bill"];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// numbers.forEach(function (currentValue, i, fullArr) {
//   console.log(currentValue);
// });

// function displayArrayValue(currentValue) {
//   console.log(currentValue);
// }

// numbers.forEach(displayArrayValue);

// numbers.forEach(function (value) {
//   console.log(value);
// });

function yukaDoAnAction1(user, i) {
  console.log(i + " => ", user);
}

users.forEach(yukaDoAnAction1);

// FAT ARROW FUNCTIONS

// A - multiliners

const yukaDoAnAction2 = (user, i) => {
  console.log(i + " => ", user);
  console.log("hello");
  console.log("world");
  console.log("!!!");
};

// B - onliners
const sum1 = (a, b) => a + b;

const sum2 = (a, b) => {
  return a + b;
};

const products = ["phone", "shoe", "boat"];

products.forEach((product) => console.log(product));

console.log("-----");

products.forEach(function (product) {
  console.log(product);
});
