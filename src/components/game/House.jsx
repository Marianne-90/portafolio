import { useContext } from "react";
import { MainContext } from "./context/MainContext";

export const House = () => {
  const { setbunnyScenario } =
    useContext(MainContext);
  return (
    <div className="house">
      <h2>House</h2>
      <button onClick={()=>{setbunnyScenario("park")}}>park</button>
    </div>
  );
};
