// eventListeners.js

export const handleMoveLeftTouchStart = (xPosition, keyPressed) => {
    return setInterval(() => {
      keyPressed.current = "left";
      xPosition.current += 5;
    }, 70);
  };
  
  export const handleMoveLeftTouchEnd = (moveLeftInterval) => {
    clearInterval(moveLeftInterval);
  };
  
  export const handleMoveRightTouchStart = (xPosition, keyPressed) => {
    return setInterval(() => {
      keyPressed.current = "rigth";
      xPosition.current -= 5;
    }, 70);
  };
  
  export const handleMoveRightTouchEnd = (moveRightInterval) => {
    clearInterval(moveRightInterval);
  };
  