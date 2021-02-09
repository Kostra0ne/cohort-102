class Human {
  constructor(name, age) {
    // consructor is a mold, factory for returned object
    this.name = name;
    this.age = age;
  }

  greetings() {
    return "Hello, im am " + this.name;
  }
}

class Hero extends Human {
  constructor(name, age, power) {
    super(name, age);
    this.power = power;
  }

  greetings() {
    return super.greetings() + " ! and i'm here to save you";
  }
}

const gui = new Human("gui", 40);
const batman = new Hero("batman", 55, "technologic gadgets");

console.log(gui.greetings());
console.log(batman.greetings());
