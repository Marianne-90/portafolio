import { MAP } from "./sprites";
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
}) {
  let houseWidth = MAP.image.width * MAP.scale;
  let anchoDeUnFrame = MAP.imageMap.width / MAP.framesData.framesTotal;

  MAP.position.x = canvasWidth / 2 - houseWidth / 2 + temporalXposition.current;

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
