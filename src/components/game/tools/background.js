import { initialFrame } from "./sprites";

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

export function backGroundAnimation({ c, canvasWidth, xPosition }) {
  let initialFrameWidth = initialFrame.image.width * initialFrame.scale;
  
  initialFrame.position.x =
    canvasWidth / 2 - initialFrameWidth / 2 + xPosition.current;

  initialFrame.update(c);
}
