console.log("hello");

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

function yukaDoAnAction(user, i) {
  console.log(i + " => ", user);
}

users.forEach(yukaDoAnAction);
