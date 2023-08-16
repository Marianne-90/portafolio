import { useRef, useEffect, useContext } from "react";
import {
  backGroundAnimation,
  initCanvas,
  backGroundRestart,
} from "./tools/background";
import { bunnyAnimation, bunnyRestart } from "./tools/bunny";
import { fruitAnimation, randomFruitGenerator } from "./tools/fruit";
import { enemyAnimation, enemyGenerator } from "./tools/enemy";
import { MainContext } from "./context/MainContext";
import { bunnySprite } from "./tools/sprites";
import { gameData } from "../../data/gameData";

export const Park = () => {
  const { bunny } = gameData;

  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  let canvasWidth = 0;
  let canvasHeight = 0;
  let animationId;

  const {
    keyPressed,
    xPosition,
    setXPosition,
    setKeyPressed,
    setbunnyLife,
    setFood,
    restart,
    setRestart,
  } = useContext(MainContext);

  let temporalXposition = useRef(0);
  let temporalKeyPress = useRef("");
  let temporalLife = useRef({
    prev: 0,
    post: 0,
  });
  let temporalFoodCounter = useRef({ prev: {}, post: {} });
  let temporalRestart = useRef(false);

  useEffect(() => {
    temporalRestart.current = restart;
  }, [restart]);

  useEffect(() => {
   
    temporalXposition.current = xPosition;
  }, [xPosition]);

  useEffect(() => {
    temporalKeyPress.current = keyPressed;
  }, [keyPressed]);

  useEffect(() => {
    canvasWidth = containerRef.current.offsetWidth;
    canvasHeight = containerRef.current.offsetHeight;

    let speeder = 0; //*! esto es para que cada vez aparezcan más zorros

    temporalLife.current = {
      prev: bunnySprite.health,
      post: bunnySprite.health,
    };
    temporalFoodCounter.current.prev = {
      prev: bunnySprite.food,
      post: bunnySprite.food,
    };
    setbunnyLife(bunnySprite.health);

    //SE INICIA EL CANVAS
    const c = initCanvas(canvasWidth, canvasHeight, canvasRef);

    //ANIMAR TODO
    if (c) {
      const canvas = canvasRef.current;

      function animate() {
        
        animationId = requestAnimationFrame(animate);
        if (temporalKeyPress.current === "jump") {
          setKeyPressed("neutro");
        }

        c.fillRect(0, 0, canvasWidth, canvas.height);
        backGroundAnimation({ c, canvasWidth, temporalXposition });
        bunnyAnimation({ c, canvasWidth, canvasHeight, temporalKeyPress });
        fruitAnimation({
          c,
          canvasWidth,
          canvasHeight,
          temporalXposition,
          temporalLife,
          temporalFoodCounter,
        });
        enemyAnimation({
          c,
          canvasWidth,
          canvasHeight,
          temporalXposition,
          temporalLife,
        });

        //*! vamos a reiniciar el juego

        if (temporalRestart.current) {
          bunnyRestart();
          backGroundRestart(canvasWidth);

          speeder = 0;
          temporalXposition.current = 0;
          temporalKeyPress.current = "neutro";
          temporalLife.current = {
            prev: 0,
            post: 3,
          };
          temporalFoodCounter.current = {
            prev: {},
            post: {...bunny.food},
          };

          temporalRestart.current = false;

          setXPosition(0);
          setFood({});
          
          //*! 
          // if (fruitTimer !== null) {
          //   clearInterval(fruitTimer);
          // }
          // if (enemyTimer !== null) {
          //   clearInterval(enemyTimer);
          // }

          setRestart(false);
        }

        //*! vamos a evaluar si algo a cambiado en la salud o la comida y actualizarlo en el contexto general

        if (temporalLife.current.post !== temporalLife.current.prev) {
          temporalLife.current.prev = temporalLife.current.post;
          setbunnyLife(temporalLife.current.post);
        }

        if (
          temporalFoodCounter.current.prev !== temporalFoodCounter.current.post
        ) {
          temporalFoodCounter.current.prev = temporalFoodCounter.current.post;
          setFood(temporalFoodCounter.current.post);
        }
      }

      animate();
    }

    //*? ------ GENERADOR DE FRUTAS ALEATORIAS ---------------------

    const fruitTimer = setInterval(() => {
      // randomFruitGenerator();
    }, Math.floor(Math.random() * 7000) + 5000);

    //*? GENERADOR DE ENEMIGOS

    const enemyTimer =
      setInterval(() => {
        speeder += 100;
        // enemyGenerator(canvasWidth);
      }, Math.floor(Math.random() * 15000 - speeder * 2 ) + 10000 - speeder * 2) ;

    //*? -------- MANEJAR EL REDIMENCIONADO -----------------------

    const handleResize = () => {
      if (canvasRef.current) {
        canvasWidth = containerRef.current.offsetWidth;
        const canvas = canvasRef.current;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
      }
    };

    handleResize(); //Puse un useState para que si cambia de tamaño se actualice la pantalla
    window.addEventListener("resize", handleResize); // Agregar un listener para cambios de tamaño de pantalla

    return () => {
      clearInterval(fruitTimer);
      clearInterval(enemyTimer);

      //LIMPIAR RESIZE
      window.removeEventListener("resize", handleResize);
      //LIMPIAR ANIMACIÓN

      cancelAnimationFrame(animationId); //*? para que no le de epilepcia al conejo al montarse muchas veces el useEffect
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="bunnyGame">
        <canvas ref={canvasRef}> </canvas>
      </div>
    </>
  );
};
