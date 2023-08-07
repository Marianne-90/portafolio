import { Fruit } from "../../../classes/Fruit";
import { Sprite } from "../../../classes/Sprite";
import { Character } from "../../../classes/Character";
import { gameData } from "../../../data/gameData";
import fresa from "../../../img/bunny/sprites/fruit/fresa.png"

const { background, bunny } = gameData;



const food = [new Fruit({    
    position: {
    x: 0,
    y: 0,
  },
  impulse: -300,
  imageSrc: fresa,
  framesMax: 1,
  foodName:"fresa",
}), new Fruit({    
    position: {
    x: 0,
    y: 0,
  },
  impulse: -200,
  imageSrc: fresa,
  framesMax: 1,
  foodName:"fresa",
  rotten:"false",
}),]


const positonX = [
    10, 200
]


export function randomFruitGenerator(){
    console.log('cae fruta');
}



export function fruitAnimation({
    c,
    canvasHeight,
    xPosition

  }) {

for (let i = 0; i < food.length; i++) {
    food[i].position.x = 0 + positonX[i] +  xPosition.current;
    food[i].update(c, canvasHeight);
}
  
  }