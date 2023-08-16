import { map, bunnySprite } from "./sprites";
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
  const FRAMESPROBABILIDADES = [];

  for (let i = 0; i < frames.length; i++) {
    let element = frames[i];
    let posibility = element.frequency;

    while (posibility > 0) {
      FRAMESPROBABILIDADES.push({ index: i, name: element.name });
      posibility--;
    }
  }

  //*! calcula un numero aleatorio entre 0 y la suma de todas las probabilidades
  const RANDOMNUM = Math.floor(Math.random() * FRAMESPROBABILIDADES.length);
  const RANDOMFRAME = FRAMESPROBABILIDADES[RANDOMNUM];
  return RANDOMFRAME;
}

let backgroungLeft = [];
let largoDelFramento = 0;
let backgroungLeftFragment = [];
let backgroungRight = [];

export function backGroundAnimation({ c, canvasWidth, temporalXposition }) {
  let initialFrameWidth = map.image.width * map.scale;
  map.position.x =
    canvasWidth / 2 - initialFrameWidth / 2 + temporalXposition.current;
  let anchoDeUnFrame = map.imageMap.width / map.framesData.framesTotal; //*! no entiendo poqué pero esta cosa se desgobierna si le pones initialFrameWidth, no lo hagas es obvio pero no lo hagas

  largoDelFramento = Math.ceil(canvasWidth / anchoDeUnFrame);

  let caltulateInitialFragnet = 0;

  //*! asignar valores a los acction blocks lo pongo así para que sea escalable
  //*! además evaluo si chocan y ejecuto una acción

  map.accionBlocks.forEach((action, index) => {
    let xPosition = map.position.x + map.accionBlocks[index].initialPosition.x;
    let yPosition = map.image.height - map.accionBlocks[index].height; //*! quiero que se dibuje de abajo

    let elementWidth =  map.accionBlocks[index].width

    map.accionBlocks[index].position.x = xPosition;
    map.accionBlocks[index].position.y = yPosition;

    const isColliding = () => {
      return xPosition < canvasWidth/2 && xPosition+elementWidth >  canvasWidth/2;
    };


   if(isColliding() && map.accionBlocks[index].isActive === false){
    map.accionBlocks[index].isActive = true;
    console.log('entro');
    
   }else if(!isColliding() && map.accionBlocks[index].isActive === true ){
    map.accionBlocks[index].isActive = false;
    console.log('salió');
   }
    


  });

  //*! esto es para optimizar la carga del mapa y que no se estén cargando todos los frames al mismo tiempo
  //*? tenemos que ver que anchoDeUnFrame sea mayor a 0 o sea que acabe de cargar si no las fórmulas no funcionan
  if (anchoDeUnFrame !== 0) {
    let caltulateLastFragment = Math.ceil(map.position.x / anchoDeUnFrame); //*? la distancia de x la dividimos entre el ancho de un frame y redondeamos para arriba

    caltulateInitialFragnet =
      caltulateLastFragment - largoDelFramento - 1 < 0 //*! este uno lo recupero abajo es para que no se vea la carga
        ? 0
        : caltulateLastFragment - largoDelFramento - 1;
  }

  //*? se hace el slice correpondiente y se va actualizando

  backgroungLeftFragment = backgroungLeft.slice(
    caltulateInitialFragnet,
    caltulateInitialFragnet + largoDelFramento + 1 //*! aquí lo recupero
  );

  //*? esto genera los frames aleatorios pertinentes y los mantiene conforme crece

  if (map.position.x - backgroungLeft.length * anchoDeUnFrame >= 0) {
    let element = {
      ...randomFramesGenerator(background.frames),
      position: backgroungLeft.length,
    };

    backgroungLeft.push(element);
  }

  //*? lo mismo para la izquierda, pero no aplico la fragmentación pues solo lo voy a dibujar hasta que tope el home y luego ya no va a avanzar

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

  //*! aquí asignamos los valores a los objetos de acción

  map.update(c, canvasWidth);
}

export function backGroundRestart(canvasWidth) {
  map.spritesLeft = backgroungLeftFragment;
  map.spritesRigth = backgroungRight;

  let initialFrameWidth = map.image.width * map.scale;
  map.position.x = canvasWidth / 2 - initialFrameWidth / 2;

  background.general.position.x = 0;

  // console.log('bacgroud restarte ', background.general.position.x );
}
