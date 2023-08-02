export class Sprite {
  constructor({
    position,
    imageSrc,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 },
  }) {
    this.position = position;
    this.image = new Image();
    this.image.src = imageSrc;
    this.scale = scale;
    this.framesMax = framesMax;
    this.frameCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 10;
    this.offset = offset;
  }

  draw(c) {
    c.drawImage(
      this.image,
      //   crop information
      this.frameCurrent * (this.image.width / this.framesMax),
      0,
      this.image.width / this.framesMax,
      this.image.height,

      // end of crop information
      //*! el ofset es para achicar el aire a la hora de cortar por ejemplo si quieres que solo se dibuje la imagen y quitar el aire
      //*! lo que hace por así decirlo es mover los puntos de referencia a la hora de posicionar pero no corta la imagen
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,

      // tamaño de la imagen
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale
    );
  }

  animateFrames() {
    this.framesElapsed++;
    //*! cada que esto se lopee se va a aladir un número si un número es dividiendo de framehold entonces se ejecuta la función y de esta manera se alenta el proceso y se ve mejor la animación

    if (this.framesElapsed % this.framesHold === 0) {
      if (this.frameCurrent < this.framesMax - 1) {
        this.frameCurrent++;
      } else {
        this.frameCurrent = 0;
      }
    }
  }

  update(c) {
    this.draw(c);
    this.animateFrames();
  }
}
