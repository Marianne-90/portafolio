import { Park } from "./Park";
import { House } from "./House";
import { useContext } from "react";
import { MainContext } from "./context/MainContext";



export const Scenario = () => {

    const { bunnyScenario } = useContext(MainContext);

    
    return bunnyScenario === "park"? <Park/> : <House/>;
};