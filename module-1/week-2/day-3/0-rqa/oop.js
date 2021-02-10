class Soldier {
  constructor(name) {
    this.name = name;
  }
}

class Saxon extends Soldier {
  constructor(name) {
    super(name);
  }

  greetEnemy(enemy) {
    console.log(`hello, ${enemy.name} my dear Viking enemy`);
  }
}

class Viking extends Soldier {
  constructor(name) {
    super(name);
  }

  greetEnemy(enemy) {
    console.log(`hello , ${enemy.name}  my dear Saxon enemy`);
  }
}

class War {
  constructor() {
    this.saxonArmy = [];
    this.vikingArmy = [];
  }

  addViking(enemy) {
    this.vikingArmy.push(enemy);
    console.log(this);
  }

  addSaxon(enemy) {
    this.vikingArmy.push(enemy);
    console.log(this);
  }

  isHaraldThere() {
    return this.vikingArmy.filter(viking => viking.name === "Harlad").length > 0
  }
}

const viking1 = new Viking("Harlad");
const viking2 = new Viking("odin");
const saxon1 = new Saxon("brian");
const saxon2 = new Saxon("jimmy");

viking2.greetEnemy(saxon1);

const war = new War();

war.addSaxon(saxon1);
war.addViking(viking1);


console.log(war.isHaraldThere());


