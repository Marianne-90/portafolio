import { BUNNY_SPRITE } from "./sprites";
import { gameData } from "../../../data/gameData";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";

const { bunny } = gameData;

export function bunnyAnimation({
  c,
  canvasWidth,
  canvasHeight,
  temporalKeyPress,
  temporalBlockMove,
}) {
  let initialBunnyWidth =
    (BUNNY_SPRITE.image.width * BUNNY_SPRITE.scale) / BUNNY_SPRITE.framesMax;

  BUNNY_SPRITE.position.x = canvasWidth / 2 - initialBunnyWidth / 2;
  //*! en el archivo de frutas se asigna el sprite e comer frutas
  if (BUNNY_SPRITE.eating) {
    BUNNY_SPRITE.switchSpride(BUNNY_SPRITE.foodType);
  }

  function isSomethingMoving() {
    return (
      !temporalBlockMove.current.post.left ||
      !temporalBlockMove.current.post.right
    );
  }

  // console.log(isComethingMoving());

  //  BUNNY_SPRITE.blockMove
  if (BUNNY_SPRITE.blockMove && isSomethingMoving()) {
    temporalBlockMove.current.post = {
      left: true,
      right: true,
    };
  } else if (!BUNNY_SPRITE.blockMove && !isSomethingMoving()) {
    temporalBlockMove.current.post = {
      left: false,
      right: false,
    };
  }

  if (BUNNY_SPRITE.isDead) {
    BUNNY_SPRITE.switchSpride("dead");
  }

  if (!BUNNY_SPRITE.eating && !BUNNY_SPRITE.isDead) {
    if (temporalKeyPress.current === "jump") {
      BUNNY_SPRITE.jump();
    }

    BUNNY_SPRITE.switchSpride(temporalKeyPress.current);
  }

  BUNNY_SPRITE.update(c, canvasHeight);

  if (
    temporalKeyPress.current === "program" ||
    temporalKeyPress.current === "read" ||
    temporalKeyPress.current === "sleep"
  ) {
    temporalKeyPress.current = "neutro";
  }
}

export function bunnyRestart() {
  BUNNY_SPRITE.isDead = false;
  BUNNY_SPRITE.switchSpride("neutro");
  BUNNY_SPRITE.food = {
    fresa: 0,
    cereza: 0,
    naranja: 0,
    chile: 0,
  };
  BUNNY_SPRITE.eating = false;
  BUNNY_SPRITE.health = 3;
}
