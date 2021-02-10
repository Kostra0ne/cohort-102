// - I.I.F.E (immediatly invoked function expression)
// - do...while
// - JSON.stringify/parse
// - deep copy

(function (val) {
  // singleton function call
  console.log(val);
  console.log("i am x and i'am auto-executed");
})("foo");

let count = 0;

while (false) {
  count++;
  console.log("count > ", count);
}

count = 0;

do {
    console.log("in do.. while");

} while (false);

/*

// caution : this code only runs in browser environment

let username = "";

do {
    username = prompt("gimme your name please")

} while (username === "")

console.log("we just exited the do...while loop")

*/