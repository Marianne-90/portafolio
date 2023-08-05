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
    // Agregamos nuevos parámetros específicos de la clase "Map"
  }) {
    // Llamamos al constructor de la clase padre "Character" usando "super"
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


    if(this.spritesLeft.length > 0 ){
        for (let i = 0; i < this.spritesLeft.length; i++) {
            c.drawImage(
                this.imageMap,
                //   crop information
                this.spritesLeft[i].index * (this.imageMap.width / this.framesData.framesTotal),
                0,
                this.imageMap.width / this.framesData.framesTotal,
                this.imageMap.height,
          
                // end of crop information
                //*! el ofset es para achicar el aire a la hora de cortar por ejemplo si quieres que solo se dibuje la imagen y quitar el aire
                //*! lo que hace por así decirlo es mover los puntos de referencia a la hora de posicionar pero no corta la imagen
                this.position.x - this.image.width/2 - (i * (this.imageMap.width / this.framesData.framesTotal)),
                this.position.y - this.offset.y,
          
                // tamaño de la imagen
                (this.imageMap.width / this.framesData.framesTotal) * this.scale,
                this.imageMap.height * this.scale
              );
        }
    }

    if(this.spritesRigth.length > 0 ){
        for (let i = 0; i < this.spritesRigth.length; i++) {
            c.drawImage(
                this.imageMap,
                //   crop information
                this.spritesRigth[i].index * (this.imageMap.width / this.framesData.framesTotal),
                0,
                this.imageMap.width / this.framesData.framesTotal,
                this.imageMap.height,
          
                // end of crop information
                //*! el ofset es para achicar el aire a la hora de cortar por ejemplo si quieres que solo se dibuje la imagen y quitar el aire
                //*! lo que hace por así decirlo es mover los puntos de referencia a la hora de posicionar pero no corta la imagen
                this.position.x + this.image.width/2 + (i * (this.imageMap.width / this.framesData.framesTotal)),
                this.position.y - this.offset.y,
          
                // tamaño de la imagen
                (this.imageMap.width / this.framesData.framesTotal) * this.scale,
                this.imageMap.height * this.scale
              );
        }
    }
        

  }

  test() {
    console.log("sprites", spritesLeft);
  }
}
