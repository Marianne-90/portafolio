import { gameData } from "../../../data/gameData";

export function randomFramesGenerator() {
  const { background } = gameData;

  const framesProbabilidades = [];

  for (let i = 0; i < background.frames.length; i++) {
    let element = background.frames[i];
    let posibility = element.frequency;

    while (posibility > 0) {
      framesProbabilidades.push({ index: i, name: element.name });
      posibility--;
    }
  }

  //*! calcula un numero aleatorio entre 0 y la suma de todas las probabilidades
  const randomNum = Math.floor(Math.random() * framesProbabilidades.length);
  const randomFrame = framesProbabilidades[randomNum];
  return randomFrame
}
