// function multiply(nb1, nb2) {
//   if (isNaN(nb1) && isNaN(nb2))
//     throw new Error("sorry but i need 2 valid numbers here");
//   return nb1 * nb2;
// }

// const res = multiply(1, "toto");
// console.log(res);

// LOGICAL OR TABLE
// true  || true  => true
// true  || false => true
// false || false => false
// false || true  =>  true

// LOGICAL AND TABLE
// true  && true  => true
// true  && false => false
// false && false => false
// false && true  =>  false

function a(callback) {
  console.log(typeof callback);
  return "i'am a " + callback();
}

function b() {
  return "i'am b";
}

function c() {
  return "i'am c";
}

function d() {
  return "i'am d";
}

let result3 = a(b);

// let result4 = a(function b() {
//   return "i'am b";
// });

console.log(result3);

// console.log(res3); // ???

// let res2 = b(c);

// console.log(res1); // i'am a
// console.log(res2); // i'am b
