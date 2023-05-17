import journalApp from "../img/journalApp.png";
import gifApp from "../img/giftApp.jpg";
import strudelHome from "../img/strudelHome.jpg";
import strudelAdmin from "../img/strudelAdmin.jpg";
import pythonFinal from "../img/pythonFinal.jpg";

const proyects = [
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
    description: "The final 100 day Python challenge, this application will scrape in to an alarm clock page and if there are lower prices will send an email with the price difference, url of the article and an image of the alarm clock",
    url: "https://replit.com/@MarianneGarrido/Day-100-100-Days-challenge?v=1",
  },
  {
    title: "Hooks App",
    image: HookApp,
    description: "A compilation of the different hooks offered by React.js and how they work with examples and exercises",
    url: "https://github.com/Marianne-90/Hooks-App",
  },
  {
    title: "",
    image: journalApp,
    description: "",
    url: "https://github.com/Marianne-90/JournalApp",
  },
  {
    title: "",
    image: journalApp,
    description: "",
    url: "https://github.com/Marianne-90/JournalApp",
  },
];

export const Proyects = () => {
  return (
    <section id="proyects">
      <div className="grand-title">
        <h4 data-ix="slowfade-scroll-bigs">SOME OF MY PROYECTS</h4>
      </div>

      <section className="portafolio" id="trabajo">
        <div className="portafolio-container">
          {proyects.map((proyect) => (
            <section className="portafolio-item" key={proyect.title}>
              <img
                src={proyect.image}
                alt={proyect.title}
                className="portafolio-img"
              />
              <section className="portafolio-text">
                <h5>{proyect.title}</h5>
                <p>{proyect.description}</p>
                <a href={proyect.url} target="blank">
                  Visit Proyect
                </a>
              </section>
            </section>
          ))}
        </div>
      </section>
    </section>
  );
};
