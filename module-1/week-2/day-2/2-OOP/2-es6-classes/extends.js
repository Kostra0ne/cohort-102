class User {
  constructor(name, w, pet) {
    this.name = name;
    this.pet = pet;
    this.weight = w;
  }

  // methods are inherited by child classes by default
  setName(newName) {
    if (typeof newName !== "string") throw new Error("string required");
    this.name = newName;
  }

  getName() {
    return "hello, i'am " + this.name;
  }
}

class Admin extends User {
  constructor(name, weight, pet, al) {
    super(name, weight, pet);
    // with super() , we pass the desired the to the parent constructor
    this.accessLevel = al;
  }

  deleteUser(list, index) {
    list.splice(index, 1);
    return list;
  }

  getName() {
    return super.getName() + " and i'am an admin";
  }
}

const user1 = new User("gui");
const user2 = new User("andy");
const user3 = new User("nina");
console.log(user1, user2, user3);
console.log("-----------------------");
console.log("-----------------------");
// user1.setName("guillaume");

console.log("-----------------------");
console.log("-----------------------");
const admin1 = new Admin("the admin", "85kg", { name: "fugee" }, 200);
console.log(admin1);

admin1.setName("Yuka");

console.log(admin1.getName());

// console.log(admin1);
// user1.setName(123)

// const users = [user1, user2, user3, admin1];

// users.forEach((u, i, arr) => {
//   if (u.ableToViewAllAccounts) {
//     console.log("this user is an admin, hence can access whatever");
//     u.deleteUser(arr, 1);
//   }
// });

// console.log(users);
