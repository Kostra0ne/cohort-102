function wakeUp() {
  return new Promise((resolve) => {
    resolve("Awnnn : I had a good night sleep !");
  });
}

function eatBreakfast() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Yay ! Coffee or Tea ?!!!");
    }, 2000);
  });
}

function eatLunch() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Yummy, Pizza");
    }, 2000);
  });
}

function eatDiner() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Yummy, Soup");
    }, 2000);
  });
}

function work(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${time} JOB DONE`);
    }, 2000);
  });
}

function relax() {
  console.log("What's to watch on Netlix ??? ;)");
}

// wakeUp().then((res) => {
//   console.log(res);
//   eatBreakfast().then((res) => {
//     console.log(res);
//     work("morning").then((res) => {
//       console.log(res);
//       eatLunch().then((res) => {
//         console.log(res);
//         work("afternoon").then((res) => {
//           console.log(res);
//           eatDiner().then((res) => {
//             console.log(res);
//             relax();
//           });
//         });
//       });
//     });
//   });
// });

(async function asynAwaitGang() {
  let res;
  res = await wakeUp();
  console.log(res);

  res = await eatBreakfast();
  console.log(res);

  res = await work("morning");
  console.log(res);

  res = await eatLunch();
  console.log(res);

  res = await work("afternoon");
  console.log(res);

  res = await eatDiner();
  console.log(res);

  relax();
})();

