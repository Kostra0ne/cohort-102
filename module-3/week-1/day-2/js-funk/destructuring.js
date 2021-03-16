// Destructuring an object

const cat = { name: "Lola", age: 8, passion: "peeing on the floor" };

// const name = cat.name
// const age = cat.age
// const passion = cat.passion

// const { streetName, age, name, passion } = cat; // The order you destructure the keys of an object doesnt matter

// console.log(name, age, passion, streetName);

// function myFunction(object) {
//   console.log(
//     `My cats name is ${object.name} she is ${object.age} she likes: ${object.passion}`
//   );
// }

function myFunction({ name, age, passion, streetName }) {
  console.log(
    `My cats name is ${name} she is ${age} she likes: ${passion} she lives at ${streetName}`
  );
}

// myFunction(cat);

// Destructuring with the ...rest operator

const person = {
  name: "Toto",
  password: "1234",
  surname: "Foo",
  streetName: "Overtthere 18th",
  favoriteColor: "red",
};

// const { password, ...rest } = person; // the ...rest operator is required to be at the end.
// The rest operator doesnt need to be named rest, whats important are the 3 ...

const { password, ...user } = person;
// console.log(user);

// Destructuring arrays

const myArray = ["Shoe", "Manteau", "Food", "Toes"];

// const [something, anotherThing, toto, bar, fjeoaijfeao] = myArray;

const [something, ...rest] = myArray;

console.log(rest);
