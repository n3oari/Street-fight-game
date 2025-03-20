import { Ryu } from "./src/Ryu.js";
import { Bison } from "./src/Bison.js";
import { Stage } from "./src/Stage.js";

const ryu = new Ryu(0, 0, 3);
const bison = new Bison(1650, 0, 2);
const stage_dhalism = new Stage();

const GameViewport = {
  // Usamos las dimensiones originales del juego
  WIDTH: 384 / 3,
  HEIGHT: 224 / 3,
  SCALE: 4,
};

window.onload = function () {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

  ryu.position.y = canvas.height + ryu.image.height;
  bison.position.y = canvas.height + 130;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  canvas.style.width = "100%";
  canvas.style.height = "100%";

  function frame() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    stage_dhalism.draw(context);
    ryu.update(context);
    ryu.draw(context);
    bison.update(context);
    bison.draw(context);

    context.strokeStyle = "red";
    context.moveTo(0, 0);
    context.lineTo(canvas.width, canvas.height);
    context.stroke();

    context.moveTo(canvas.width, 0);
    context.lineTo(0, canvas.height);
    context.stroke();

    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);
    context.stroke();

    window.requestAnimationFrame(frame);
  }

  window.requestAnimationFrame(frame);
  console.log(context);
};
