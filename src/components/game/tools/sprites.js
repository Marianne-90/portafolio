import { gameData } from "../../../data/gameData";
import { Sprite } from "../../../classes/Sprite";
import { Character } from "../../../classes/Character";

const { background, bunny } = gameData;

export const initialFrame = new Sprite(background.initialFrame);
export const bunnySprite = new Character(bunny);