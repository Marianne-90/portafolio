import { Sprite } from "./Sprite";

export class Character extends Sprite {
  constructor({
    impulse,
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
      impulse,
      position,
      imageSrc,
      scale,
      framesMax,
      offset,
      animate,
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
    this.spritesElapsed = 0; //*! esto es para llevar conteo en el cambio de animaciones de cuantas llevo
    this.framesHold = 10;
    this.sprites = sprites;
    this.dead = false;

    this.base = 30;

    this.gravity = 0.1;
    this.impulse = 0; // Valor inicial del impulso
    this.jumpStrength = -20; //

    //*! lo que hacemos aquí es asignar una nuevo objeto de imágen con su url al objeto strpite para que los cositos cambien de sprite

    for (const sprite in this.sprites) {
      sprites[sprite].image = new Image();
      sprites[sprite].image.src = sprites[sprite].imageSrc;
    }
  }

  switchSpride(sprite) {

    if (this.image === this.sprites.jump.image && this.jumpStrength <= 0) {
      if (this.framesElapsed % this.framesHold === 0) {
        this.spritesElapsed++;
      }

      if (this.frameCurrent === this.sprites.jump.framesMax - 1) {
        this.animate = false;
        this.spritesElapsed = 0
      }
      return;
    } else if(this.impulse!==0){

      this.animate = false;

      this.framesMax = this.sprites["fall"].framesMax;
      this.image = this.sprites["fall"].image;
      this.framesHold = this.sprites["fall"].framesHold;
      this.frameCurrent = 0

      return;
    } else if(this.impulse === 0 && this.image === this.sprites.fall.image){
      this.animate = true;
      if (this.framesElapsed % this.framesHold === 0) {
        this.spritesElapsed++;
      }
      if(this.spritesElapsed < this.framesMax){
        return
      }
    }else{
      this.spritesElapsed = 0;
    }

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

  jump(strengt) {
    this.jumpStrength = strengt;
    this.impulse = this.jumpStrength;
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
