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
  handleMoveLeftTouchEnd,
  handleMoveRightTouchStart,
  handleMoveRightTouchEnd,
} from "./tools/eventListeners";

export const Game = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const moveLeftButtonRef = useRef(null);
  const moveRightButtonRef = useRef(null);

  let canvasWidth = 0;
  let canvasHeight = 0;
  let xPosition = useRef(0);
  let keyPressed = useRef();
  let pasto = 25;
  let animationId;

  // console.log("frame :", randomFramesGenerator(background.frames));

  // const fondosGenerados = Array.from({ length: cantidadFrames }, seleccionarElementoConProbabilidades);

  const handleJump = () => {
    keyPressed.current = "up"
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
        bunnyAnimation({ c, canvasWidth, canvasHeight, keyPressed, pasto });
      }

      animate();
    }
    // TECLAS PRESIONADAS

    const handleKeyPress = (event) => {
      switch (event.key) {
        case "a":
          xPosition.current += 5;
          keyPressed: "left";
          break;
        case "d":
          xPosition.current -= 5;
          keyPressed: "rigth";
          break;
        case "w":
          keyPressed: "up";
          break;
        default:
          break;
      }
    };

    //*? -------- MOVIMIENTOS ---------

    let moveLeftInterval;
    let moveRightInterval;

    //*! EL SET INTERVAL SE QUEDA AQUÍ PORQUE SI LO PASAS COMO FUNCIÓN NO SE ANEXA BIEN EL ID Y SE HACE UN DESASTRE

    //*?  ----------------COMPUTADORAS-------------------

    // EVENT LISTENER PARA EL BOTÓN DE MOVER IZQUIERDA MIENTRAS SE MANTIENE PRESIONADO
    moveLeftButtonRef.current.addEventListener(
      "mousedown",
      () => (moveLeftInterval = handleMoveLeftTouchStart(xPosition, keyPressed))
    );
    moveLeftButtonRef.current.addEventListener("mouseup", () => {
      clearInterval(moveLeftInterval);
      keyPressed.current = null;
    });

    // EVENT LISTENER PARA EL BOTÓN DE MOVER DERECHA MIENTRAS SE MANTIENE PRESIONADO
    moveRightButtonRef.current.addEventListener(
      "mousedown",
      () =>
        (moveRightInterval = handleMoveRightTouchStart(xPosition, keyPressed))
    );
    moveRightButtonRef.current.addEventListener("mouseup", () => {
      clearInterval(moveRightInterval);
      keyPressed.current = null;
    });

    //*?  ----------------CELULARES-------------------

    // IZQUIERDA
    moveLeftButtonRef.current.addEventListener(
      "touchstart",
      () => (moveLeftInterval = handleMoveLeftTouchStart(xPosition, keyPressed))
    );
    moveLeftButtonRef.current.addEventListener("touchend", () => {
      clearInterval(moveLeftInterval);
      keyPressed.current = null;
    });

    // DERECHA
    moveRightButtonRef.current.addEventListener(
      "touchstart",
      () =>
        (moveRightInterval = handleMoveRightTouchStart(xPosition, keyPressed))
    );
    moveRightButtonRef.current.addEventListener("touchend", () => {
      clearInterval(moveRightInterval);
      keyPressed.current = null;
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
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el listener al desmontar el componente
      window.removeEventListener("keydown", handleKeyPress); // Limpiar x 2

      moveLeftButtonRef.current.removeEventListener(
        "touchstart",
        handleMoveLeftTouchStart
      );
      moveLeftButtonRef.current.removeEventListener(
        "touchend",
        handleMoveLeftTouchEnd
      );
      moveRightButtonRef.current.removeEventListener(
        "touchstart",
        handleMoveRightTouchStart
      );
      moveRightButtonRef.current.removeEventListener(
        "touchend",
        handleMoveRightTouchEnd
      );

      clearInterval(moveLeftInterval);
      clearInterval(moveRightInterval);

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
