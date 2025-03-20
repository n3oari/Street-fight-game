export class Stage {
  constructor() {
    this.image = document.querySelector("#bg_dhalism");
  }

  draw(context) {
    context.drawImage(
      this.image,
      0,
      0,
      context.canvas.width,
      context.canvas.height
    );
  }
}
