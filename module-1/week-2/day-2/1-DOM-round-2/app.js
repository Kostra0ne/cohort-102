const widget = document.getElementById("widget-1");
const button = document.getElementById("action-1");
const input = document.getElementById("user-input");
const result = document.getElementById("result");

function handleClick() {
    console.log("current input's value >>>");
    console.log(input.id);
    console.log(input.value);
    result.textContent = result.textContent + " " + input.value;
}

// happy break :)

button.addEventListener("click", handleClick);
