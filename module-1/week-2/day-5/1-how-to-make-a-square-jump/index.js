// LIB IMPORT
import { player } from "./js/player.js";
import { world } from "./js/world.js";
import { obstacles } from "./js/obstacles.js";

// DOM ELEMENTS
const btnStart = document.getElementById("start");

// BASE VARS
let _FRAMEID;
let tick = 0;
let time = 0;

function draw() {
  player.draw();

  world.checkCollision((damage) => {
    console.log(damage);
    if (damage) {
      player.hurt(damage);
      world.setLife(player.life);
    }
  });

  if (tick % 60 === 0) {
    time++;
    world.setClock(time);
  }

  // if (tick % 320 === 0 && obstacles.get().length < 4)
  //   obstacles.push(new obstacles.Instance());

  if (player.life <= 0) {
    //if (false) {
    return gameOver();
  } else {
    tick++;
    player.draw();
    _FRAMEID = requestAnimationFrame(draw);
  }
}

// kickstart
// starts the animation frame
// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

function gameStart() {
  obstacles.push(new obstacles.Instance());
  world.setLife(player.life);
  world.start();
  world.listen();
  _FRAMEID = window.requestAnimationFrame(draw);
}

function gameOver() {
  obstacles.reset();
  player.reset();
  tick = 0;
  time = 0;
  window.cancelAnimationFrame(_FRAMEID);
  world.end();
}

btnStart.onclick = gameStart;
