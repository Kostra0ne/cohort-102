import { player } from "./player.js";
import { obstacles } from "./obstacles.js";

export const menuElement = document.getElementById("menu");
export const worldElement = document.getElementById("board");
export const clockElement = document.getElementById("clock");
export const lifebarElement = document.getElementById("life-bar");

// check mdn element.getBoundingClientRect
// (https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
export function checkCollision(damageCallback) {
  const playerRect = player.getRect();
  const shapes = obstacles.get();

  for (let i = 0; i < shapes.length; i += 1) {
    // console.log(i, shapes[i]);
    const shapeRect = shapes[i].element.getBoundingClientRect();
    const matchX = shapeRect.x >= playerRect.x && shapeRect.x <= playerRect.x1;
    const matchY = shapeRect.y >= playerRect.y && shapeRect.y <= playerRect.y1;
    
    // console.log(shapeRect.x, playerRect.x);
    console.log(matchX && matchY);

    if (matchX && matchY) {
      // console.log(shapes[i].damage);
      // damageCallback(shapes[i].damage);
    }
  }
}

export function start() {
  worldElement.style.visibility = "visible";
  menuElement.style.visibility = "hidden";
  clockElement.querySelector(".value").textContent = 99;
}

export function end() {
  const obstacles = worldElement.querySelectorAll(".obstacle");
  obstacles.forEach((obs) => obs.remove());
  worldElement.style.visibility = "hidden";
  menuElement.style.visibility = "visible";
  menuElement.querySelector(".title").classList.remove("is-hidden");
}

export function setClock(time) {
  clockElement.querySelector(".value").textContent = time;
}

export function setLife(point) {
  if (point !== 0) lifebarElement.classList.add("is-damaged");
  lifebarElement.querySelector(".value").textContent = point <= 0 ? 0 : point;
  setTimeout(() => {
    lifebarElement.classList.remove("is-damaged");
  }, 500);
}

// event handlers

function handleKeyUp(evt) {
  // console.log(evt.code);
  if (evt.code === "Space") player.jump();
}

function handleKeyPress(evt) {
  // console.log(evt.code);
  if (evt.code === "Space") player.jump();
  if (evt.code === "KeyA") player.move("left");
  if (evt.code === "KeyD") player.move("right");
}

// event listeners
export function listen() {
  window.addEventListener("keydown", handleKeyPress);
  window.addEventListener("keyup", handleKeyUp);
}

export * as world from "./world.js";
