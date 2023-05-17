import journalApp from "../img/journalApp.png";
import gifApp from "../img/giftApp.jpg";

const proyects = [
  {
    title: "Journal App",
    image: journalApp,
    description:
      "A feature-rich React.js Notes app with Firebase integration. Includes authentication, session management, private routes, and user management. Leverages Firebase's real-time database for seamless note creation, editing, and organization.",
    url: "https://github.com/Marianne-90/JournalApp",
  },
  {
    title: "Gift App",
    image: gifApp,
    description: "",
    url: "https://navidad.strudelrestaurante.com/",
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
        <h4 data-ix="slowfade-scroll-bigs">PROYECTS</h4>
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
