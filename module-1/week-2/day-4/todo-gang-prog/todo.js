// select all the relevant tags
const input = document.querySelector("#todo-list-wrapper .input");
const btn = document.querySelector("#todo-list-wrapper .btn");
const list = document.querySelector("#todo-list-wrapper .list");

console.log(input, btn, list);

function removeTodo(evt) {
  console.log(evt.target);
  // remove the li containing this btn
}

function listentoClicks() {
  // every btn in every li in the ol
  const btns = list.querySelectorAll(".btn");
  btns.forEach((btn) => (btn.onclick = removeTodo));
  console.log(btns);
}

function handleClick(event) {
    // when you're in a event-handler function, it will receive an implicit parameter
  // it's an object representing the event that just occured...
  //   console.log(typeof event, event);
  // 1 - target the input and extract the value
  const newTodoText = input.value;
  if (newTodoText === "") return alert("empty todo : cannot compute -_-*");
  // 2 - create a new li (list item) whose content is the value
  // 3 - append it to the list (ol)
  list.innerHTML += `<li class="item">
    <span>${newTodoText}</span>
    <button class="btn">x</button>
    </li>`;
  input.value = "foo";
  input.focus();
  listentoClicks();
}

// listen to click events on the button
btn.onclick = handleClick;
// btn.addEventListener("click", handleClick);
