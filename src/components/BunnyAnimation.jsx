import { useRef, useEffect } from "react";
import { Sprite } from "../classes/Sprite.js";
export const BunnyAnimation = ({width, height, data, speed}) => {

  //LA ANIMACIÓN DEL CONEJO

  const bunny = new Sprite(data);
  bunny.framesHold = speed;
  const canvasRef = useRef(null);

  useEffect(() => {
    // Función para inicializar el canvas y el contexto 2D
    const initCanvas = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        canvas.width = width;
        canvas.height = height;

        const context = canvas.getContext("2d");

        return context; // Retorna el contexto 2D
      }
      return null;
    };

    const c = initCanvas();
    //Dibujar conejo
    if (c) {
      c.fillStyle = "blue";
      const canvas = canvasRef.current;

      function animate() {
        requestAnimationFrame(animate);
        c.fillStyle = "white";
        c.fillRect(0, 0, canvas.width, canvas.height);
        bunny.update(c);
      }

      animate();
    }
  }, []);


  return (
    <div className="animationBunny">
      <canvas ref={canvasRef}> </canvas>
    </div>
  );
};
