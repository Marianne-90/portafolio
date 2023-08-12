import { useContext, useEffect, useRef } from "react";
import { bunnySprite, map } from "./tools/sprites";
import { MainContext } from "./context/MainContext";

export const Buttons = () => {
  const moveLeftButtonRef = useRef(null);
  const moveRightButtonRef = useRef(null);

  const { setKeyPressed, xPosition, setXPosition, restart } =
    useContext(MainContext);

  let temporalXposition = 0;

  const handleJump = () => {
    if (bunnySprite.impulse !== 0) return;
    setKeyPressed("jump");
  };

  const handleMoveLeftTouchStart = () => {
    return setInterval(() => {
      if (!bunnySprite.eating && !bunnySprite.isDead) {
        setKeyPressed("left");
        temporalXposition += 5;
        setXPosition(temporalXposition);
      }
    }, 50);
  };

  const handleMoveRightTouchStart = () => {
    return setInterval(() => {
      if (map.position.x >= 0 && !bunnySprite.eating && !bunnySprite.isDead) {
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
      moveLeftInterval = handleMoveLeftTouchStart();
    }

    function eventMoveRigthInterval() {
      moveRightInterval = handleMoveRightTouchStart();
    }

    function eventCleanLeft() {
      clearInterval(moveLeftInterval);
      clearInterval(eventMoveLeftInterval); //*! si no se queda moviendo para siempre
      setKeyPressed("neutro");
    }

    function eventCleanRight() {
      clearInterval(moveRightInterval);
      clearInterval(eventMoveRigthInterval);
      setKeyPressed("neutro");
    }

    // PC IZQUIERDA
    moveLeftButtonRef.current.addEventListener(
      "mousedown",
      eventMoveLeftInterval
    );
    moveLeftButtonRef.current.addEventListener("mouseup", eventCleanLeft);
    moveLeftButtonRef.current.addEventListener("mouseout", eventCleanLeft);

    // PC DERECHA
    moveRightButtonRef.current.addEventListener(
      "mousedown",
      eventMoveRigthInterval
    );

    moveRightButtonRef.current.addEventListener("mouseup", eventCleanRight);

    moveRightButtonRef.current.addEventListener("mouseout", eventCleanRight);

    //*?  ----------------CELULARES-------------------

    // IZQUIERDA
    moveLeftButtonRef.current.addEventListener(
      "touchstart",
      eventMoveLeftInterval
    );
    moveLeftButtonRef.current.addEventListener("touchend", eventCleanLeft);

    // DERECHA
    moveRightButtonRef.current.addEventListener(
      "touchstart",
      eventMoveRigthInterval
    );
    moveRightButtonRef.current.addEventListener("touchend", eventCleanRight);

    return () => {
      if (moveLeftButtonRef.current) {
        moveLeftButtonRef.current.removeEventListener(
          "mousedown",
          eventMoveLeftInterval
        );

        moveLeftButtonRef.current.removeEventListener(
          "mouseup",
          eventCleanLeft
        );
        moveLeftButtonRef.current.removeEventListener(
          "mouseout",
          eventCleanLeft
        );

        moveLeftButtonRef.current.removeEventListener(
          "touchstart",
          eventMoveLeftInterval
        );

        moveLeftButtonRef.current.addEventListener("touchend", eventCleanLeft);
      }

      if (moveRightButtonRef.current) {
        moveRightButtonRef.current.removeEventListener(
          "touchstart",
          eventMoveRigthInterval
        );

        moveRightButtonRef.current.removeEventListener(
          "touchend",
          eventCleanRight
        );

        moveRightButtonRef.current.removeEventListener(
          "mousedown",
          eventMoveRigthInterval
        );

        moveRightButtonRef.current.removeEventListener(
          "mouseup",
          eventCleanRight
        );

        moveRightButtonRef.current.removeEventListener(
          "mouseout",
          eventCleanRight
        );
      }
    };
  }, []);

  return (
    <>
      <div className="leftRight">
        <button ref={moveLeftButtonRef}>Izquierda</button>
        <button ref={moveRightButtonRef}>Derecha</button>
      </div>
      <button onClick={handleJump}>Saltar</button>
    </>
  );
};
