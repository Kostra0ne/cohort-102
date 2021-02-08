const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btns = document.querySelectorAll(".btn"); // document.getElementsByClassName("btn")

// console.log(btn1, btn2, btn3);
// console.log(btns);

// to react to events : there are 2 steps
// 1 : event listening (event-listener)
// 2 : event handling (event-handler)

function handleClick(event) {
  //   event is an implicit argument
  //   console.log("clicked 1");
  //   console.log(btn1.classList);
  //   console.log("???? What is THIS now ???");
  //   console.log(this);
  console.log(event.target);
  //   console.log(this === event.target);
  //   event.target.className += " has-been-clicked";

  //   if (event.target.classList.contains("has-been-clicked")) {
  //     event.target.classList.remove("has-been-clicked");
  //   } else {
  //     event.target.classList.add("has-been-clicked");
  //   }

  // same as below
  event.target.classList.toggle("has-been-clicked");
}

function foo() {
  console.log("FOOOOO");
}

// 1st argument is a string stating the event you wanna listen to (in this case the click event)
// 2nd argument MUST be a function that will be executed ONLY when the event occurs
// the full event list can be found here : https://developer.mozilla.org/en-US/docs/Web/Events

btn1.addEventListener("click", handleClick);

btn2.addEventListener("click", function (evt) {
  console.log("clicked 2");
});

btn3.onclick = handleClick; //  a short for line 39 !
