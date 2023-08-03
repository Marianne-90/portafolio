import { gameData } from "../../data/gameData";
import { useRef, useEffect, useState } from "react";
import {
  randomFramesGenerator,
  backGroundAnimation,
  initCanvas,
} from "./tools/background";
import {
  backBunnyAnimation
} from "./tools/bunny"

export const Game = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const moveLeftButtonRef = useRef(null);
  const moveRightButtonRef = useRef(null);

  let canvasWidth = 0;
  let canvasHeight = 0;
  let xPosition = 0;
  let yPositionBunny = 0;

  const { background } = gameData;

  // console.log("frame :", randomFramesGenerator(background.frames));

  // const fondosGenerados = Array.from({ length: cantidadFrames }, seleccionarElementoConProbabilidades);



const handleJump = () => {
  console.log('salto');
};

  useEffect(() => {
    //VARIABLES GLOBALES
    canvasWidth = containerRef.current.offsetWidth;
    canvasHeight = containerRef.current.offsetHeight;

    //SE INICIA EL CANVAS
    const c = initCanvas(canvasWidth, canvasHeight, canvasRef);

    //ANIMAR TODO
    if (c) {
      const canvas = canvasRef.current;

      function animate() {
        requestAnimationFrame(animate);
        c.fillRect(0, 0, canvasWidth, canvas.height);
        backGroundAnimation({ c, canvasWidth, xPosition });
      }
      animate();
    }
    // TECLAS PRESIONADAS

    const handleKeyPress = (event) => {
      switch (event.key) {
        case "a":
          xPosition -= 5;
          break;
        case "d":
          xPosition += 5;
          break;
        case "w":
          console.log("salto");
          break;
        default:
          break;
      }
    };

    // EVENT LISTENER PARA EL BOTÓN DE MOVER IZQUIERDA MIENTRAS SE MANTIENE PRESIONADO
    let moveLeftInterval;
    moveLeftButtonRef.current.addEventListener("mousedown", () => {
      moveLeftInterval = setInterval(() => {
        xPosition -= 5;
      }, 50);
    });
    moveLeftButtonRef.current.addEventListener("mouseup", () => {
      clearInterval(moveLeftInterval);
    });

    // EVENT LISTENER PARA EL BOTÓN DE MOVER DERECHA MIENTRAS SE MANTIENE PRESIONADO
    let moveRightInterval;
    moveRightButtonRef.current.addEventListener("mousedown", () => {
      moveRightInterval = setInterval(() => {
        xPosition += 5;
      }, 50);
    });
    moveRightButtonRef.current.addEventListener("mouseup", () => {
      clearInterval(moveRightInterval);
    });

    //*?  ----------------CELULARES-------------------

    // EVENT LISTENER PARA EL BOTÓN DE MOVER IZQUIERDA MIENTRAS SE MANTIENE PRESIONADO
    moveLeftButtonRef.current.addEventListener("touchstart", () => {
      moveLeftInterval = setInterval(() => {
        xPosition -= 5;
      }, 50);
    });
    moveLeftButtonRef.current.addEventListener("touchend", () => {
      clearInterval(moveLeftInterval);
    });

    // EVENT LISTENER PARA EL BOTÓN DE MOVER DERECHA MIENTRAS SE MANTIENE PRESIONADO
    moveRightButtonRef.current.addEventListener("touchstart", () => {
      moveRightInterval = setInterval(() => {
        xPosition += 5;
      }, 50);
    });
    moveRightButtonRef.current.addEventListener("touchend", () => {
      clearInterval(moveRightInterval);
    });

    //MANEJAR EL REDIMENCIONADO

    const handleResize = () => {
      if (canvasRef.current) {
        canvasWidth = containerRef.current.offsetWidth;
        const canvas = canvasRef.current;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
      }
    };

    handleResize(); //Puse un useState para que si cambia de tamaño se actualice la pantalla
    window.addEventListener("resize", handleResize); // Agregar un listener para cambios de tamaño de pantalla
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el listener al desmontar el componente
      window.removeEventListener("keydown", handleKeyPress); // Limpiar x 2
    };
  }, []);

  return (
    <div className="gameContainer">
      <div ref={containerRef} className="bunnyGame">
        <canvas ref={canvasRef}> </canvas>
      </div>
      <div className="leftRight">
        <button ref={moveLeftButtonRef}>Izquierda</button>
        <button ref={moveRightButtonRef}>Derecha</button>
      </div>
      <button onClick={handleJump}>Saltar</button>
    </div>
  );
};
