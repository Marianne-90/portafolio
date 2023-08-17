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

let wallFrame =  house.frames[0]

let backgroungLeft = [];
let largoDelFramento = 0;
let backgroungRight = [];

export function housedAnimation({
  c,
  canvasWidth,
  temporalXposition,
  temporalPop,
}) {

    
  let house = MAP.image.width * MAP.scale;
  MAP.position.x = canvasWidth / 2 - house / 2 + temporalXposition.current;

  MAP.spritesLeft = backgroungLeft;
  MAP.spritesRigth = backgroungRight;

  MAP.update(c, canvasWidth);
}
