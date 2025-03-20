import { Fighter } from "./Figther.js";

export class Bison extends Fighter {
  constructor(x, y, vel) {
    super("Bison", x, y, vel);
    this.image = document.querySelector("#bison");
  }
}

// special attaks / movements
