// function Car(color, brand, price) {
//   if (isNaN(price)) throw new Error("price prop must be of type Number");

//   this.wheels = 4;
//   this.color = color;
//   this.brand = brand;
//   this.price = price;
// }

// Car.prototype.start = function () {
//   return "vrooom vroom";
// };

// Car.prototype.getCarInfos = function () {
//   return `${this.brand} ${this.color} ${this.price}`;
// };

class Car {
  constructor(infos) {
    this.wheels = 4;
    this.color = infos.color;
    this.brand = infos.brand;
    this.price = infos.price;
  }

  start() {
    return "vrooom vroom";
  }

  getCarInfos() {
    return `${this.brand} ${this.color} ${this.price}`;
  }
}

class BigCar extends Car {
  constructor(infos) {
    super(infos);
  }

  start() {
    return "VROOOM VROOOM";
  }
}

const peugeot205 = new Car({
  price: 10000,
  color: "red",
  brand: "peugeot",
});

// console.log("------------");
// console.log(peugeot205);
// console.log(peugeot205.start());
// console.log(peugeot205.getCarInfos());

console.log("------------");

const audi = new BigCar({
  price: 20000,
  color: "blue",
  brand: "audi",
});

console.log(audi.start());
console.log(audi.getCarInfos());
