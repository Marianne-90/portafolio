import { AiFillCheckCircle } from "react-icons/ai";


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
  return (
    <section id="skills">
      <div className="grand-title">
        <h4 data-ix="slowfade-scroll-bigs">SKILLS</h4>
      </div>
      <div className="skillsContainer">
        <div className="container">
          {hardSkills.map((skill) => (
            <p key={skill}><AiFillCheckCircle /> {skill}</p>
          ))}
        </div>
        <div className="container">
          {softSkills.map((skill) => (
            <p key={skill}><AiFillCheckCircle /> {skill}</p>
          ))}
        </div>
      </div>
    </section>
  );
};
