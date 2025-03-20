import { Fighter } from "./Figther.js";

export class Ryu extends Fighter {
  constructor(x, y, vel) {
    super("Ryu", x, y, vel);
    this.image = document.querySelector("#ryu");
  }
}

// special attaks / movements
