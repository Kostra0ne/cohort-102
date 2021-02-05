const player = {
  score: 10,
  name: "gui",
};

const worlds = ["inferno", "earth", "heaven"];


// const playerCopy = player;
// playerCopy.score = 1000;

const playerRealCopy = {...player};
playerRealCopy.score = 10000;

console.log("original player");
console.log(player);
console.log("real copy of the original player");
console.log(playerRealCopy);
// console.log(playerCopy);
// const worldsCopy = worlds;



const realWorldCopy = [...worlds]; // spread it !!!

realWorldCopy.push("void");

console.log("original worlds array");
console.log(worlds);
console.log("copy of the original worlds array");
console.log(realWorldCopy);