import { MAP, BUNNY_SPRITE } from "./sprites";
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
  const FRAMES_PROBABILIDADES = [];

  for (let i = 0; i < frames.length; i++) {
    let element = frames[i];
    let posibility = element.frequency;

    while (posibility > 0) {
      FRAMES_PROBABILIDADES.push({ index: i, name: element.name });
      posibility--;
    }
  }

  //*! calcula un numero aleatorio entre 0 y la suma de todas las probabilidades
  const RANDOM_NUM = Math.floor(Math.random() * FRAMES_PROBABILIDADES.length);
  const RANDOM_FRAME = FRAMES_PROBABILIDADES[RANDOM_NUM];
  return RANDOM_FRAME;
}

let backgroungLeft = [];
let largoDelFramento = 0;
let backgroungLeftFragment = [];
let backgroungRight = [];

const isColliding = (xPosition, canvasWidth, elementWidth) => {
  return (
    xPosition < canvasWidth / 2 && xPosition + elementWidth > canvasWidth / 2
  );
};

const actionBlocksHandler = (temporalPop, canvasWidth) => {
  //*! asignar valores a los acction blocks lo pongo así para que sea escalable
  //*! además evaluo si chocan y ejecuto una acción

  MAP.accionBlocks.forEach((action, index) => {
    let xPosition = MAP.position.x + MAP.accionBlocks[index].initialPosition.x;
    let yPosition = MAP.image.height - MAP.accionBlocks[index].height; //*! quiero que se dibuje de abajo

    let elementWidth = MAP.accionBlocks[index].width;

    MAP.accionBlocks[index].position.x = xPosition;
    MAP.accionBlocks[index].position.y = yPosition;

    if (
      isColliding(xPosition, canvasWidth, elementWidth) &&
      MAP.accionBlocks[index].isActive === false
    ) {
      MAP.accionBlocks[index].isActive = true;
      temporalPop.current.post = { ...MAP.accionBlocks[index], index };
    } else if (
      !isColliding(xPosition, canvasWidth, elementWidth) &&
      MAP.accionBlocks[index].isActive === true
    ) {
      MAP.accionBlocks[index].isActive = false;
      temporalPop.current.post = {};
    }
  });
};

const drawBackground = (canvasWidth, initialFrameWidth) => {
  let anchoDeUnFrame = MAP.imageMap.width / MAP.framesData.framesTotal; //*! no entiendo poqué pero esta cosa se desgobierna si le pones initialFrameWidth, no lo hagas es obvio pero no lo hagas
  largoDelFramento = Math.ceil(canvasWidth / anchoDeUnFrame);
  let caltulateInitialFragnet = 0;

  //*! esto es para optimizar la carga del mapa y que no se estén cargando todos los frames al mismo tiempo
  //*? tenemos que ver que anchoDeUnFrame sea mayor a 0 o sea que acabe de cargar si no las fórmulas no funcionan
  if (anchoDeUnFrame !== 0) {
    let caltulateLastFragment = Math.ceil(MAP.position.x / anchoDeUnFrame); //*? la distancia de x la dividimos entre el ancho de un frame y redondeamos para arriba

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

  if (MAP.position.x - backgroungLeft.length * anchoDeUnFrame >= 0) {
    let element = {
      ...randomFramesGenerator(background.frames),
      position: backgroungLeft.length,
    };

    backgroungLeft.push(element);
  }

  //*? lo mismo para la izquierda, pero no aplico la fragmentación pues solo lo voy a dibujar hasta que tope el home y luego ya no va a avanzar

  if (
    MAP.position.x +
      initialFrameWidth +
      backgroungRight.length * anchoDeUnFrame >=
    0
  ) {
    backgroungRight.push(randomFramesGenerator(background.frames));
  }

  MAP.spritesLeft = backgroungLeftFragment;
  MAP.spritesRigth = backgroungRight;
};

const isCollidingLeft = (xPosition, elementWidth, canvasWidth, bunnyWidth) => {
  return (
    xPosition + elementWidth > canvasWidth / 2 - bunnyWidth / 2 &&
    xPosition < canvasWidth / 2 - bunnyWidth / 2
  );
};

const isCollidingRight = (xPosition, elementWidth, canvasWidth, bunnyWidth) => {
  return (
    xPosition < canvasWidth / 2 + bunnyWidth / 2 &&
    xPosition + elementWidth > canvasWidth / 2 + bunnyWidth / 2
  );
};

const obstaclesHandler = (temporalBlockMove, canvasWidth) => {
  //*! DETECTAR LOS OBSTACULOS

  MAP.obstacles.forEach((action, index) => {
    let bunnyWidth =
      (BUNNY_SPRITE.image.width * BUNNY_SPRITE.scale) / BUNNY_SPRITE.framesMax;
    let xPosition = MAP.position.x + MAP.obstacles[index].initialPosition.x;
    let yPosition = MAP.image.height - MAP.obstacles[index].height; //*! quiero que se dibuje de abajo

    let elementWidth = MAP.obstacles[index].width;

    MAP.obstacles[index].position.x = xPosition;
    MAP.obstacles[index].position.y = yPosition;

    if (
      isCollidingLeft(xPosition, elementWidth, canvasWidth, bunnyWidth) &&
      !MAP.obstacles[index].collition.left
    ) {
      MAP.obstacles[index].collition.left = true;
      temporalBlockMove.current.post = { ...MAP.obstacles[index].collition };
    } else if (
      !isCollidingLeft(xPosition, elementWidth, canvasWidth, bunnyWidth) &&
      MAP.obstacles[index].collition.left
    ) {
      MAP.obstacles[index].collition.left = false;
      temporalBlockMove.current.post = { ...MAP.obstacles[index].collition };
    }

    if (
      isCollidingRight(xPosition, elementWidth, canvasWidth, bunnyWidth) &&
      !MAP.obstacles[index].collition.right
    ) {
      MAP.obstacles[index].collition.right = true;
      temporalBlockMove.current.post = { ...MAP.obstacles[index].collition };
    } else if (
      !isCollidingRight(xPosition, elementWidth, canvasWidth, bunnyWidth) &&
      MAP.obstacles[index].collition.right
    ) {
      MAP.obstacles[index].collition.right = false;
      temporalBlockMove.current.post = { ...MAP.obstacles[index].collition };
    }
  });
};


export function backGroundRestart(canvasWidth) {
  MAP.spritesLeft = backgroungLeftFragment;
  MAP.spritesRigth = backgroungRight;

  let initialFrameWidth = MAP.image.width * MAP.scale;
  MAP.position.x = canvasWidth / 2 - initialFrameWidth / 2;

  background.general.position.x = 0;

  // console.log('bacgroud restarte ', background.general.position.x );
}

export function backGroundAnimation({
  c,
  canvasWidth,
  temporalXposition,
  temporalPop,
  temporalBlockMove,
}) {
  let initialFrameWidth = MAP.image.width * MAP.scale;
  MAP.position.x =
    canvasWidth / 2 - initialFrameWidth / 2 + temporalXposition.current;

  actionBlocksHandler(temporalPop, canvasWidth);
  drawBackground(canvasWidth, initialFrameWidth);
  obstaclesHandler(temporalBlockMove, canvasWidth);


  MAP.update(c, canvasWidth);
}


