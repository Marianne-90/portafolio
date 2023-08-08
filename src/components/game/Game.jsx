import { useRef, useEffect, useState } from "react";
import { backGroundAnimation, initCanvas } from "./tools/background";
import { bunnyAnimation } from "./tools/bunny";
import { fruitAnimation, randomFruitGenerator } from "./tools/fruit";
import {
  handleMoveLeftTouchStart,
  handleMoveRightTouchStart,
} from "./tools/eventListeners";
import { bunnySprite } from "./tools/sprites";
import { gameData } from "../../data/gameData";

export const Game = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const moveLeftButtonRef = useRef(null);
  const moveRightButtonRef = useRef(null);
  const jumpButtonRef = useRef(null);

  let canvasWidth = 0;
  let canvasHeight = 0;
  let xPosition = useRef(0);
  let keyPressed = useRef("neutro");
  let animationId;

  const { controllers } = gameData;

  const handleJump = () => {
    if (bunnySprite.impulse !== 0) return;
    keyPressed.current = "jump";
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
        bunnyAnimation({ c, canvasWidth, canvasHeight, keyPressed });
        fruitAnimation({ c, canvasWidth, canvasHeight, xPosition });
      }

      animate();
    }

    //*? GENERADOR DE FRUTAS ALEATORIAS


    const fruitTimer = setInterval(() => {
      randomFruitGenerator();
    }, Math.floor(Math.random() * 7000) + 5000);

    //*? -------- MOVIMIENTOS ---------
    //*! EL SET INTERVAL SE QUEDA AQUÍ PORQUE SI LO PASAS COMO FUNCIÓN NO SE ANEXA BIEN EL ID Y SE HACE UN DESASTRE

    let moveLeftInterval;
    let moveRightInterval;

    //*?  ----------------COMPUTADORAS-------------------

    //*! LOS EVENT LISTENERS NO LIMPIAN FUNCIONES ANÓNIMAS ES POR ELLO QUE EXTRAJE LA FUNCIÓN

    function eventMoveLeftInterval() {
      clearInterval(moveLeftInterval);
      clearInterval(eventMoveLeftInterval);
      clearInterval(moveRightInterval);
      clearInterval(eventMoveRigthInterval);
      moveLeftInterval = handleMoveLeftTouchStart(xPosition, keyPressed);
    }

    function eventMoveRigthInterval() {
      clearInterval(moveLeftInterval);
      clearInterval(eventMoveLeftInterval);
      clearInterval(moveRightInterval);
      clearInterval(eventMoveRigthInterval);
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

    //*? Limpiar cuando salta si no se hace un bug donde nunca para de correr

    const jumpCleaner = () => {
      clearInterval(moveLeftInterval);
      clearInterval(eventMoveLeftInterval);
      clearInterval(moveRightInterval);
      clearInterval(eventMoveRigthInterval);
    };

    jumpButtonRef.current.addEventListener("click", jumpCleaner);

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

      clearInterval(fruitTimer);

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

      jumpButtonRef.current.removeEventListener("click", jumpCleaner);

      //LIMPIAR ANIMACIÓN

      cancelAnimationFrame(animationId); //*? para que no le de epilepcia al conejo al montarse muchas veces el useEffect
    };
  }, []);

  //*! como regresan jsx no puedo pasarlos a tool podría hacer otro componente pero no estorban mucho

  const bunnyLife = () => {
    const health = bunnySprite.health;
    const bunnyLifes = [];

    for (let i = 0; i < health; i++) {
      bunnyLifes.push(<img key={i} src={controllers.bunny} />);
    }
    return bunnyLifes;
  };

  const bunnyFood = () => {
    const food = bunnySprite.food;
    const bunnyfood = [];

    for (const key in food) {
      if (food.hasOwnProperty.call(food, key)) {
        const amount = food[key];
        const element = key;
        bunnyfood.push(
          <div key={key} className="element">
            <img src={controllers.fruit[element]} />
            <span>{amount}</span>
          </div>
        );
      }
    }

    return bunnyfood;
  };
  return (
    <div className="gameContainer">
      <div className="controladores">
        <div className="comida">{bunnyFood()}</div>
        <div className="vida">{bunnyLife()}</div>
      </div>
      <div ref={containerRef} className="bunnyGame">
        <canvas ref={canvasRef}> </canvas>
      </div>
      <div className="leftRight">
        <button ref={moveLeftButtonRef}>Izquierda</button>
        <button ref={moveRightButtonRef}>Derecha</button>
      </div>
      <button onClick={handleJump} ref={jumpButtonRef}>
        Saltar
      </button>
    </div>
  );
};
