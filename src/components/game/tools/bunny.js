import { bunnySprite } from "./sprites";
import { gameData } from "../../../data/gameData";

const { bunny } = gameData;

export function bunnyAnimation({
  c,
  canvasWidth,
  canvasHeight,
  temporalKeyPress,
}) {
  let initialBunnyWidth =
    (bunnySprite.image.width * bunnySprite.scale) / bunnySprite.framesMax;

  bunnySprite.position.x = canvasWidth / 2 - initialBunnyWidth / 2;
  //*! en el archivo de frutas se asigna el sprite e comer frutas
  if (bunnySprite.eating) {
    bunnySprite.switchSpride(bunnySprite.foodType);
  }

  if (bunnySprite.isDead) {
    bunnySprite.switchSpride("dead");
  }

  if (!bunnySprite.eating && !bunnySprite.isDead) {
    if (temporalKeyPress.current === "jump") {
      bunnySprite.jump(-6);
    }

    bunnySprite.switchSpride(temporalKeyPress.current);
  }

  bunnySprite.update(c, canvasHeight);
}
