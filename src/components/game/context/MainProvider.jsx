import { useState } from "react";
import { MainContext } from "./MainContext";

export const MainProvider = ({ children }) => {
  const [bunnyFood, setFood] = useState({});
  const [bunnyLife, setbunnyLife] = useState(0);
  const [bunnyScenario, setbunnyScenario] = useState("park");
  const [keyPressed, setKeyPressed] = useState("neutro");
  const [xPosition, setXPosition] = useState(0);
  const [restart, setRestart] = useState(false);

  return (
    <MainContext.Provider
      value={{
        bunnyLife, 
        setbunnyLife,
        bunnyFood,
        setFood,
        bunnyScenario,
        setbunnyScenario,
        keyPressed,
        setKeyPressed,
        xPosition,
        setXPosition,
        restart, 
        setRestart
      }}
    >
      {children}
    </MainContext.Provider>
  );
};