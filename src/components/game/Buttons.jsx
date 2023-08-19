import { useContext, useEffect, useRef } from "react";
import { BUNNY_SPRITE, MAP } from "./tools/sprites";
import { MainContext } from "./context/MainContext";

export const Buttons = () => {
  const moveLeftButtonRef = useRef(null);
  const moveRightButtonRef = useRef(null);

  const {
    setKeyPressed,
    xPosition,
    setXPosition,
    restart,
    bunnyScenario,
    blockMove,
  } = useContext(MainContext);

  let temporalXposition = useRef(0);
  let temporalScenario = useRef("");
  let temporalBlockMove = useRef({ left: false, right: false });

  useEffect(() => {
    temporalBlockMove.current = blockMove;
  }, [blockMove]);

  useEffect(() => {
    temporalScenario.current = bunnyScenario;
  }, [bunnyScenario]);

  useEffect(() => {
    if (restart) {
      temporalXposition.current = 0;
    }
  }, [restart]);

  useEffect(() => {
    temporalXposition.current = xPosition;
  }, [xPosition]);

  const handleJump = () => {
    if (BUNNY_SPRITE.impulse !== 0) return;
    setKeyPressed("jump");
  };

  const handleMoveLeftTouchStart = () => {
    if (temporalScenario.current === "park") {
      return setInterval(() => {
        if (!BUNNY_SPRITE.eating && !BUNNY_SPRITE.isDead) {
          setKeyPressed("left");
          temporalXposition.current += 5;
          setXPosition(temporalXposition.current);
        }
      }, 50);
    }

    if (temporalScenario.current === "home") {
      return setInterval(() => {
        if (
          !BUNNY_SPRITE.eating &&
          !BUNNY_SPRITE.isDead &&
          !temporalBlockMove.current.left
        ) {
          setKeyPressed("left");
          temporalXposition.current += 5;
          setXPosition(temporalXposition.current);
        }
      }, 50);
    }
  };

  const handleMoveRightTouchStart = () => {
    if (temporalScenario.current === "park") {
      return setInterval(() => {
        if (
          MAP.position.x >= 0 - 300 &&
          !BUNNY_SPRITE.eating &&
          !BUNNY_SPRITE.isDead
        ) {
          setKeyPressed("rigth");
          temporalXposition.current -= 5;
          setXPosition(temporalXposition.current);
        }
      }, 50);
    }

    if (temporalScenario.current === "home") {
      return setInterval(() => {
        if (!BUNNY_SPRITE.eating && !BUNNY_SPRITE.isDead && !temporalBlockMove.current.right) {
          setKeyPressed("rigth");
          temporalXposition.current -= 5;
          setXPosition(temporalXposition.current);
        }
      }, 50);
    }
  };

  useEffect(() => {
    temporalXposition.current = xPosition;
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
