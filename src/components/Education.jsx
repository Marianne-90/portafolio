import { useState } from "react";
import { AiFillCheckCircle, AiOutlineBulb } from "react-icons/ai";
import ScrollTrigger from "react-scroll-trigger";

export const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOtherVisible, setIsVisibleOtherVisible] = useState(false);
  const handleAnimation = () => {
    setIsVisible(true);
  };

  const handleOtherAnimation = () => {
    setIsVisibleOtherVisible(true);
  };

  const certifications = [
    {
      title: "VTEX",
      subtitle: "E-commerce advanced executive program",
      description:
        "  Comprehensive e-commerce education covering strategy, online store management, digital marketing, UX, logistics, data analytics, and performance measurement. Delivered through online lectures, case studies, and group discussions. Equipped with expertise in driving digital commerce success and business growth.",
    },
    {
      title: "GOOGLE",
      subtitle: "Data Analysis Professional Certificate",
      description:
        " Comprehensive knowledge and practical skills in data analysis, visualization, and interpretation. Proficient in utilizing Google Analytics, Google Sheets, and other data analysis tools to extract actionable insights, optimize business performance, and drive informed decision-making.",
    },
    {
      title: "UDEMY",
      subtitle: "React-Redux JS",
      description:
        "Completed course on React-Redux JS, mastering core concepts, state management with Redux, and building scalable web applications. Proficient in React's dynamic UIs, routing, and Redux's store design, actions, and reducers. Skilled in complex app logic, async operations, and performance optimization.",
    },
  ];
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
          <AiFillCheckCircle /> Bachelor's degree in Communication, Ibero Puebla
          (2015-2020). GPA of 9.3.
          <br />
          <AiFillCheckCircle /> Relevant coursework: Digital Marketing,
          E-commerce, Web Development, among others
        </div>
        <div id="lenguaje" className={isVisible ? "slide-right" : ""}>
          <div className="bulb">
            <AiOutlineBulb size={50} />
          </div>
          <div className="container">
            <p>ENGLISH 95% TOFEL 595</p>
            <p>SPANISH 100% NATIVE</p>
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
              <h3>{certificate.subtitle}</h3>
              <i className="ic ion-spoon"></i>
              <div className="text-box">
                <h5>React-Redux JS</h5>
                <p>{certificate.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollTrigger>
    </section>
  );
};
