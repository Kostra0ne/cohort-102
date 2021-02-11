const cat = {
  name: "Kitty",
  age: 8,
  child: {
    name: "Mina",
    age: 2,
  },
};

const cloneShallow = { ...cat };
const cloneDeep = JSON.parse(JSON.stringify(cat));

// with the shallow copy, the nested object (child) would be modified
cloneShallow.child.age += 1;
// with a deep copy, the original child object is NOT modified
cloneDeep.child.name = "MINA";

console.log(cat.child.age);
console.log(cat.child.name);
