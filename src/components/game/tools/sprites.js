import { gameData } from "../../../data/gameData";
import { Sprite } from "../../../classes/Sprite";
import { Character } from "../../../classes/Character";
import { Map } from "../../../classes/Map";

const { background, bunny } = gameData;

export const map = new Map(background.general);
export const bunnySprite = new Character(bunny);