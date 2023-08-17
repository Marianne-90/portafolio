import { useContext } from "react";
import { MainContext } from "./context/MainContext";

export const Pops = () => {
  const { setbunnyScenario, popElement, setPopElement} = useContext(MainContext);

  const handleAction = () => {
    switch (popElement.name) {
      case "home":
        setbunnyScenario()
        break;
      default:
        break;
    }

    setPopElement({})
  };

  if(popElement.index !== undefined){

    return (
      <div className="pop">
        <div className="popElement">
          <p>{popElement.message}</p>
          <div className="buttons">
            <button
              onClick={() => {
                handleAction();
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </div>)
  }
  

};
