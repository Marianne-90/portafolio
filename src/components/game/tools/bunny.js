export function backBunnyAnimation({ c, canvasWidth, xPosition }) {
    let initialFrameWidth = initialFrame.image.width * initialFrame.scale;
    initialFrame.position.x = canvasWidth/2 - initialFrameWidth/2 + xPosition;
    initialFrame.update(c);
  }