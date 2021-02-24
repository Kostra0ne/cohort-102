


function aFunctionReturningAPromise(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return value < .5 ? reject("oh no !") : resolve("oh yes !");
    }, 100);
  });
}

function asyncFunctionUsingAPromise1(number) {
  aFunctionReturningAPromise(number)
    .then((yes) => {
      console.log(yes);
    })
    .catch((nope) => {
      console.log(nope);
    });
}

async function asyncFunctionUsingAPromise2(number) {
  try {
    const res = await aFunctionReturningAPromise(number);
    console.log(res);
  } catch(err) {
    console.log(err)
  }
}


asyncFunctionUsingAPromise1(Math.random())
asyncFunctionUsingAPromise2(Math.random())