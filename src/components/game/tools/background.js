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

let largoDelFramento = 0;
let inicioDelFragmento = 0;

let backgroungLeftFragment = [];

let backgroungRight = [];

//
let medidorDeFrames = 0;

export function backGroundAnimation({ c, canvasWidth, xPosition }) {
  let initialFrameWidth = map.image.width * map.scale;
  map.position.x = canvasWidth / 2 - initialFrameWidth / 2 + xPosition.current;
  let anchoDeUnFrame = map.imageMap.width / map.framesData.framesTotal; //*! esta ci

  largoDelFramento = Math.ceil(canvasWidth / anchoDeUnFrame);

  // let lastBackgroungLeftFragmentIndex =
  //   backgroungLeftFragment.length > 0 ? backgroungLeftFragment.length - 1 : 0;

  let caltulateInitialFragnet = 0

  //*! esto es para optimizar la carga del mapa y que no se estén cargando todos los frames al mismo tiempo


  if( anchoDeUnFrame !== 0 ){

    let caltulateLastFragment = Math.ceil(map.position.x / anchoDeUnFrame);
  
    caltulateInitialFragnet =
      caltulateLastFragment - largoDelFramento - 1 < 0 //*! este uno lo recupero abajo es para que no se vea la carga
        ? 0
        : caltulateLastFragment - largoDelFramento -1;
  
    console.log("x ", caltulateInitialFragnet);
  } 

  backgroungLeftFragment = backgroungLeft.slice(
    caltulateInitialFragnet,
    caltulateInitialFragnet + largoDelFramento + 1 //*! aquí lo recupero
  );


  if (map.position.x - backgroungLeft.length * anchoDeUnFrame >= 0) {
    let element = {
      ...randomFramesGenerator(background.frames),
      position: backgroungLeft.length,
    };

    backgroungLeft.push(element);
  }



  if (
    map.position.x +
      initialFrameWidth +
      backgroungRight.length * anchoDeUnFrame >=
    0
  ) {
    backgroungRight.push(randomFramesGenerator(background.frames));
  }

  map.spritesLeft = backgroungLeftFragment;
  map.spritesRigth = backgroungRight;

  map.update(c, canvasWidth);
}
