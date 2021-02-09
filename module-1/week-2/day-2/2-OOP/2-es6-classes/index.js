class Alien {
  // code the class logic between those 2 brackets
  constructor(n, x = 0, y = 0) {
    // in a class, the constructor function MUST be called constructor
    this.name = n;
    this.position = {
      x: x,
      y: y,
    };
  }

  getName() {
    return `I'm an alien and my name is ${this.name} \n`;
  }

  teleport(x, y) {
    // console.log("this is moving", this);
    this.position.x = x;
    this.position.y = y;
  }

  moveVertical(direction) {
    if (direction === "up") this.position.y += 1;
    else if (direction === "down") this.position.y -= 1;
    else throw new Error("Invalid position argument");
  }
}

const alien1 = new Alien("zorg-x1");
const alien2 = new Alien("Hypno frog");
// console.log("step 1 >>>", alien1);
console.log(alien1.getName());

alien1.moveVertical("up");
alien1.moveVertical("up");
alien1.moveVertical("up");

console.log("step 2 >>>", alien1);
alien1.moveVertical("down");

console.log("step 3 >>>", alien1);

console.log(alien2.getName());


// alien1.teleport(20, 10);

// console.log(alien1);

// alien1.teleport(2000, 1000);

// console.log(alien1);

// const alien2 = new Alien("zoïdberg", 10, 20);
// console.log(alien2);

// console.log(alien2.getName());
// console.log(alien1.move());
// console.log(alien2.position.y);
