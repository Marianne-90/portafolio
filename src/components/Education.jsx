import { useState } from "react";
import { AiFillCheckCircle, AiOutlineBulb } from "react-icons/ai";
import ScrollTrigger from "react-scroll-trigger";
import { data } from "../data/data.js";

export const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOtherVisible, setIsVisibleOtherVisible] = useState(false);
  const handleAnimation = () => {
    setIsVisible(true);
  };

  const { education } = data;
  const { lenguaje, educationList, certifications } = education;

  const handleOtherAnimation = () => {
    setIsVisibleOtherVisible(true);
  };

  return (
    <section id="education">
      <ScrollTrigger onEnter={handleAnimation}>
        <div className="grand-title">
          <h4 className={isVisible ? "slide-left" : ""}>EDUCATION</h4>
        </div>
        <div
          id="education-container"
          className={isVisible ? "slide-top-text" : ""}
        >
          {educationList.map((item, index) => {
            return (
              <p key={index}>
                <AiFillCheckCircle /> {item}
              </p>
            );
          })}
        </div>
        <div id="lenguaje" className={isVisible ? "slide-right" : ""}>
          <div className="bulb">
            <AiOutlineBulb size={50} />
          </div>
          <div className="container">
            {lenguaje.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
        </div>
      </ScrollTrigger>
      <h4 id="relevant-certification">RELEVANT CERTIFICATIONS</h4>
      <ScrollTrigger onEnter={handleOtherAnimation}>
        <div className="text">
          {certifications.map((certificate, index) => (
            <div
              className={
                isOtherVisible && index % 2 === 0
                  ? " inner-text slide-left"
                  : isOtherVisible && index % 2 !== 0
                  ? " inner-text slide-right"
                  : "inner-text"
              }
              key={certificate.title}
            >
              <h5>{certificate.title}</h5>
              <h3>{certificate.subtitle}</h3>
              <div className="text-box">
                <p>{certificate.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollTrigger>
    </section>
  );
};
