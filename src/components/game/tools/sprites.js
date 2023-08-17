import { gameData } from "../../../data/gameData";
import { Sprite } from "../../../classes/Sprite";
import { Character } from "../../../classes/Character";
import { Map } from "../../../classes/Map";

const { background, bunny } = gameData;

let newBackgroundSprite = {...background.general}


export const map = new Map(newBackgroundSprite);
export const bunnySprite = new Character(bunny);
export const HOUSE_SPRITE = new Map(...house.general)