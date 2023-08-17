import { useContext } from "react";
import { MainContext } from "./context/MainContext";
import { MAP, BUNNY_SPRITE } from "./tools/sprites";
import { gameData } from "../../data/gameData";

export const Pops = () => {
  const { setbunnyScenario, popElement, setPopElement } =
    useContext(MainContext);

    const { house } = gameData;   

  const handleAction = () => {
    switch (popElement.name) {
      case "home":

        let newSrc = house.general.imageSrc;
        MAP.switchBackGround(newSrc);

        MAP.framesData = house.framesData;
        MAP.accionBlocks = house.accionBlocks;

        BUNNY_SPRITE.base = 40;
        setbunnyScenario("home");
        break;
      default:
        break;
    }

    setPopElement({});
  };

  if (popElement.index !== undefined) {
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
      </div>
    );
  }
};
