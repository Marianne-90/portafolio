import { bunnySprite } from "./tools/sprites";
import { gameData } from "../../data/gameData";
import { useRef, useEffect, useContext, useState } from "react";
import { MainContext } from "./context/MainContext";

export const Indicators = () => {
  const { controllers } = gameData;
  const {
    bunnyLife: lifeCouter,
    bunnyFood: foodCounter,
    setFood,
  } = useContext(MainContext);

  const [isLifeLoaded, setIsLifeLoaded] = useState(false);
  const [isBunnyDead, setIsBunnyDead] = useState(false);
  const [display, setDisplay] = useState();

  let tempFoodCounter = bunnySprite.food;

  useEffect(() => {
    setIsLifeLoaded(true);

    let timeoutId;

    if (lifeCouter <= 0 && isLifeLoaded) {

      bunnySprite.isDead = true;

      timeoutId = setTimeout(() => {
        setDisplay(true);
      }, 2000); 

      setIsBunnyDead(true);

    }

    return () => clearTimeout(timeoutId);

  }, [lifeCouter]);

  useEffect(() => {
    setFood(bunnySprite.food);
    tempFoodCounter = foodCounter;
  }, [foodCounter]);

  const bunnyLife = () => {
    const health = lifeCouter;
    const bunnyLifes = [];

    for (let i = 0; i < health; i++) {
      bunnyLifes.push(<img key={i} src={controllers.bunny} />);
    }
    return bunnyLifes;
  };

  const bunnyFood = () => {
    const food = tempFoodCounter;
    const bunnyfood = [];

    for (const key in food) {
      if (food.hasOwnProperty.call(food, key)) {
        const amount = food[key];
        const element = key;
        bunnyfood.push(
          <div key={key} className="element">
            <img src={controllers.fruit[element]} />
            <span>{amount}</span>
          </div>
        );
      }
    }

    return bunnyfood;
  };

  const handleRestart = () => {
    console.log('handleRestart');
  };

  return (
    <div className="controladores">
      <div className="comida">{bunnyFood()}</div>
      <div className="vida">
        {bunnyLife()}
        {
          isBunnyDead && <span>MR. CREAMY IS DEAD T.T</span>
        }
      </div>
      <div className={display?"panel":"panelNoDisplay"}>
        <div className="img">
          <img src={controllers.bunny} alt="bunny" />
        </div>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
};
