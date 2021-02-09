function Foo() {}

function Bar() {}

/*
const x = Foo();
console.log("step 1 >");
console.log(x);

const y = new Foo(); // i'm execting the constructor form of the function
// by default, it will create a new instance of the foo function
const z = new Bar();

console.log("step 2 >");
console.log(y);

console.log("step 3 >");
console.log(y instanceof Foo); // what is the modl we used to build this y object ? > Foo
console.log(typeof y);
// an instance of a function/class is an object that has been built (constructed, make) with a constructor function 

console.log("step 3 >");
console.log(z instanceof Bar);
console.log(typeof z);
*/

function Alien(name, originPlanet) {
  this.name = name;
  this.originPlanet = originPlanet;
}

function IronHacker(
  name = "unknown hacker",
  age = null,
  email = null,
  pet = null
) {
  if (!(this instanceof IronHacker)) {
    throw new Error("DUHHHH... you just forgot the new keyword");
  }
  this.name = name; // feed the name property with the n value
  this.age = age; // the technical name of feeding in OOP is hydrating
  this.email = email; // again the returned object will have all those properties set
  this.pet = pet;
  //   this.alien = new Alien("Toto", "Coding");
}

// should return the hacker's name + age + email
IronHacker.prototype.getFullInfos = function () {
  //   console.log("@getFullInfos", this);
  return `
    this hacker is named ${this.name} and is ${this.age} years old.\n You can reach him/her there : ${this.email};
  `;
};

IronHacker.prototype.stateYourFavoriteLangage = function () {
  return "JS of course .... :)";
};

const hacker1 = new IronHacker("simo", 26, "foo@simo.com");
const hacker2 = new IronHacker("gigi", 24, "gigi@yoga.zen");
const hacker3 = new IronHacker("frank", 29, "frank@the-tank.org");

// console.log(typeof hacker1);
// console.log(typeof hacker1.name);
// console.log(hacker1);
// console.log(hacker2);
// console.log(hacker2 === hacker1);

// console.log(hacker3);
// console.log(hacker4.pet.name);
console.log(hacker1.getFullInfos());
console.log(hacker2.getFullInfos());
console.log(hacker3.stateYourFavoriteLangage());

function Player(n) {
  this.name = n;
  this.lifePoints = 10;
}

function Ennemy(n) {
  this.name = n;
  this.lifePoints = 5;
}


const player1 = new Player("Yuka");
const player2 = new Player("Gui");
const enemyOne = new Ennemy("Skull");


console.log(player1);

player1.lifePoints += 1;

console.log(player2);
console.log(player1);

console.log("same object ? false ");
console.log(player1 === player2);
console.log("instance of the same construct ? true");
console.log(player1 instanceof Player === player2 instanceof Player);