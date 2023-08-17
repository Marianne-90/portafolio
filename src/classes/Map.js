import { Sprite } from "./Sprite";

export class Map extends Sprite {
  constructor({
    position,
    imageSrc,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 },
    framesData,
    animate,
    accionBlocks = [],
    obstacles = [],

  }) {

    super({
      position,
      imageSrc,
      scale,
      framesMax,
      offset,
      animate,
    });

    this.imageMap = new Image();
    this.imageMap.src = framesData.imageSrc;

    this.framesData = framesData;
    this.spritesLeft = [];
    this.spritesRigth = [];
    this.accionBlocks = accionBlocks;
    this.obstacles = obstacles;
  }

  draw(c, canvasWidth) {
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

    //*! dibujar el cuadro de volver a casa
    
    // c.fillStyle = "red"; // Color rojo
    
    // if(this.accionBlocks.length > 0){
    //   for (let i = 0; i < this.accionBlocks.length; i++) {
    //     c.fillRect(
    //       this.accionBlocks[i].position.x,
    //       this.accionBlocks[i].position.y,
    //       this.accionBlocks[i].width,
    //       this.accionBlocks[i].height
    //     );
    //   }
    // }

    if (this.spritesLeft.length > 0 && this.position.x > 0) {
      for (let i = 0; i < this.spritesLeft.length; i++) {
        c.drawImage(
          this.imageMap,
          //   crop information
          this.spritesLeft[i].index *
            (this.imageMap.width / this.framesData.framesTotal),
          0,
          this.imageMap.width / this.framesData.framesTotal,
          this.imageMap.height,

          // end of crop information
          this.position.x -
            this.image.width / 2 -
            this.spritesLeft[i].position *
              (this.imageMap.width / this.framesData.framesTotal),
          this.position.y - this.offset.y,

          // tamaño de la imagen
          (this.imageMap.width / this.framesData.framesTotal) * this.scale,
          this.imageMap.height * this.scale
        );
      }
    }

    if (this.spritesRigth.length > 0) {
      for (let i = 0; i < this.spritesRigth.length; i++) {
        c.drawImage(
          this.imageMap,
          //   crop information
          this.spritesRigth[i].index *
            (this.imageMap.width / this.framesData.framesTotal),
          0,
          this.imageMap.width / this.framesData.framesTotal,
          this.imageMap.height,

          // end of crop information
          this.position.x +
            this.image.width +
            i * (this.imageMap.width / this.framesData.framesTotal),
          this.position.y - this.offset.y,

          // tamaño de la imagen
          (this.imageMap.width / this.framesData.framesTotal) * this.scale,
          this.imageMap.height * this.scale
        );
      }
    }
  }

switchBackGround(newSrc){

let image = new Image();
image.src = newSrc;

this.image = image;

}

}
