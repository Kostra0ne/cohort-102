class Ironhacker {
  constructor(name = "unknow hacker", email = "unknown email") {
    this.name = name;
    this.email = email;
  }
}

const ironhackersWrapper = document.getElementById("ironhackers");

const hackers = [
  new Ironhacker("Bouba", "foo@bar.com"), // 0
  new Ironhacker("Naomi", "naomi@jslovers.org"), // 1
  new Ironhacker("Antoine", "antoine@jslovers.org"), // 2
  new Ironhacker("Mackenzie", "antoine@jslovers.org"), // 3
];

// create a function that loops through the provided argument

function loopThroughArray(list) {
  for (let i = 0; i < list.length; i++) {
    createHackerCard(list[i], i);
  }
}

function toggleIsActiveClass(evt) {
  // console.log("clicked", evt.target);
  evt.target.classList.toggle("is-active");
}

// create a function that takes an object as an argument
// this function displays the object's values in a brand new div with the css class hacker

function createHackerCard(hacker, index) {
  const div = document.createElement("div");
  div.id = "hacker_" + (index + 1);
  div.className = "user";

  div.innerHTML = `
    <h2 class="title name">${hacker.name}</h2>
    <p class="email">${hacker.email}</p>
`;
  div.onclick = toggleIsActiveClass;

  ironhackersWrapper.appendChild(div);
}

loopThroughArray(hackers);

/*
function createHackerCard1(hacker) {
    const template = `
      <div class="user">
          <h2 class="title name">${hacker.name}</h2>
          <p class="email">${hacker.email}</p>
      </div>
      `;
    ironhackersWrapper.innerHTML += template;
  }
*/
