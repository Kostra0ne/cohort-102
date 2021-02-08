// body.innerText = "<p>foo</p>";
// body.textContent = "<p>foo</p>";

function createAParag(txt) {
  try {
    document.querySelector("body").innerHTML += `<p class="parag">${txt}</p>`;
  } catch (err) {
    console.error(err);
  }
}

createAParag("hello world !");
createAParag("DOM is awesome !");
createAParag("Wax it on and off during the next 2 weeks !");

// select all the element with the parag class
const allParags = document.querySelectorAll(".parag");

console.log(allParags);

for (let i = 0; i < allParags.length; i++) {
  console.log(allParags[i]);
}

console.log("-----");

for (let element of allParags) {
  console.log(element);
}

console.log("-----");

allParags.forEach((parag) => console.log(parag));

// LETS TAKE IT BACK TO THE OL'SKOOL

/*
window.addEventListener("DOMContentLoaded", function () {
    // when the full document has been loaded, the provided callback is executed automatically
  console.log(document.querySelector("body")); // should be null for now
});
*/

/*
// there is only one load 
window.addEventListener("load", function (params) {
    // when the full document has been loaded, the provided callback is executed automatically
  console.log(document.querySelector("body")); // should be null for now
});
*/
