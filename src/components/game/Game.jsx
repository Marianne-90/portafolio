import { MainProvider } from "./context/MainProvider";
import { Buttons } from "./Buttons";
import { Indicators } from "./Indicators";
import { Scenario } from "./Scenario";

export const Game = () => {
  return (
    <MainProvider>
      <div className="gameTitle">
        <h2>
          WOW <br /> YOU'VE FOUND MR. CREAMY! <br />
        </h2>
        <p>
          (Try going out and exploring the park with him, just watch out for the
          foxes and any rotten food.)
        </p>
      </div>
      <div className="gameContainer">
        <Indicators />
        <Scenario />
        <Buttons />
      </div>
    </MainProvider>
  );
};
