import background from "../img/bunny/sprites/background/backGround.png";
import initialFrame from "../img/bunny/sprites/background/mainFrame.png";

import neutro from "../img/bunny/sprites/bunny/neutro.png";
import caer from "../img/bunny/sprites/bunny/caer.png";
import derecha from "../img/bunny/sprites/bunny/derecha.png";
import izquierda from "../img/bunny/sprites/bunny/izquierda.png";
import salto from "../img/bunny/sprites/bunny/salto.png";
import durmiendo from "../img/bunny/sprites/bunny/durmiendo.png";
import bunnyCereza from "../img/bunny/sprites/bunny/bunnyCereza.png";
import bunnyChile from "../img/bunny/sprites/bunny/bunnyChile.png";
import bunnyFresa from "../img/bunny/sprites/bunny/bunnyFresa.png";
import bunnyNaranja from "../img/bunny/sprites/bunny/bunnyNaranja.png";
import vomitando from "../img/bunny/sprites/bunny/vomitando.png";
import dead from "../img/bunny/sprites/bunny/muerto.png";
import ghost from "../img/bunny/sprites/bunny/fantasma.png";

import cerezagris from "../img/bunny/sprites/controllers/cerezagris.png";

import chilegris from "../img/bunny/sprites/controllers/chilegris.png";
import fresagris from "../img/bunny/sprites/controllers/fresagris.png";
import naranjagris from "../img/bunny/sprites/controllers/naranjagris.png";
import conejogris from "../img/bunny/sprites/controllers/conejogris.png";

import foxLeft from "../img/bunny/sprites/fox/left.png";
import foxRight from "../img/bunny/sprites/fox/right.png";

export const gameData = {
  background: {
    general: {
      position: {
        x: 0,
        y: 0,
      },
      imageSrc: initialFrame,
      scale: 1,
      framesMax: 1,
      framesData: {
        imageSrc: background,
        framesTotal: 0, //*! hasta abajo se le asigna el valor de frames
      },
    },
    frames: [
      {
        name: "paloYArbusto",
        frequency: 5,
      },
      {
        name: "paloYArbolito",
        frequency: 5,
      },
      {
        name: "arbolCircular",
        frequency: 5,
      },
      {
        name: "nopal",
        frequency: 1,
      },
      {
        name: "dosPinosConBellotas",
        frequency: 5,
      },
      {
        name: "tresPinosConBellotas",
        frequency: 5,
      },
      {
        name: "arbusto",
        frequency: 5,
      },
      {
        name: "arbustoFlorRoja",
        frequency: 5,
      },
      {
        name: "pinoTricolor",
        frequency: 5,
      },
      {
        name: "pinoTricolorConArbolito",
        frequency: 5,
      },
      {
        name: "dosPinos",
        frequency: 5,
      },
      {
        name: "tresPinos",
        frequency: 5,
      },
      {
        name: "tresArbolesBoludos",
        frequency: 5,
      },
      {
        name: "tresArbolesBoludosVolteados",
        frequency: 5,
      },
      {
        name: "tresArbolesBoludosConArbolito",
        frequency: 5,
      },
      {
        name: "pinito",
        frequency: 5,
      },
      {
        name: "pinitoYArbolBolas",
        frequency: 5,
      },
      {
        name: "palmera",
        frequency: 1,
      },
      {
        name: "tronco",
        frequency: 1,
      },
      {
        name: "hongos",
        frequency: 1,
      },
      {
        name: "flor",
        frequency: 1,
      },
      {
        name: "columna",
        frequency: 1,
      },
      {
        name: "piedraLobo",
        frequency: 1,
      },
      {
        name: "pastoFlorAzul",
        frequency: 5,
      },
      {
        name: "pasto",
        frequency: 5,
      },
      {
        name: "pastoFlorAzulnubes",
        frequency: 5,
      },
      {
        name: "pastoNubes",
        frequency: 5,
      },
      {
        name: "pastoFlorRojaNubes",
        frequency: 5,
      },
      {
        name: "pastoFlorRojas",
        frequency: 5,
      },
      {
        name: "poste",
        frequency: 1,
      },
      {
        name: "arcoiris",
        frequency: 1,
      },
      {
        name: "oso",
        frequency: 1,
      },
      {
        name: "castillo",
        frequency: 1,
      },
      {
        name: "fuente",
        frequency: 1,
      },
      {
        name: "piedras",
        frequency: 2,
      },
    ],
  },
  bunny: {
    position: {
      x: 0,
      y: 0,
    },
    impulse: 0,
    imageSrc: neutro,
    scale: 0.33,
    framesMax: 12,
    animate: true,
    food: {
      fresa: 0,
      cereza: 0,
      naranja: 0,
      chile: 0,
    },
    sprites: {
      fall: {
        imageSrc: caer,
        framesMax: 5,
        framesHold: 4,
        name: "fall",
      },
      rigth: {
        imageSrc: derecha,
        framesMax: 6,
        framesHold: 5,
        name: "rigth",
      },
      left: {
        imageSrc: izquierda,
        framesMax: 6,
        framesHold: 5,
        name: "left",
      },
      sleep: {
        imageSrc: durmiendo,
        framesMax: 2,
        framesHold: 30,
        name: "sleep",
      },
      neutro: {
        imageSrc: neutro,
        framesMax: 12,
        framesHold: 30,
        name: "neutro",
      },
      jump: {
        imageSrc: salto,
        framesMax: 4,
        framesHold: 5,
        name: "jump",
      },
      cereza: {
        imageSrc: bunnyCereza,
        framesMax: 4,
        framesHold: 30,
        name: "cereza",
      },
      chile: {
        imageSrc: bunnyChile,
        framesMax: 4,
        framesHold: 30,
        name: "chile",
      },
      fresa: {
        imageSrc: bunnyFresa,
        framesMax: 4,
        framesHold: 30,
        name: "fresa",
      },
      naranja: {
        imageSrc: bunnyNaranja,
        framesMax: 4,
        framesHold: 30,
        name: "naranja",
      },
      vomit: {
        imageSrc: vomitando,
        framesMax: 5,
        framesHold: 30,
        name: "vomit",
      },
      dead: {
        imageSrc: dead,
        framesMax: 4,
        framesHold: 10,
        name: "dead",
      },
      ghost: {
        imageSrc: ghost,
        framesMax: 4,
        framesHold: 30,
        name: "ghost",
      },
    },
  },
  controllers: {
    fruit: {
      cereza: cerezagris,
      chile: chilegris,
      fresa: fresagris,
      naranja: naranjagris,
    },
    bunny: conejogris,
  },
  fox: {
    position: {
      x: 0,
      y: 0,
    },
    impulse: 0,
    imageSrc: foxLeft,
    scale: 0.33,
    framesMax: 6,
    animate: true,
    sprites: {
      left: {
        imageSrc: foxLeft,
        framesMax: 6,
        framesHold: 10,
        name: "left",
      },
      right: {
        imageSrc: foxRight,
        framesMax: 6,
        framesHold: 10,
        name: "right",
      },
    },
  },
};

gameData.background.general.framesData.framesTotal =
  gameData.background.frames.length;
