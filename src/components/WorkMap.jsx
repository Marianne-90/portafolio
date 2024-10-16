import { AiOutlineBulb } from "react-icons/ai";
import { WorkButton } from "./WorkButton";
import { useState } from "react";

import ScrollTrigger from "react-scroll-trigger";

export const WorkMap = ({ company, year, charge, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleAnimation = () => {
    setIsVisible(true);
  };

  function convertirNegritas(texto) {
    // Reemplaza el texto entre ** por <strong>
    return texto.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  }

  function TextoConNegritas({ texto }) {
    // Convierte el texto con negritas y luego lo inserta de manera segura como HTML
    const textoFormateado = convertirNegritas(texto);

    return <div dangerouslySetInnerHTML={{ __html: textoFormateado }} />;
  }

  return (
    <ScrollTrigger onEnter={handleAnimation}>
      <div className="job">
        <div className="containerJob">
          <div className={isVisible ? "slide-bottom-text yc" : "yc"}>
            <p className="year">{year}</p>
            <p className="company">{company}</p>
          </div>
          <div className={isVisible ? "slide-bottom-text charge" : "charge"}>
            {charge}:
          </div>
          <ul className="description">
            {description.map((des, index) => (
              <li
                key={index}
                className={
                  isVisible && index % 2 === 0
                    ? "slide-left"
                    : isVisible && index % 2 !== 0
                    ? "slide-right"
                    : ""
                }
              >
                <i>
                  <AiOutlineBulb size={15} />
                </i>
                <TextoConNegritas texto={des} />
              </li>
            ))}
          </ul>
          <WorkButton job={company} />
        </div>
        <div className="box"></div>
      </div>
    </ScrollTrigger>
  );
};
