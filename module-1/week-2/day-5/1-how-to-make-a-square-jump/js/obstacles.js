class Obstacle {
  constructor(d = 2) {
    this.damage = d;
    this.element = this.create();
  }

  create() {
    const el = document.createElement("div");
    el.className = "obstacle default";
    document.getElementById("board").appendChild(el);
    return el;
  }
}

const list = [];

export const obstacles = {
  Instance: Obstacle,
  push: function (obstacle) {
    list.push(obstacle);
    return list;
  },
  get: function () {
    return list;
  },
  reset: function () {
    list.splice(0, list.length);
  },
};
