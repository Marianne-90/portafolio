import { Sprite } from "./Sprite";

export class Character extends Sprite {
  constructor({
    position,
    imageSrc,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 },
    sprites,
    atackBox = {
      offset: {},
      width: undefined,
      height: undefined,
    },
    animate,
  }) {
    super({
        position,
        imageSrc,
        scale,
        framesMax,
        offset 
    });

    // this.width = this.image.width;
    // this.height = this.image.height;

    this.image.onload = () => {
        this.width = this.image.width / this.framesMax;
        this.height = this.image.height;
      };



    this.lastKey;
    this.isAttacking;
    this.atackBox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      with: atackBox.width,
      height: atackBox.height,
      offset: atackBox.offset,
    };
    this.health = 100;

    this.frameCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 10;
    this.sprites = sprites;
    this.dead = false;
    this.animate = animate;

    //*! lo que hacemos aquí es asignar una nuevo objeto de imágen con su url al objeto strpite para que los cositos cambien de sprite

    for (const sprite in this.sprites) {
      sprites[sprite].image = new Image();
      sprites[sprite].image.src = sprites[sprite].imageSrc;
    }
  }
}
