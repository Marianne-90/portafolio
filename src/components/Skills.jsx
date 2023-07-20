import { AiFillCheckCircle } from "react-icons/ai";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const skillsData = [
  {
    name: "Specific Developer Skills",
    skills: [
      "Object-Oriented Programming (OOP) -Classes and objects to create modular and maintainable code.",
      "JSON (JavaScript Object Notation) - Able to handle and manipulate data in JSON format, commonly used for data interchange between applications.",
      "Database Management - Familiarity with handling databases, performing CRUD",
      "API Handling - Competent in working with APIs to interact with external services and retrieve data.",
      "REST APIs - I'm able to designing and implementate RESTful APIs",
      "Front-End Technologies - Proficiency in HTML, CSS, and JavaScript (Vanilla, React.js), enabling the creation of user interfaces and interactions.",
      "Back-End Development - Knowledge of server-side programming languages (PHP, Phyton)",
      "Version Control - Experience using version control systems like Git to manage code changes collaboratively",
      "Responsive Design - Knowledge of designing websites and applications that adapt to different screen sizes and devices.",
      "Basic Security Practices - Awareness of common security vulnerabilities and the implementation of basic security measures.",
    ],
  },

  {
    name: "Hard Skills",
    skills: [
      "Ecommerce Platforms",
      "SEO and DA",
      "Web Developer JR (JS, React, Next, PHP, Python, Mysql, sql, Html, CSS)",
      "Adobe Suite (Advanced)",
      "Google Ads",
      "Social Media (Advanced)",
    ],
  },
  {
    name: "SoftSkills",
    skills: [
      "Ecommerce Platforms",
      "SEO and DA",
      "Web Developer JR (JS, React, Next, PHP, Python, Mysql, sql, Html, CSS)",
      "Adobe Suite (Advanced)",
      "Google Ads",
      "Social Media (Advanced)",
    ],
  },
];

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section id="skills">
      <ScrollTrigger onEnter={handleAnimation}>
        <div className="grand-title">
          <h4 data-ix="slowfade-scroll-bigs">SKILLS</h4>
        </div>
        <div className="skillsContainer">
          {skillsData.map((data, index) => {
            {
              console.log(data);
            }
            return (
              <div className={classNameGenerator(index)}>
                <h4>{data.name}</h4>
                {data.skills.map((skill) => (
                  <p key={skill}>
                    <AiFillCheckCircle /> {skill}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </ScrollTrigger>
    </section>
  );
};
