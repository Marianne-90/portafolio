import { gameData } from "../../data/gameData";
import { randomFramesGenerator } from "./tools/background";

export const Game = () => {
  const { background } = gameData;

//  const framesProbabilidades = []


//  for (let i = 0; i < background.frames.length; i++) {
//     let element = background.frames[i]
//     let posibility = element.frequency

//     while (posibility > 0) {
//         framesProbabilidades.push({index:i, name:element.name})
//         posibility--
//     }
//  }

//     //*! calcula un numero aleatorio entre 0 y la suma de todas las probabilidades 
//     const randomNum = Math.floor(Math.random() * framesProbabilidades.length);
//     const randomFrame = framesProbabilidades[randomNum]
//     console.log('random',randomFrame)

console.log(randomFramesGenerator())

  // En algún lugar de tu componente React o en un archivo separado
  const elementos = [];
  const probabilidades = []; // El pasto tiene un peso 9 veces mayor que la palmera

  background.frames.forEach(element => {
    elementos.push(element.name)
    probabilidades.push(element.frequency)
  });

  // En el mismo componente React o en un archivo de utilidades
  function seleccionarElementoConProbabilidades() {
    //*! esto suma todas las probabilidades
    const totalProbabilidades = probabilidades.reduce(
      (acc, curr) => acc + curr,
      0
    );
    //*! calcula un numero aleatorio entre 0 y la suma de todas las probabilidades 
    const randomNum = Math.random() * totalProbabilidades;

    let cumulativeProb = 0;

    //*! interamos por el array elementos
    for (let i = 0; i < elementos.length; i++) {
        //*! esto es para concatenar los elementos con el array de probabilidades 
      cumulativeProb += probabilidades[i];

      //*! va sumando las probabilidades y las que salga mayor al número random es la que retorna 
      if (randomNum < cumulativeProb) {
        return elementos[i];
      }
    }

    // En caso de algún fallo (esto no debería ocurrir en condiciones normales)
    return elementos[0];
  }

  // Generar los elementos con probabilidades
  const cantidadFrames = 10;
  const fondosGenerados = Array.from({ length: cantidadFrames }, seleccionarElementoConProbabilidades);

//   console.log(fondosGenerados);



  return <h2>Base</h2>;
};
