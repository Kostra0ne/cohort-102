const x = true && true && "Hello my bruddahs"; // When all the values are truthy, the value on the most right will get assigned
const y = false && false && "Hello my bruddahs"; // When one of the values is falsy, the falsy value will be assigned
// console.log(x);
// console.log(y);

// For the || guard operator

const x2 = true || true || true || "Hello my bruddays"; // The first truthy value is printed
const y2 = false || "Hello my bruddays"; // The first truthy value is printed

// console.log(x2);
console.log(y2);
