import { useState } from "react";
import { MainContext } from "./MainContext";

export const MainProvider = ({ children }) => {

const [bunnyFood, setFood] = useState({});
const [bunnyScenario, setbunnyScenario] = useState("park");

  return (
    <MainContext.Provider
      value={{
        bunnyFood, 
        setFood,
        bunnyScenario, 
        setbunnyScenario
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
    