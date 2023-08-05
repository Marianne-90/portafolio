import { map } from "./sprites";
import { gameData } from "../../../data/gameData";


const { background } = gameData;

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

export function randomFramesGenerator(frames) {
  const framesProbabilidades = [];

  for (let i = 0; i < frames.length; i++) {
    let element = frames[i];
    let posibility = element.frequency;

    while (posibility > 0) {
      framesProbabilidades.push({ index: i, name: element.name });
      posibility--;
    }
  }

  //*! calcula un numero aleatorio entre 0 y la suma de todas las probabilidades
  const randomNum = Math.floor(Math.random() * framesProbabilidades.length);
  const randomFrame = framesProbabilidades[randomNum];
  return randomFrame;
}

let backgroungLeft = [];
let backgroungRight = ['hola'];



export function backGroundAnimation({ c, canvasWidth, xPosition }) {
  let initialFrameWidth = map.image.width * map.scale;
  map.position.x =
    canvasWidth / 2 - initialFrameWidth / 2 + xPosition.current;

  let anchoDeUnFrame = map.imageMap.width/map.framesData.framesTotal;

  if(map.position.x - (backgroungLeft.length * anchoDeUnFrame) >= 0){
    backgroungLeft.push(randomFramesGenerator(background.frames))
  }
  if(map.position.x + initialFrameWidth + (backgroungRight.length * anchoDeUnFrame) >= 0){
    backgroungRight.push(randomFramesGenerator(background.frames))
  }

  map.spritesLeft = backgroungLeft;
  map.spritesRigth = backgroungRight;

  map.update(c);
}
