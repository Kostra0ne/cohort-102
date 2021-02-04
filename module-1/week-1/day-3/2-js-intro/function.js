function getFoo() {
  return typeof "bar".length;
}

function firstFunction() {
  return typeof true;
}

function madnessIsComing1() {}

function madnessIsComing2() {
  return;
}

function madnessIsComing3() {
  return undefined;
}

let user = {
  name: "Claire",
};

// console.log("hello claire !!!")
console.log("------- 1 ------");
console.log(getFoo());
console.log("------- 2 ------");
let x = getFoo();
console.log(x);
console.log("------- 3 ------");
let whatIsThat = madnessIsComing1();
console.log(whatIsThat);

function gimmeTheType(value) {
  return typeof value;
}

function makeASentence(type) {
  return "the value is of type " + type;
}

let step1 = gimmeTheType(function(){});
let step2 = makeASentence(step1);

console.log("------- 4 ------");
console.log(step2);

