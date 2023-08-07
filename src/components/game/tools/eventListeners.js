import { map } from "./sprites";

export const handleMoveLeftTouchStart = (xPosition, keyPressed) => {
  return setInterval(() => {
    keyPressed.current = "left";
    xPosition.current += 5;
  }, 50);
};

export const handleMoveLeftTouchEnd = (moveLeftInterval) => {
  clearInterval(moveLeftInterval);
};

export const handleMoveRightTouchStart = (xPosition, keyPressed) => {
  return setInterval(() => {
    if (map.position.x >= 0) {
      keyPressed.current = "rigth";
      xPosition.current -= 5;
    }
  }, 50);
};

export const handleMoveRightTouchEnd = (moveRightInterval) => {
  clearInterval(moveRightInterval);
};
