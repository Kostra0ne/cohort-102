const _MAXLIFE = 99;

export const player = {
  element: document.getElementById("player"),
  life: _MAXLIFE,
  position: {
    x: 0,
    y: 0,
  },
  isJumping: false,
  getRect() {
    const { x, y, width, height } = this.element.getBoundingClientRect();
    return {
      x: x,
      x1: x + width,
      y: x,
      y1: y + height,
    };
  },
  hurt(damage) {
    this.life -= this.life > 0 ? damage : 0;
    this.element.classList.add("hurt");
    setTimeout(() => {
      this.element.classList.remove("hurt");
    }, 300);
  },
  reset() {
    this.element = document.getElementById("player");
    this.life = _MAXLIFE;
    this.position = {
      x: 0,
      y: 0,
    };
  },
  draw() {
    this.element.style.transform = `translate(${this.position.x}px, ${this.position.y}px)`;
  },
  move: function (direction) {
    // console.log(direction, this.position.x);
    if (direction === "left") {
      if (this.element.classList.contains("right"))
      this.element.classList.replace("right", direction);
      this.element.classList.add("left", direction);
    } else {
      if (this.element.classList.contains("left"))
      this.element.classList.replace("left", direction);
      this.element.classList.add("right", direction);
    }
    if (direction === "right" && this.position.x <= 350) this.position.x += 10;
    if (direction === "left" && this.position.x > 0) this.position.x += -10;
  },
  jump: function () {
    // console.log("jumping");
    if (this.isJumping === true) return;

    this.isJumping = true;
    this.position.y -= 110;
    this.element.classList.add("jump");
    setTimeout(() => {
      this.position.y += 110;
      this.isJumping = false;
      this.element.classList.remove("jump");
    }, 400);
  },
};
