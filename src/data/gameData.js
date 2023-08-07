import background from "../img/bunny/sprites/background/backGround.png";
import initialFrame from "../img/bunny/sprites/background/mainFrame.png";
import neutro from "../img/bunny/sprites/bunny/neutro.png";
import caer from "../img/bunny/sprites/bunny/caer.png";
import derecha from "../img/bunny/sprites/bunny/derecha.png";
import izquierda from "../img/bunny/sprites/bunny/izquierda.png";
import salto from "../img/bunny/sprites/bunny/salto.png";
import durmiendo from "../img/bunny/sprites/bunny/durmiendo.png";

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
      framesData:{
        imageSrc: background,
        framesTotal:0, //*! hasta abajo se le asigna el valor de frames
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
    sprites: {
      fall: {
        imageSrc: caer,
        framesMax: 5,
        framesHold: 4,
      },
      rigth: {
        imageSrc: derecha,
        framesMax: 6,
        framesHold: 5,
      },
      left: {
        imageSrc: izquierda,
        framesMax: 6,
        framesHold: 5,
      },
      sleep: {
        imageSrc: durmiendo,
        framesMax: 2,
        framesHold: 30,
      },
      neutro: {
        imageSrc: neutro,
        framesMax: 12,
        framesHold: 30,
      },
      jump: {
        imageSrc: salto,
        framesMax: 4,
        framesHold: 5,
      },
    },
  },
};


gameData.background.general.framesData.framesTotal = gameData.background.frames.length