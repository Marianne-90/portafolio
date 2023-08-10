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


  bunnySprite.switchSpride(temporalKeyPress.current);

  if(temporalKeyPress.current === "jump"){
    bunnySprite.jump(-6);
  }

  bunnySprite.update(c, canvasHeight);
}


