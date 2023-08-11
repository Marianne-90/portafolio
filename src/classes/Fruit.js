import { Sprite } from "./Sprite";


export class Fruit extends Sprite {
  constructor({
    impulse,
    position,
    imageSrc,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 },
    foodName,
    rotten,
  }) {
    super({
      impulse,
      position,
      imageSrc,
      scale,
      framesMax,
      offset,
    });

    this.image = new Image();
    this.image.src = imageSrc;

    this.image.onload = () => {
      this.width = this.image.width / this.framesMax;
      this.height = this.image.height;
    };

    this.frameCurrent = 0;
    this.framesElapsed = 0;

    this.framesHold = 10;
    this.dead = false;

    this.base = 30;

    this.gravity = 0.1;
    this.jumpStrength = 0; //

    this.foodName = foodName
    this.rotten = rotten
    this.isEaten = false;
    this.collition = false;
  }


  detectColliton(bunnyPosition){

  }


  update(c, canvasHeight) {
    this.position.y =
      canvasHeight - this.image.height * this.scale - this.base + this.impulse;

    if (
      this.position.y + this.image.height * this.scale + this.impulse >=
      canvasHeight - this.base
    ) {
      this.impulse = 0; // El impulso llega a cero cuando el jugador toca el suelo
    } else {
      this.jumpStrength += this.gravity;
      this.impulse = this.impulse + this.jumpStrength;
    }

    this.draw(c);
    this.animateFrames();
  }
}
