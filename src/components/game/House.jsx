import { useRef, useEffect, useContext } from "react";
import { MainContext } from "./context/MainContext";
import { bunnyAnimation } from "./tools/bunny";
import { BUNNY_SPRITE } from "./tools/sprites";
import { gameData } from "../../data/gameData";
import {
  initCanvas,
  housedAnimation,
} from "./tools/houseBackGround";


export const House = () => {
  const {
    keyPressed,
    xPosition,
    setXPosition,
    setKeyPressed,
    setbunnyLife,
    setFood,
    restart,
    setRestart,
    setPopElement,
  } = useContext(MainContext);

  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  let canvasWidth = 0;
  let canvasHeight = 0;
  let animationId;

  let temporalXposition = useRef(0);
  let temporalKeyPress = useRef("");
  let temporalPop = useRef({
    prev: {},
    post: {},
  });

  useEffect(() => {
    temporalXposition.current = xPosition;
  }, [xPosition]);


  useEffect(() => {
    temporalKeyPress.current = keyPressed;
  }, [keyPressed]);

  useEffect(() => {
    canvasWidth = containerRef.current.offsetWidth;
    canvasHeight = containerRef.current.offsetHeight;

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
        housedAnimation({ c, canvasWidth, temporalXposition, temporalPop });
        bunnyAnimation({ c, canvasWidth, canvasHeight, temporalKeyPress });
    

        //*! vamos a evaluar si algo a cambiado en la salud o la comida o actionBlocks y actualizarlo en el contexto general

        if( temporalPop.current.prev !== temporalPop.current.post){
          temporalPop.current.prev = temporalPop.current.post;
          setPopElement(temporalPop.current.post)
        }
      }

      animate();
    }

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
