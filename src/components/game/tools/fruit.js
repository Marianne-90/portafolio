import { Fruit } from "../../../classes/Fruit";
import { map, bunnySprite } from "./sprites";

import cereza from "../../../img/bunny/sprites/fruit/cereza.png";
import chile from "../../../img/bunny/sprites/fruit/chile.png";
import fresa from "../../../img/bunny/sprites/fruit/fresa.png";
import naranja from "../../../img/bunny/sprites/fruit/naranja.png";

import cerezaBad from "../../../img/bunny/sprites/fruit/cerezabad.png";
import chileBad from "../../../img/bunny/sprites/fruit/chilebad.png";
import fresaBad from "../../../img/bunny/sprites/fruit/fresabad.png";
import naranjaBad from "../../../img/bunny/sprites/fruit/naranjabad.png";

const goodFood = [
  { type: "fresa", img: fresa },
  { type: "cereza", img: cereza },
  { type: "naranja", img: naranja },
  { type: "chile", img: chile },
];

const badFood = [
  { type: "fresa", img: fresaBad },
  { type: "cereza", img: cerezaBad },
  { type: "naranja", img: naranjaBad },
  { type: "chile", img: chileBad },
];

const food = [];

export function randomFruitGenerator() {
  let selectedFood = fresa;
  let foodIsRootten = false;

  const randomNumber = Math.floor(Math.random() * 4) + 1; //*! esto es para que haya 3 veces más de posibilidad que te slaga una fruta no prodrida
  const fruitSelector = Math.floor(Math.random() * 4);

  if (randomNumber <= 3) {
    selectedFood = goodFood[fruitSelector];
  } else {
    selectedFood = badFood[fruitSelector];
    foodIsRootten = true;
  }

  let rangoInicialX = 0 - map.position.x;
  let rangoFinalX = 0 - map.position.x + 500;

  let randomPositionX =
    Math.floor(Math.random() * (rangoFinalX - rangoInicialX)) + rangoInicialX;

  let newElement = {
    class: new Fruit({
      position: {
        x: 0,
        y: 0,
      },
      impulse: -300,
      imageSrc: selectedFood.img,
      framesMax: 1,
      foodName: selectedFood.type,
      rotten: foodIsRootten,
    }),
    initialPosition: randomPositionX,
  };

  food.push(newElement);
}

export function fruitAnimation({
  c,
  canvasWidth,
  canvasHeight,
  temporalXposition,
  temporalLife,
  temporalFoodCounter,
}) {



  if (food.length > 3) {
    food.shift();
  }

  if (food.length > 0) {
    for (let i = 0; i < food.length; i++) {
      let element = food[i].class;

      if (element.isEaten === true) {
        food.splice(i, 1);
        continue;
      }
      const estaEnPantalla = () => {
        return element.position.x < canvasWidth && element.position.x > 0;
      };

      //*! la fórmula de abajo lo que calcula es cuantas pantallas se han recorrido y si el diferencial de esta es igual a la mitad de la pantalla significa que la fruta está a la mitad igual que el conejo
      //*! se le suman 5 y se le restan 5 para dar un rango de acción ya que la fruta crece de 5 en 5

      const isInTheMidle = () => {
        return (
          element.position.x % canvasWidth <=
            canvasWidth / 2 - element.image.width / 2 + 5 &&
          element.position.x % canvasWidth >=
            canvasWidth / 2 - element.image.width / 2 - 5
        );
      };

      //*! la altura de la comida debe ser el piso
      //*! si el conejo está saltando no puede comer debe estar en el piso

      if (
        estaEnPantalla() &&
        isInTheMidle() &&
        bunnySprite.impulse === 0 &&
        element.impulse === 0
      ) {
        element.isEaten = true;
        bunnySprite.eating = true;
        bunnySprite.foodType = element.foodName;

        if (!element.rotten) {
          bunnySprite.food[element.foodName]++;
          temporalFoodCounter.current.post = bunnySprite.food;
        } else if (element.rotten) {
          bunnySprite.health--;
          temporalLife.current.post = bunnySprite.health;
          bunnySprite.isSick=true;
        }
      }

      if(bunnySprite.eating){
        bunnySprite.switchSpride(element.foodName);
      }

      element.position.x =
        0 + food[i].initialPosition + temporalXposition.current;
      element.update(c, canvasHeight);
    }
  }


}
