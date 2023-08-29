import { BUNNY_SPRITE } from "./tools/sprites";
import { gameData } from "../../data/gameData";
import { useRef, useEffect, useContext, useState } from "react";
import { MainContext } from "./context/MainContext";
import { Pops } from "./Pops";

export const Indicators = ({ len }) => {
  const { controllers } = gameData;

  const [isLifeLoaded, setIsLifeLoaded] = useState(false);
  const [isBunnyDead, setIsBunnyDead] = useState(false);
  const [display, setDisplay] = useState(false);
  const [higuerScore, setHiguerScore] = useState(0);

  const {
    bunnyLife: lifeCouter,
    bunnyFood: foodCounter,
    setFood,
    setbunnyScenario,
    setRestart,
    playerScore,
    setPlayerScore,
  } = useContext(MainContext);

  let tempFoodCounter = BUNNY_SPRITE.food;

  useEffect(() => {
    setIsLifeLoaded(true);

    let timeoutId;

    if (lifeCouter <= 0 && isLifeLoaded) {
      BUNNY_SPRITE.isDead = true;

      timeoutId = setTimeout(() => {
        setDisplay(true);
      }, 3500);
      //*! regresar
      setIsBunnyDead(true);
      //*! añadimos el listado de frutas a el historial del contador
      setPlayerScore([...playerScore, foodCounter]);
    }

    return () => clearTimeout(timeoutId);
  }, [lifeCouter]);

  useEffect(() => {
    setFood(BUNNY_SPRITE.food);
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
    setbunnyScenario("park");

    setIsLifeLoaded(false);
    setIsBunnyDead(false);
    setDisplay(false);

    setRestart(true);
  };

  const handleTotal = (item) => {
    let total = 0;
    let claves = Object.keys(item);

    for (let i = 0; i < claves.length; i++) {
      let clave = claves[i];
      total += item[clave];
    }

    if (higuerScore < total) {
      setHiguerScore(total);
    }
    return total;
  };

  const CONTENT_LIST = {
    eng: ["MR. CREAMY IS DEAD T.T", "PLAY ", "HIGHEST SCORE!!", "Restart"],
    esp: [
      "SR. CREAMY A MUERTO T.T",
      "JUEGO ",
      "MEJOR PUNTUACIÓN",
      "Reiniciar",
    ],
  };

  const handleScore = (item, index) => {
    let playerScore = [];
    let claves = Object.keys(item);

    for (let i = 0; i < claves.length; i++) {
      let clave = claves[i];
      playerScore.push(
        <div key={`${clave}${index}`} className="fruit">
          <span>
            <img src={controllers.fruit[clave]} />
          </span>
          <span>{item[clave]}</span>
        </div>
      );
    }
    return playerScore;
  };

  return (
    <div className="controladores">
      <div className="comida">{bunnyFood()}</div>
      <div className="vida">
        {bunnyLife()}
        {isBunnyDead && <span>{CONTENT_LIST[len][0]}</span>}
      </div>
      <div className={display ? "panel opacity" : "panelNoDisplay"}>
        <div className="img">
          <img src={controllers.bunny} alt="bunny" />
        </div>
        <div className="playerScore">
          {playerScore.length > 0 &&
            lifeCouter <= 0 &&
            playerScore.map((item, index) => {
              let localTotal = handleTotal(item);
              return (
                <div key={index}>
                  <div className="counter">
                    <span>
                      {CONTENT_LIST[len][1]}
                      {index + 1}
                    </span>
                    {higuerScore > 0 && higuerScore === localTotal && (
                      <span>{CONTENT_LIST[len][2]}</span>
                    )}
                    <span>TOTAL: {localTotal}</span>
                  </div>
                  <div className="play">{handleScore(item, index)}</div>
                </div>
              );
            })}
        </div>
        <button onClick={handleRestart}>{CONTENT_LIST[len][3]}</button>
      </div>
      <Pops len={len} />
    </div>
  );
};
