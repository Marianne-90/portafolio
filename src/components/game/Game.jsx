import { gameData } from "../../data/gameData";
import { useRef, useEffect, useState } from "react";
import {
  randomFramesGenerator,
  backGroundAnimation,
  initCanvas,
} from "./tools/background";
import { bunnyAnimation } from "./tools/bunny";
import {
  handleMoveLeftTouchStart,
  handleMoveRightTouchStart,
} from "./tools/eventListeners";

export const Game = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const moveLeftButtonRef = useRef(null);
  const moveRightButtonRef = useRef(null);

  let canvasWidth = 0;
  let canvasHeight = 0;
  let xPosition = useRef(0);
  let keyPressed = useRef("neutro");
  let pasto = 25;
  let animationId;

  // console.log("frame :", randomFramesGenerator(background.frames));

  // const fondosGenerados = Array.from({ length: cantidadFrames }, seleccionarElementoConProbabilidades);

  const handleJump = () => {
    keyPressed.current = "jump";


const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const position = 8;
const elementsToPrint = 3;

// Aseguramos que la posición inicial sea válida
let startIndex = Math.max(position - elementsToPrint + 1, 0);

// Imprimimos los elementos en orden inverso, desde la posición inicial hacia atrás
for (let i = position; i >= startIndex; i--) {
  // console.log(array[i]);
}

console.log(startIndex);


  };

  useEffect(() => {
    canvasWidth = containerRef.current.offsetWidth;
    canvasHeight = containerRef.current.offsetHeight;

    //SE INICIA EL CANVAS
    const c = initCanvas(canvasWidth, canvasHeight, canvasRef);

    //ANIMAR TODO
    if (c) {
      const canvas = canvasRef.current;

      function animate() {

        

        animationId = requestAnimationFrame(animate);
        c.fillRect(0, 0, canvasWidth, canvas.height);

        backGroundAnimation({ c, canvasWidth, xPosition });
        bunnyAnimation({ c, canvasWidth, canvasHeight, keyPressed});
      }

      animate();
    }


    //*? -------- MOVIMIENTOS ---------
    //*! EL SET INTERVAL SE QUEDA AQUÍ PORQUE SI LO PASAS COMO FUNCIÓN NO SE ANEXA BIEN EL ID Y SE HACE UN DESASTRE

    let moveLeftInterval;
    let moveRightInterval;

    //*?  ----------------COMPUTADORAS-------------------

    //*! LOS EVENT LISTENERS NO LIMPIAN FUNCIONES ANÓNIMAS ES POR ELLO QUE EXTRAJE LA FUNCIÓN

    function eventMoveLeftInterval() {
      moveLeftInterval = handleMoveLeftTouchStart(xPosition, keyPressed);
    }

    function eventMoveRigthInterval() {
      moveRightInterval = handleMoveRightTouchStart(xPosition, keyPressed);
    }

    // PC IZQUIERDA
    moveLeftButtonRef.current.addEventListener(
      "mousedown",
      eventMoveLeftInterval
    );
    moveLeftButtonRef.current.addEventListener("mouseup", () => {
      clearInterval(moveLeftInterval);
      clearInterval(eventMoveLeftInterval); //*! si no se queda moviendo para siempre
      keyPressed.current = "neutro";
    });

    // PC DERECHA
    moveRightButtonRef.current.addEventListener(
      "mousedown",
      eventMoveRigthInterval
    );

    moveRightButtonRef.current.addEventListener("mouseup", () => {
      clearInterval(moveRightInterval);
      clearInterval(eventMoveRigthInterval);
      keyPressed.current = "neutro";
    });

    //*?  ----------------CELULARES-------------------

    // IZQUIERDA
    moveLeftButtonRef.current.addEventListener(
      "touchstart",
      eventMoveLeftInterval
    );
    moveLeftButtonRef.current.addEventListener("touchend", () => {
      clearInterval(moveLeftInterval);
      clearInterval(eventMoveLeftInterval); //*! si no se queda moviendo para siempre
      keyPressed.current = "neutro";
    });

    // DERECHA
    moveRightButtonRef.current.addEventListener(
      "touchstart",
      eventMoveRigthInterval
    );
    moveRightButtonRef.current.addEventListener("touchend", () => {
      clearInterval(moveRightInterval);
      clearInterval(eventMoveRigthInterval);
      keyPressed.current = "neutro";
    });

    //*? -------- MANEJAR EL REDIMENCIONADO

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

    return () => {
      //LIMPIAR RESIZE
      window.removeEventListener("resize", handleResize);

      // LIMPIAR CLIC

      //DERECHA

      moveLeftButtonRef.current.removeEventListener(
        "mousedown",
        eventMoveLeftInterval
      );

      moveLeftButtonRef.current.removeEventListener(
        "touchstart",
        eventMoveLeftInterval
      );

      //IZQUIERDA
      moveRightButtonRef.current.removeEventListener(
        "touchstart",
        eventMoveRigthInterval
      );

      moveRightButtonRef.current.removeEventListener(
        "mousedown",
        eventMoveRigthInterval
      );

      //LIMPIAR ANIMACIÓN

      cancelAnimationFrame(animationId); //*? para que no le de epilepcia al conejo al montarse muchas veces el useEffect
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
