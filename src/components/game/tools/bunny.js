import { bunnySprite } from "./sprites";
import { gameData } from "../../../data/gameData";

const { bunny } = gameData;

export function bunnyAnimation({
  c,
  canvasWidth,
  canvasHeight,
  keyPressed,
  pasto,
}) {
  let initialBunnyWidth =
    (bunnySprite.image.width * bunnySprite.scale) / bunnySprite.framesMax;
  let initialBunnyHeight = bunnySprite.image.height * bunnySprite.scale;

  bunnySprite.position.x = canvasWidth / 2 - initialBunnyWidth / 2;
  bunnySprite.position.y = canvasHeight - initialBunnyHeight - pasto;

  bunnySprite.switchSpride(keyPressed.current);

  bunnySprite.update(c);
}
