console.log("hello app");

const btn = document.getElementById("trigger-css-animation");
const box = document.getElementById("my-box");
console.log(box, btn);

// declare a function to handle the click events
function handleClick() {
  box.classList.toggle("is-active");
}

// listen to clicks on the button
btn.addEventListener("click", handleClick);
