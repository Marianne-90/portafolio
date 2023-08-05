import { bunnySprite } from "./sprites";
import { gameData } from "../../../data/gameData";

const { bunny } = gameData;

export function bunnyAnimation({
  c,
  canvasWidth,
  canvasHeight,
  keyPressed,
}) {
  let initialBunnyWidth =
    (bunnySprite.image.width * bunnySprite.scale) / bunnySprite.framesMax;

  bunnySprite.position.x = canvasWidth / 2 - initialBunnyWidth / 2;


  bunnySprite.switchSpride(keyPressed.current);

  if(keyPressed.current === "jump"){
    bunnySprite.jump(-15);
    keyPressed.current = "neutro"
  }

  bunnySprite.update(c, canvasHeight);
}
