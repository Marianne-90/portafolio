import { MainProvider } from "./context/MainProvider";
import { useContext } from "react";
import { Buttons } from "./Buttons";
import { Indicators } from "./Indicators";
import { Scenario } from "./Scenario";
import { MainContext } from "../../context/MainContext";

export const Game = () => {
  const { data } = useContext(MainContext);

  return (
    <MainProvider>
      <div className="gameTitle">
        <h2>
          WOW <br />{" "}
          {data.language === "eng"
            ? "YOU'VE FOUND MR. CREAMY!"
            : "¡HAZ ENCONTRADO AL SR. CREAMY!"}{" "}
          <br />
        </h2>
        <p>
          {data.language === "eng"
            ? "(Try going out and exploring the park with him, just watch out for the foxes and any rotten food.)"
            : "(Intenta ir al parque a explorar, solo ten cuidado con la comida podrida y los zorros)"}
        </p>
      </div>
      <div className="gameContainer">
        <Indicators len={data.language} />
        <Scenario />
        <Buttons len={data.language} />
      </div>
    </MainProvider>
  );
};
