import journalApp from "../img/proyects/journalApp.png";
import gifApp from "../img/proyects/giftApp.jpg";
import strudelHome from "../img/proyects/strudelHome.jpg";
import strudelAdmin from "../img/proyects/strudelAdmin.jpg";
import pythonFinal from "../img/proyects/pythonFinal.jpg";
import hooksApp from "../img/proyects/hooksApp.jpg";
import crudPhp from "../img/proyects/crudphp.jpg";
import pokegame from "../img/proyects/pokegame.jpg";
import ninjaGame from "../img/proyects/ninjaGame.jpg";
import solaz from "../img/proyects/solaz.jpg";


import { AiFillGithub } from "react-icons/ai";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const proyects = [
  {
    title: "Blog Admin Panel",
    image: solaz,
    description:
      "Built with React.js, this bilingual admin panel empowers users to create, manipulate, and organize blogs in English and Spanish. Connected to a PHP and MySQL CRUD API, it also facilitates .xlsx file downloads.",
    url: "https://github.com/Marianne-90/admin",
  },
  {
    title: "Ninja Game",
    image: ninjaGame,
    description:
      "This JavaScript vanilla fighting game features two skillful ninjas engaged in epic combat until a decisive victor emerges. The game is a testament to my proficiency in managing classes, functions, constructors, and class inheritance",
    url: "https://figth-game.netlify.app/",
  },
  {
    title: "Poke Game",
    image: pokegame,
    description:
      "Pokemon-inspired game, crafted with vanilla JavaScript, showcases a deep dive into object-oriented programming (OOP) principles, class hierarchies, constructors, and functions. By leveraging the power of the HTML canvas",
    url: "https://pokegamemarianne.netlify.app/",
  },
  {
    title: "Strudel Web",
    image: strudelHome,
    description:
      "This React.js restaurant website utilizes router, navigation, and API connections with a PHP backend. It showcases front-end development skills like a dynamic and descriptive HTML implementation and friendly browsing experience.",
    url: "https://strudelrestaurante.com/",
  },
  {
    title: "Strudel Admin",
    image: strudelAdmin,
    description:
      "The Strudel restaurant's admin panel, built with React.js, enables updating, adding, deleting, and reordering elements in the MySQL database through a PHP backend. It also provides image manipulation capabilities and allows file uploads in .tsv format.",
    url: "https://admin.strudelrestaurante.com/main",
  },
  {
    title: "Journal App",
    image: journalApp,
    description:
      "A feature-rich React.js Notes app with Firebase integration. Includes authentication, session management, private routes, and user management. Leverages Firebase's real-time database for awesome note creation, editing, and organization.",
    url: "https://github.com/Marianne-90/JournalApp",
  },
  {
    title: "Gift App",
    image: gifApp,
    description:
      "This React-based application, integrated with Firebase, facilitates a random Secret Santa assignment for Christmas gift exchanges. Effortlessly organize the holiday tradition, ensuring excitement and anonymity.",
    url: "https://navidad.strudelrestaurante.com/",
  },

  {
    title: "100 days of Python final challenge",
    image: pythonFinal,
    description:
      "The final 100 day Python challenge, this application will scrape in to an alarm clock page and if there are lower prices will send an email with the price difference, url of the article and an image of the alarm clock",
    url: "https://replit.com/@MarianneGarrido/Day-100-100-Days-challenge?v=1",
  },
  {
    title: "Hooks App",
    image: hooksApp,
    description:
      "A compilation of the different hooks offered by React.js and how they work with examples and exercises",
    url: "https://github.com/Marianne-90/Hooks-App",
  },
  {
    title: "CRUD using classes and routing",
    image: crudPhp,
    description: "A simple PHP application using classes and routing",
    url: "https://github.com/Marianne-90/api-usando-clases-y-enrutamiento",
  },
];

export const Proyects = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleAnimation = () => {
    setIsVisible(true);
  };

  return (
    <section id="proyects">
      <div className="grand-title">
        <h4 data-ix="slowfade-scroll-bigs">SOME OF MY PROYECTS</h4>
      </div>

      <section className="portafolio" id="trabajo">
          <ScrollTrigger onEnter={handleAnimation}>
        <div className="portafolio-container">
            {proyects.map((proyect) => (
              <section 
              className={isVisible ? " portafolio-item opacity" : "portafolio-item"}
              key={proyect.title}>
                <img
                  src={proyect.image}
                  alt={proyect.title}
                  className="portafolio-img"
                />
                <section className="portafolio-text">
                  <h5>{proyect.title}</h5>
                  <p>{proyect.description}</p>
                  <a href={proyect.url} target="blank">
                    View Proyect
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
        <AiFillGithub /> Visit my GitHub
      </a>
    </section>
  );
};
