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
    imageSrc: background,
    initialFrame: {
      position: {
        x: 0,
        y: 0,
      },
      impulse: 0,
      imageSrc: initialFrame,
      scale: 1,
      framesMax: 1,
    },
    frames: [
      {
        name: "flor-naranja",
        frequency: 1,
      },
      {
        name: "estatua",
        frequency: 1,
      },
      {
        name: "pasto",
        frequency: 10,
      },
      {
        name: "pasto-flor-azul",
        frequency: 1,
      },
      {
        name: "nopal",
        frequency: 1,
      },
      {
        name: "pasto",
        frequency: 1,
      },
      {
        name: "arbusto",
        frequency: 1,
      },
      {
        name: "piedra-lobo",
        frequency: 1,
      },
      {
        name: "pasto-flor-azul",
        frequency: 10,
      },
      {
        name: "tronco",
        frequency: 1,
      },
      {
        name: "pasto-flor-morada",
        frequency: 10,
      },
      {
        name: "poste",
        frequency: 1,
      },
      {
        name: "palmera",
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
        name: "hongos",
        frequency: 1,
      },
      {
        name: "fuente",
        frequency: 1,
      },
      {
        name: " piedras",
        frequency: 1,
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
        framesHold: 30,
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
