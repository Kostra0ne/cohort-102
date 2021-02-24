console.log("--- step 1 ----");

// const aNeverendingPromise = new Promise((resolve, reject) => {});
// console.log(aNeverendingPromise);

function aFunctionReturningAPromise(value) {
  return new Promise((resolve, reject) => {
    if (value >= 50) {
      resolve("oh yes !");
    } else {
      reject("oh no !");
    }
  });
}

function doSomethingAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("back to the future ; )");
    }, 3000);
  });
}

aFunctionReturningAPromise(100)
  .then((success) => {
    console.log("the resolve func exposes > ", success);
  })
  .catch((error) => {
    console.error("the promise just failed > ", error);
  });

doSomethingAsync().then((proceed) => {
  console.log("the async action is done ...");
  console.log(proceed);
});

// console.log("--- step 1 ----");
