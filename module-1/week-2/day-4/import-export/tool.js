
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

// https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

// you can export as many values as needed
export const sum = (a, b) => {
  return a + b;
};

export const mult = (a, b) => {
  return a * b;
}

// function dependecy1() {

// }

// export const funcWithDependecies = () => {
//   dependecy1();
// }

// the can only be ONE default export in a file
export default function foo(params) {
  console.log("iam foo !");
}
