function User() {
  this.name = "test user";
  this.age = 20;
  this.hobbies = ["skate", "music"];
  // return this; // by default
}

function Car(color, brand, price) {
  if (isNaN(price)) throw new Error("price prop must be of type Number");

  this.wheels = 4;
  this.color = color;
  this.brand = brand;
  this.price = price;
}

Car.prototype.start = function () {
  return "vrooom vroom";
};

Car.prototype.getCarInfos = function () {
  return `${this.brand} ${this.color} ${this.price}`;
};

// const undef = User();
// console.log(undef);
// const newUser = new User();
// console.log(newUser);

const bentley = new Car("red", "bentley", 100000);
const hondaPrius = new Car("black", "honda", 10000);
// const fakeCar = new Car(20, "green", "fake");

console.log(hondaPrius);
console.log(bentley);

console.log(bentley.start());
console.log(hondaPrius.start());
console.log("-------------------");
console.log(bentley.getCarInfos());
console.log(hondaPrius.getCarInfos());

// console.log(fakeCar);
