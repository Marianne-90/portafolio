import { gameData } from "../../../data/gameData";
import { Character } from "../../../classes/Character";
import { Map } from "../../../classes/Map";

const { background, bunny, house } = gameData;

let newBackgroundSprite = {...background.general}


export const MAP = new Map(newBackgroundSprite);
export const BUNNY_SPRITE = new Character(bunny);