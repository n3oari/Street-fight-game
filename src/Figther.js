export class Fighter {
  constructor(name, x, y, vel, health = 100) {
    this.name = name;
    this.image = new Image();
    this.position = { x, y };
    this.vel = vel;
  }

  //method to update the position of the fighter
  update(context) {
    this.position.x += this.vel;
    if (
      this.position.x > context.canvas.width - this.image.width ||
      this.position.x < 0
    ) {
      this.vel = -this.vel;
    }
  }

  // method to draw the image of the fighter
  draw(context) {
    context.drawImage(this.image, this.position.x, this.position.y);
  }
}

// method with generic attaks (punch,kick,movement,block.....)
