import { AiFillGithub } from "react-icons/ai";
import { useState, useContext } from "react";

import ScrollTrigger from "react-scroll-trigger";
import { MainContext } from "../context/MainContext.jsx";

export const Proyects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { data } = useContext(MainContext);
  const { proyects } = data;

  const handleAnimation = () => {
    setIsVisible(true);
  };

  return (
    <section id="proyects">
      <div className="grand-title">
        <h4 data-ix="slowfade-scroll-bigs">
          {data.language == "eng"
            ? "SOME OF MY PROJECTS"
            : "ALGUNOS DE MIS PROYECTOS"}
        </h4>
      </div>

      <section className="portafolio" id="trabajo">
        <ScrollTrigger onEnter={handleAnimation}>
          <div className="portafolio-container">
            {proyects.map((proyect) => (
              <section
                className={
                  isVisible ? " portafolio-item opacity" : "portafolio-item"
                }
                key={proyect.title}
              >
                <img
                  src={proyect.image}
                  alt={proyect.title}
                  className="portafolio-img"
                />
                <section className="portafolio-text">
                  <h5>{proyect.title}</h5>
                  <p>{proyect.description}</p>
                  <a href={proyect.url} target="blank">
                    {data.language == "eng" ? " View Proyect" : "Ver Proyecto"}
                  </a>
                </section>
              </section>
            ))}
          </div>
        </ScrollTrigger>
      </section>
      <a
        href="https://github.com/Marianne-90"
        id="github-button"
        target="blank"
      >
        <AiFillGithub />
        {data.language == "eng" ? " Visit my GitHub" : "Visita mi GitHub"}
      </a>
    </section>
  );
};
