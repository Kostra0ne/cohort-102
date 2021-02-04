console.log("---- starting here  ----");
console.log(a);



// var are hoisted :
var a, c;
var b = true;
// let and var declared variables can change over time ...
let user = {},
  dog = null,
  cat = { name: "Fugee" },
  score = 0,
  shoes;

console.log("---- 0 ----");
console.log(a);
console.log(user);
console.log(score);
score++;

console.log("---- 1 ----");
a = "hello hackers !";
console.log(a);
console.log(score);

console.log("---- 2 ----");
a = ":)";
score += 100;
console.log(a);
console.log(score);

var vic = {
  name: "victoria",
  cohort: "102",
};


const PI = Math.PI;
console.log(PI);

const player = {
    game: "chess"
};


// PI = "foo";
// console.log(yuka1);
// console.log(yuka2);

let yuka1 = "hey";
let yuka2 = "ho";
yuka2 += ", let's go";

console.log(yuka1);
console.log(yuka2);

player.score = 0;
player.name = "ready player one";
player.score += 10;

// player = {};

console.log(player);

console.log("end of the program !!!");

