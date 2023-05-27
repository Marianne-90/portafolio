import { AiFillCheckCircle } from "react-icons/ai";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const hardSkills = [
  "Ecommerce Platforms",
  "SEO and DA",
  "Web Developer JR (JS, React, Next, PHP, Python, Mysql, sql, Html, CSS)",
  "Adobe Suite (Advanced)",
  "Google Ads",
  "Social Media (Advanced)",
];

const softSkills = [
  "Adaptability",
  "Collaboration and Teamwork",
  "Communication Skills",
  "Problem-Solving Skills",
  "Time Management and Organization",
];

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleAnimation = () => {
    setIsVisible(true);
  };

  return (
    <section id="skills">
        <ScrollTrigger onEnter={handleAnimation}>
      <div className="grand-title">
        <h4 data-ix="slowfade-scroll-bigs">SKILLS</h4>
      </div>
      <div className="skillsContainer">
          <div className={isVisible ? "container  slide-top-text" : "container"}>
            <h4>HARD SKILLS</h4>
            {hardSkills.map((skill) => (
              <p key={skill}>
                <AiFillCheckCircle /> {skill}
              </p>
            ))}
          </div>
          <div className={isVisible ? "container  slide-bottom-text" : "container"}>
          <h4>SOFT SKILLS</h4>
            {softSkills.map((skill) => (
              <p key={skill}>
                <AiFillCheckCircle /> {skill}
              </p>
            ))}
          </div>
      </div>
        </ScrollTrigger>
    </section>
  );
};
