const user1 = {
  name: "anna",
  score: 0,
  email: "foo@foo.foo",
};
const user2 = {
  name: "karim",
  score: 10,
};
const user3 = {
  name: "william",
  score: 100,
  hobbies: ["cycling", "js", "sleep"],
};

/*
console.log(user1, user2, user3);
// accessors => to access prop/value of an object
console.log(user1.name); // direct iundexing
console.log(user1["name"]); // indirect indexing
console.log(user1["name"] === user1.name);

console.log(user3.score);
console.log(user2["name"]);
*/

// the for in loop is ONLY there to loop through object properties/values pairs
// for each key in the object user1

/*
for (let prop in user3) {
  console.log("the key is >", prop);
  // console.log(""the key is >", typeof key);
  console.log("the value is >", user3[prop]);
  if (Array.isArray(user3[prop])) {
    for (let i = 0; i < user3[prop].length; i++) {
      console.log(">> ", user3[prop][i]);
    }
  }
  console.log("--------");
}

*/

const users = [{ name: "gui", score: 0 }, user1, user2, user3];
const userNames = []; // brand new empty array

console.log("--------------\n");

console.log("the full array > ");
console.log(users);

console.log("--------------\n");

for (let i = 0; i < users.length; i++) {
  console.log("each user in the array > ", users[i]);
  userNames.push(users[i].name);
}

console.log("--------------\n");

console.log("only the user names");
console.log(userNames);