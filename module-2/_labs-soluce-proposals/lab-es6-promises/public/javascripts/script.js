//-------------------------------
// Iteration 1 using callbacks
//-------------------------------

// addFood(steak[0], "#steak", () => {
//   addFood(steak[1], "#steak", () => {
//     addFood(steak[2], "#steak", () => {
//       addFood(steak[3], "#steak", () => {
//         addFood(steak[4], "#steak", () => {
//           addFood(steak[5], "#steak", () => {
//             addFood(steak[6], "#steak", () => {
//               addFood(steak[7], "#steak", () => {
//                 document.querySelector('#table').innerHTML += `<img src="public/images/steak.jpg"/>`
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

// SAME AS ABOVE, JUST FOR FUN :D

// (function displayNextStep(step) {
//   if (step === steak.length - 1)
//   return (document.querySelector("#table").innerHTML += `<img src="public/images/steak.jpg"/>`);
//   addFood(steak[step], "#steak", () => displayNextStep(++step));
// }(0));

//-------------------------------
// Iteration 2 using `.then()`
//-------------------------------

// const p1 = () =>
//   addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
//     addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
//       addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
//         addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
//           addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
//             document.querySelector(
//               "#table"
//             ).innerHTML += `<img src="public/images/mashPotatoes.jpg"/>`;
//             const p = new Promise((resolve, rej) => {
//               resolve();
//             });
//           });
//         });
//       });
//     });
//   });

//-------------------------------
// Iteration 3 using async and await
//-------------------------------

/*
   WARNING ! forEach won't work for async/await
// https://zellwk.com/blog/async-await-in-loops/
*/

// brusselSprouts.forEach(async (eachStep) => {
//   await addFood(eachStep, "#brusselSprouts");
// });

/*
   SOLUCE ! use for or for...of
*/

// (async function iteration3() {
//   for (let i = 0; i < brusselSprouts.length; i++) {
//     await addFood(brusselSprouts[i], "#brusselSprouts");
//   }
//   document.querySelector('#table').innerHTML += `<img src="public/images/brusselSprouts.jpg"/>`
// })();

//-------------------------------
// BONUS
//-------------------------------

const btnHTML = `<button onclick="new Audio('public/media/dinnerIsServed.mp3').play()">Dinner is served.</button>`;

const printImage = (selector) => {
  const id = selector.replace("#", "");
  return `<img src="public/images/${id}.jpg" />`;
}

async function makeFood(steps, id) {
  for (const step of steps) await addFood(step, id);
  document.querySelector("#table").innerHTML += printImage(id);
}

Promise.all([
  makeFood(steak, "#steak"),
  makeFood(brusselSprouts, "#brusselSprouts"),
  makeFood(mashPotatoes, "#mashPotatoes"),
])
  .then((res) => {
    console.log(res);
    document.body.innerHTML += btnHTML;
  })
  .catch((err) => console.error(err));
