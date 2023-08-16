import { map, bunnySprite } from "./sprites";
import { gameData } from "../../../data/gameData";
import { Character } from "../../../classes/Character";

const { fox } = gameData;

// let foxList = [{
//     class: new Character({
//       ...fox,
//       imageSrc: fox.sprites.left.imageSrc,
//     }),
//     position:  0 - map.position.x + 700,
//     type: "right",
//     velocity: 0,
//   }];

let foxList = [];

export function enemyGenerator(canvasWidth) {
  if (foxList.length >= 3) return;

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
      framesHold : fox.framesHold/randomVelocity
    }),
    position: options[randomOption].position,
    type: options[randomOption].type,
    velocity: randomVelocity,
  };

  foxList.push(newElement);
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

  if (foxList.length > 0) {
    for (let i = 0; i < foxList.length; i++) {
      let element = foxList[i].class;
      let imageWidth =
        (element.image.width * element.scale) / element.framesMax;

      element.position.x = 0 + foxList[i].position + temporalXposition.current;

      const estaEnPantalla = () => {
        return element.position.x < canvasWidth && element.position.x > 0;
      };

      const isHittingLeft = () => {
        return (
          element.position.x % canvasWidth <=
            canvasWidth / 2 - imageWidth + 10 &&
          element.position.x % canvasWidth >= canvasWidth / 2 - imageWidth - 50
        );
      };

      const isHittingRight = () => {
        return (
          element.position.x % canvasWidth <= canvasWidth / 2 + 50 &&
          element.position.x % canvasWidth >= canvasWidth / 2 - 10
        );
      };

      const muerte = () => {
        bunnySprite.health--;
        temporalLife.current.post = bunnySprite.health;
      };

      if (foxList[i].type === "left") {
        foxList[i].position += foxList[i].velocity;

        //*! collition

        if (
          estaEnPantalla() &&
          isHittingLeft() &&
          bunnySprite.impulse === 0 &&
          !bunnySprite.isDead
        ) {
          muerte();
        }

        //*! eliminarlo

        if (foxList[i].position > 0 - map.position.x + canvasWidth + 400) {
        //   console.log("eliminar derecha");

          foxList.splice(i, 1);
          continue;
        }

        //*! veamos su el zorro roza con su nariz el centro
      }

      if (foxList[i].type === "right") {
        foxList[i].position -= foxList[i].velocity;

        //*! collition

        if (
          estaEnPantalla() &&
          isHittingRight() &&
          bunnySprite.impulse === 0 &&
          !bunnySprite.isDead
        ) {
          muerte();
        }

        //*! eliminarlo

        if (foxList[i].position < 0 - map.position.x) {
        //   console.log("eliminar izquierda");

          foxList.splice(i, 1);
          continue;
        }
      }

      element.update(c, canvasHeight);
    }
  }
}
