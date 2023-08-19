import { useContext, useEffect, useState } from "react";
import { MainContext } from "./context/MainContext";
import { MAP, BUNNY_SPRITE } from "./tools/sprites";
import { gameData } from "../../data/gameData";

export const Pops = () => {
  const {
    setbunnyScenario,
    popElement,
    setPopElement,
    restart,
    bunnyScenario,
    setXPosition,
    setKeyPressed,
  } = useContext(MainContext);

  const { house, background } = gameData;

  let homeSrc = house.general.imageSrc;
  let homeFrameSrc = house.general.framesData.imageSrc;

  let parkSrc = background.general.imageSrc;
  let parkFrameSrc = background.general.framesData.imageSrc;

  const SCENARIO_SPECIFICATIONS = {
    home: [
      () => MAP.switchBackGround(homeSrc, homeFrameSrc),
      () => (MAP.imageSrc = homeSrc),
      () => (MAP.framesData = house.general.framesData),
      () => (MAP.accionBlocks = house.general.accionBlocks),
      () => (MAP.obstacles = house.general.obstacles),
      () => (BUNNY_SPRITE.base = 38),
      () => (BUNNY_SPRITE.strengt = -4),
      () => (BUNNY_SPRITE.impulse = -300),
      () => setbunnyScenario("home"),
      () => setXPosition(370),
    ],
    park: [
      () => MAP.switchBackGround(parkSrc, parkFrameSrc),
      () => (MAP.imageSrc = parkSrc),
      () => (MAP.framesData = background.general.framesData),
      () => (MAP.accionBlocks = background.general.accionBlocks),
      () => (MAP.obstacles = background.general.obstacles),
      () => (BUNNY_SPRITE.base = 30),
      () => (BUNNY_SPRITE.strengt = -6),
      () => (BUNNY_SPRITE.impulse = -30),
      () => setbunnyScenario("park"),
      () => setXPosition(0),
    ],
    programate: [() => setKeyPressed("program")],
    read: [() => setKeyPressed("read")],
    sleep: [() => setKeyPressed("sleep")],
  };

  useEffect(() => {
    for (let i = 0; i < SCENARIO_SPECIFICATIONS[bunnyScenario].length; i++) {
      SCENARIO_SPECIFICATIONS[bunnyScenario][i]();
    }
  }, []);

  useEffect(() => {
    if (restart) {
      for (let i = 0; i < SCENARIO_SPECIFICATIONS[bunnyScenario].length; i++) {
        SCENARIO_SPECIFICATIONS[bunnyScenario][i]();
      }
    }
  }, [restart]);

  const handleAction = () => {
    let selector = popElement.name;

    for (let i = 0; i < SCENARIO_SPECIFICATIONS[selector].length; i++) {
      SCENARIO_SPECIFICATIONS[selector][i]();
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
