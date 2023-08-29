import { AiFillCheckCircle } from "react-icons/ai";
import { useState, useContext } from "react";
import { data } from "../data/data.js";
import ScrollTrigger from "react-scroll-trigger";
import { bunnyData } from "../data/bunnyData.js";
import { BunnyAnimation } from "./BunnyAnimation.jsx";
import { MainContext } from "../context/MainContext.jsx";

//LA ANIMACIÓN DEL CONEJO
const { studyBunny } = bunnyData;

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { data } = useContext(MainContext);
  const { skillsData } = data;

  const classNameGenerator = (index) => {
    if (index % 2 === 0) {
      return isVisible ? "container slide-top-text" : "container";
    } else {
      return isVisible ? "container  slide-bottom-text" : "container";
    }
  };

  const handleAnimation = () => {
    setIsVisible(true);
  };

  const boldeText = (text) => {
    const parts = text.split(" - ");

    if (parts.length === 2) {
      // El texto contiene un guion ("-"), aplicamos formato en negrita.
      const boldPart = parts[0];
      const normalPart = parts[1];

      return (
        <span>
          <strong>{boldPart}</strong> - {normalPart}
        </span>
      );
    } else {
      // El texto no contiene un guion ("-"), se muestra sin formato adicional.
      return <span>{text}</span>;
    }
  };

  return (
    <section id="skills">
      <BunnyAnimation width={100} height={100} data={studyBunny} speed={20} />

      <ScrollTrigger onEnter={handleAnimation}>
        <div className="grand-title">
          <h4 data-ix="slowfade-scroll-bigs">{data.language == "eng"? "SKILLS":"HABILIDADES"} </h4>
        </div>
        <div className="skillsContainer">
          {skillsData.map((data, index) => {
            return (
              <div className={classNameGenerator(index)} key={index}>
                <h4>{data.name}</h4>
                {data.skills.map((skill, index) => {
                  return (
                    <p key={index}>
                      <span>
                        <AiFillCheckCircle />
                      </span>
                      {boldeText(skill)}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </ScrollTrigger>
    </section>
  );
};
