import { bunnySprite } from "./sprites";

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

  switch (keyPressed) {
    case null:
      bunnySprite.framesHold = 30;
      break;
    case 'left':
      bunnySprite.framesHold = 30;
      break;
    case 'right':
      bunnySprite.framesHold = 30;
      break;

    default:
      break;
  }

  bunnySprite.update(c);
}
