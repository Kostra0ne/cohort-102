// 1- initialize vars needed in the full program

const numbers1 = [1, 2, 3, 4];
const numbers2 = [10, 20, 30, 40];

const buttonClick = document.getElementById("calc");
const span = document.querySelector("#sum-result .total");

// 2 - business logic

function calcSum(numbers) {
  const sum = numbers.reduce(function (acc, currentValue) {
    return acc + currentValue;
  }, 0);
  return sum;
}

const calcSum2 = (nbs) => nbs.reduce((a, v) => a + v);

// 3 - handlers

function handleClick(evt) {
  span.textContent = calcSum(numbers2);
}

// 4 - kickstart program with listeners

// buttonClick.addEventListener("click", handleClick);
buttonClick.addEventListener("click", handleClick);

// buttonClick.onclick = () => span.textContent = calcSum2(numbers2);
