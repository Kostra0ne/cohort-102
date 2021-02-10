// WORKING WITH TIMING via Asynchronicity

console.log("step 1 > ");

const delay = 3000;

const action1 = () => {
  console.log("action 1");
};

function action2(params) {
  console.log("action 2");
}

// hey JS, you will execute the provided callback (my function) after a 3 seconds delay
const timeoutId = setTimeout(action1, delay); // 3K ms => 3s

// clearTimeout(timeoutId);

setTimeout(() => {
  action2();
}, 1000);

console.log("step 2 > ");

// hey JS, you will execute the provided callback at a given interval
let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log("hello " + counter); // every second, we'll get a hello in the console
  if (counter === 10) clearInterval(intervalId)
}, 3000);


class Yuka {
    constructor() {

        console.log("this 1 ", this);
        setTimeout(function() {
                console.log("this 2 ", this);
        }, 1000);

    }
}

new Yuka()


