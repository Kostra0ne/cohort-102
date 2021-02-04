// function expression
function foo() {
  return "bar";
}

// function declaration
// return a string composed of count times "foo"
const bar = function (count, message = "foo") {
  // maybe use a temporay variable here ...
  let result = "";
  for (let i = 0; i < count; i += 1) {
    // ... that we can fill here ...
    result += `${message} `;
  }
  // ... that we can return here
  return result.trim(); // trim will remove spaces at a given string's start and end
};

const x = bar(22);
const y = bar(10);
const z = bar(10,);
console.log(x);
// console.log(bar(100, "hey ho, let's go !!!"));


// below : just for fun :D
// const funcs = [bar, foo];
// const zz = funcs[0](1);
// console.log(zz);
