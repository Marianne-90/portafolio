import { useContext, useEffect, useRef } from "react";
import { bunnySprite, map } from "./tools/sprites";
import { MainContext } from "./context/MainContext";

export const Buttons = () => {
  const moveLeftButtonRef = useRef(null);
  const moveRightButtonRef = useRef(null);
  const jumpButtonRef = useRef(null);

  const { setKeyPressed, xPosition, setXPosition } = useContext(MainContext);

  let temporalXposition = 0;

  const handleJump = () => {
    if (bunnySprite.impulse !== 0) return;
    setKeyPressed("jump");
  };

  const handleMoveLeftTouchStart = () => {
    return setInterval(() => {
      setKeyPressed("left");
      temporalXposition += 5;
      setXPosition(temporalXposition);
    }, 50);
  };

  const handleMoveRightTouchStart = () => {
    return setInterval(() => {
      if (map.position.x >= 0) {
        setKeyPressed("rigth");
        temporalXposition -= 5;
        setXPosition(temporalXposition);
      }
    }, 50);
  };

  useEffect(() => {
    temporalXposition = xPosition;
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
      moveLeftInterval = handleMoveLeftTouchStart();
    }

    function eventMoveRigthInterval() {
      clearInterval(moveLeftInterval);
      clearInterval(eventMoveLeftInterval);
      clearInterval(moveRightInterval);
      clearInterval(eventMoveRigthInterval);
      moveRightInterval = handleMoveRightTouchStart();
    }

    // PC IZQUIERDA
    moveLeftButtonRef.current.addEventListener(
      "mousedown",
      eventMoveLeftInterval
    );
    moveLeftButtonRef.current.addEventListener("mouseup", () => {
      clearInterval(moveLeftInterval);
      clearInterval(eventMoveLeftInterval); //*! si no se queda moviendo para siempre
      setKeyPressed("neutro");
    });

    // PC DERECHA
    moveRightButtonRef.current.addEventListener(
      "mousedown",
      eventMoveRigthInterval
    );

    moveRightButtonRef.current.addEventListener("mouseup", () => {
      clearInterval(moveRightInterval);
      clearInterval(eventMoveRigthInterval);
      setKeyPressed("neutro");
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
      setKeyPressed("neutro");
    });

    // DERECHA
    moveRightButtonRef.current.addEventListener(
      "touchstart",
      eventMoveRigthInterval
    );
    moveRightButtonRef.current.addEventListener("touchend", () => {
      clearInterval(moveRightInterval);
      clearInterval(eventMoveRigthInterval);
      setKeyPressed("neutro");
    });

    //*? Limpiar cuando salta si no se hace un bug donde nunca para de correr

    const jumpCleaner = () => {
      clearInterval(moveLeftInterval);
      clearInterval(eventMoveLeftInterval);
      clearInterval(moveRightInterval);
      clearInterval(eventMoveRigthInterval);
    };

    jumpButtonRef.current.addEventListener("click", jumpCleaner);

    return () => {
      if (moveLeftButtonRef.current) {
        moveLeftButtonRef.current.removeEventListener(
          "mousedown",
          eventMoveLeftInterval
        );
        moveLeftButtonRef.current.removeEventListener(
          "touchstart",
          eventMoveLeftInterval
        );
      }

      if (moveRightButtonRef.current) {
        moveRightButtonRef.current.removeEventListener(
          "touchstart",
          eventMoveRigthInterval
        );
        moveRightButtonRef.current.removeEventListener(
          "mousedown",
          eventMoveRigthInterval
        );
      }

      if (jumpButtonRef.current) {
        jumpButtonRef.current.removeEventListener("click", jumpCleaner);
      }
    };
  }, []);

  return (
    <>
      <div className="leftRight">
        <button ref={moveLeftButtonRef}>Izquierda</button>
        <button ref={moveRightButtonRef}>Derecha</button>
      </div>
      <button onClick={handleJump} ref={jumpButtonRef}>
        Saltar
      </button>
    </>
  );
};
