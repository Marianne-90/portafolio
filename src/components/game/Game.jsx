import ReactDOM from "react-dom/client";
import { Park } from "./Park";
import { MainProvider } from "./context/MainProvider";
import { Buttons } from "./Buttons";
import { Indicators } from "./Indicators";
import { Scenario } from "./Scenario";

export const Game = () => {
  return (
    <MainProvider>
      <div className="gameContainer">
        <Indicators/>
        <Scenario />
        <Buttons/>
      </div>
    </MainProvider>
  );
};
