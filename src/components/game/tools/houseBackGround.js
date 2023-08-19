import { MAP, BUNNY_SPRITE } from "./sprites";
import { gameData } from "../../../data/gameData";

const { house } = gameData;

export const initCanvas = (canvasWidth, canvasHeight, canvasRef) => {
  if (canvasRef.current) {
    const canvas = canvasRef.current;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const context = canvas.getContext("2d");

    return context; // Retorna el contexto 2D
  }
  return null;
};

let wallFrame = house.frames[0];

let nivelador = 1.5; //*! no sé porqué no entiendo, los frames aleatorios no están funcionando correctamente y se le debe restar 1.5

let backgroungLeft = [];
let largoDelFramento = 0;
let backgroungRight = [];

export function housedAnimation({
  c,
  canvasWidth,
  temporalXposition,
  temporalPop,
  temporalBlockMove,
}) {
  let houseWidth = MAP.image.width * MAP.scale;
  let anchoDeUnFrame = MAP.imageMap.width / MAP.framesData.framesTotal;

  MAP.position.x = canvasWidth / 2 - houseWidth / 2 + temporalXposition.current;

  //*! asignar valores a los acction blocks lo pongo así para que sea escalable
  //*! además evaluo si chocan y ejecuto una acción

  MAP.accionBlocks.forEach((action, index) => {
    let xPosition = MAP.position.x + MAP.accionBlocks[index].initialPosition.x;
    let yPosition = MAP.image.height - MAP.accionBlocks[index].height; //*! quiero que se dibuje de abajo

    let elementWidth = MAP.accionBlocks[index].width;

    MAP.accionBlocks[index].position.x = xPosition;
    MAP.accionBlocks[index].position.y = yPosition;

    const isColliding = () => {
      return (
        xPosition < canvasWidth / 2 &&
        xPosition + elementWidth > canvasWidth / 2
      );
    };

    if (isColliding() && MAP.accionBlocks[index].isActive === false) {
      MAP.accionBlocks[index].isActive = true;
      temporalPop.current.post = { ...MAP.accionBlocks[index], index };
    } else if (!isColliding() && MAP.accionBlocks[index].isActive === true) {
      MAP.accionBlocks[index].isActive = false;
      temporalPop.current.post = {};
    }
  });

  //*! DETECTAR LOS OBSTACULOS

  MAP.obstacles.forEach((action, index) => {
    let bunnyWidth =
      (BUNNY_SPRITE.image.width * BUNNY_SPRITE.scale) / BUNNY_SPRITE.framesMax;
    let xPosition = MAP.position.x + MAP.obstacles[index].initialPosition.x;
    let yPosition = MAP.image.height - MAP.obstacles[index].height; //*! quiero que se dibuje de abajo

    let elementWidth = MAP.obstacles[index].width;

    MAP.obstacles[index].position.x = xPosition;
    MAP.obstacles[index].position.y = yPosition;

    const isCollidingLeft = () => {
      return (
        xPosition + elementWidth > canvasWidth / 2 - bunnyWidth / 2 &&
        xPosition < canvasWidth / 2 - bunnyWidth / 2
      );
    };

    const isCollidingRight = () => {
      return (
        xPosition < canvasWidth / 2 + bunnyWidth / 2 &&
        xPosition + elementWidth > canvasWidth / 2 + bunnyWidth / 2
      );
    };

    if (isCollidingLeft() && !MAP.obstacles[index].collition.left) {
      MAP.obstacles[index].collition.left = true;
      temporalBlockMove.current.post = { ...MAP.obstacles[index].collition };
    } else if (!isCollidingLeft() && MAP.obstacles[index].collition.left) {
      MAP.obstacles[index].collition.left = false;
      temporalBlockMove.current.post = { ...MAP.obstacles[index].collition };
    }

    if (isCollidingRight() && !MAP.obstacles[index].collition.right) {

      MAP.obstacles[index].collition.right = true;
      temporalBlockMove.current.post = { ...MAP.obstacles[index].collition };

    } else if (!isCollidingRight() && MAP.obstacles[index].collition.right) {
      MAP.obstacles[index].collition.right = false;
      temporalBlockMove.current.post = { ...MAP.obstacles[index].collition };
    }
  });

  //*! dibujar la pared para que no se vea negro y feo

  //*? IZQUIERDA
  if (MAP.position.x - backgroungLeft.length * anchoDeUnFrame >= 0) {
    let element = {
      name: house.frames[0].name,
      index: 0,
      position: backgroungLeft.length - nivelador,
    };
    backgroungLeft.push(element);
  }

  //*? DERECHA

  if (
    MAP.position.x + houseWidth + backgroungRight.length * anchoDeUnFrame <=
    canvasWidth
  ) {
    let element = {
      name: house.frames[0].name,
      index: 0,
      position: backgroungRight.length + nivelador,
    };

    backgroungRight.push(element);
  }

  MAP.spritesLeft = backgroungLeft;
  MAP.spritesRigth = backgroungRight;

  MAP.update(c, canvasWidth);
}
