function myFunction() {
  let mySexyState = {
    counter: 0,
  };

  function getValue(value) {
    // console.log(value, "the value inside the child");

    mySexyState.counter += value;
    console.log(mySexyState);
  }

  //   myLoop(function (value) {
  //     // console.log("Hey i am called from the child and logged in the parent !");
  //     console.log(value, "the value inside the child");
  //   });

  let val = myLoop(getValue);
  //   console.log(val);
}

function myLoop(cb) {
  let x = 0;
  setInterval(() => {
    x++;
    cb(x);
    return;
  }, 1000);
  return;
}

myFunction();
