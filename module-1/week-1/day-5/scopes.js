// var conditionOk;

// function scope
function add(a, b) {
  return a + b;
}

let foo = "bar";
// console.log(" foo before the function ", foo);

function addBetter(a, b) {
  let res = a + b;
  let foo = "baz"; // here is shadowing
  //   console.log(" foo inside the function ", foo);

  if (isNaN(res)) {
    let msg = "a and b must be of type number";
    console.log(msg);
    throw new Error(msg);
  }

  return res;
}

addBetter(1, 3);

// console.log(" foo after the function ", foo);

// block
if (1 < 10) {
  let conditionOk = true; // variabbles declared with var keyword are hoisted
  //   console.log(" 2 > ", conditionOk);
}

// console.log(" 3 > ", conditionOk);

// later global scope + module scope

// var index = 100;
// console.log(index);

// for (let index = 0; index < [1, 2, 3].length; index++) {
//     // console.log(index);

// }

// console.log(index);
