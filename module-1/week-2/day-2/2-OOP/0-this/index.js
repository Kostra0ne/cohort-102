/*
  let's play with "this" and an object literal
*/

const user = {
  name: "gui",
  sayMyName: function () {
    console.log(this);
    return this.name;
  },
  // sayMyNameWrong: () => {
  //   console.log(this);
  //   return this.name;
  // },
};

// console.log(user.sayMyName());
user.sayMyName.bind({ name: "troll" })()
console.log(user);
// console.log();
// console.log(user.sayMyNameWrong());

console.log("this in a node module (nodemon server) > ", this);
// paste line below in a browser console
// console.log("this in a the browser (client) > ", this);
