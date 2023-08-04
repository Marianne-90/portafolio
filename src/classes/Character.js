import { Sprite } from "./Sprite";

export class Character extends Sprite {
  constructor({
    velocity,
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
      velocity,
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

  switchSpride(sprite) {
    // //over writing all other animations with atack animation
    // if (
    //   this.image === this.sprites.attack1.image &&
    //   this.frameCurrent < this.sprites.attack1.framesMax - 1
    // )
    //   return;

    // //over writing all other animations with hit animation
    // if (
    //   this.image === this.sprites.takeHit.image &&
    //   this.frameCurrent < this.sprites.takeHit.framesMax - 1
    // )
    //   return;

    // //over writing all other animations with dead animation
    // if (this.image === this.sprites.dead.image && this.health <= 0) {

    //   if (this.frameCurrent === this.sprites.dead.framesMax -1  ) {
    //       this.dead = true;
    //   }
    //   return;
    // }

    // //*! esto lo cambié porque en el tutorial lo ponían como switch case y era muy largo sin sentido

    if (this.image !== this.sprites[sprite].image) {
      this.framesMax = this.sprites[sprite].framesMax;
      this.image = this.sprites[sprite].image;
      this.framesHold = this.sprites[sprite].framesHold;
      this.frameCurrent = 0;
    }
  }
}
