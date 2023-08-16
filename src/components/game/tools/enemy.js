import { map, bunnySprite } from "./sprites";
import { gameData } from "../../../data/gameData";
import { Character } from "../../../classes/Character";

const { fox } = gameData;

// const FOX_LIST = [
//   {
//     class: new Character({
//       ...fox,
//       imageSrc: fox.sprites.right.imageSrc,
//     }),
//     position: 0 - map.position.x + 300,
//     type: "left",
//     velocity: 0,
//   },
// ];

const FOX_LIST = [];

export function enemyGenerator(canvasWidth) {
  if (FOX_LIST.length >= 3) return;

  let randomVelocity = parseFloat(Math.random() * (1.5 - 1) + 1).toFixed(2);

  randomVelocity = Number(randomVelocity);

  let left = {
    img: fox.sprites.right.imageSrc,
    position: 0 - map.position.x - 400,
    type: "left",
  };

  let right = {
    img: fox.sprites.left.imageSrc,
    position: 0 - map.position.x + canvasWidth + 500,
    type: "right",
  };

  let options = [left, right];

  let randomOption = Math.round(Math.random());

  let newElement = {
    class: new Character({
      ...fox,
      imageSrc: options[randomOption].img,
      framesHold: fox.framesHold / randomVelocity,
    }),
    position: options[randomOption].position,
    type: options[randomOption].type,
    velocity: randomVelocity,
  };

  FOX_LIST.push(newElement);
  //   console.log(`se añadió zorro ${newElement.type}`);
}

export function enemyAnimation({
  c,
  canvasWidth,
  canvasHeight,
  temporalXposition,
  temporalLife,
}) {
  //   console.log();

  if (FOX_LIST.length > 0) {
    for (let i = 0; i < FOX_LIST.length; i++) {
      let element = FOX_LIST[i].class;
      let imageWidth =
        (element.image.width * element.scale) / element.framesMax;

      element.position.x = 0 + FOX_LIST[i].position + temporalXposition.current;
      element.atackBox.position.y =
        element.position.y + element.atackBox.offset.y;
      //*! x lo bajé a derecha o izquierda

      let xPositonAtackBlock = element.atackBox.position.x;
      let atackBlockWidth = element.atackBox.with;

      const isColliding = () => {
        return (
          xPositonAtackBlock < canvasWidth / 2 &&
          xPositonAtackBlock + atackBlockWidth > canvasWidth / 2
        );
      };

      const muerte = () => {
        bunnySprite.health--;
        temporalLife.current.post = bunnySprite.health;
      };

      if (FOX_LIST[i].type === "left") {
        FOX_LIST[i].position += FOX_LIST[i].velocity;
        element.atackBox.position.x =
          element.position.x +
          imageWidth +
          element.atackBox.offset.x -
          element.atackBox.with;

        //*! eliminarlo si sale de pantalla

        if (FOX_LIST[i].position > 0 - map.position.x + canvasWidth + 400) {
          FOX_LIST.splice(i, 1);
          continue;
        }
      }

      if (FOX_LIST[i].type === "right") {
        FOX_LIST[i].position -= FOX_LIST[i].velocity;
        element.atackBox.position.x =
          element.position.x - element.atackBox.offset.x;

        //*! eliminarlo si sale de pantalla

        if (FOX_LIST[i].position < 0 - map.position.x) {
          FOX_LIST.splice(i, 1);
          continue;
        }
      }

      //*! collition

      if (isColliding() && bunnySprite.impulse === 0 && !bunnySprite.isDead) {
        // console.log("golpeó");
        muerte();
      }

      element.update(c, canvasHeight);
    }
  }
}
