import { AiFillCloud, AiFillTrophy } from "react-icons/ai";
import togaf from "../../img/jobs/tec/Togaf.png";
import diagramas from "../../img/jobs/tec/Diagramas.png";
import panel from "../../img/jobs/tec/panel.png";

export const Tec = ({ len }) => {
  return (
    <div className="Tec">
      <i id="cloud">
        <AiFillCloud size={50} />
      </i>
      <section className="togaf">
        <p>
          {len === "eng"
            ? "Execution of Enterprise Architecture strategies based on the Togaf Model"
            : "Ejecución de estrategias de Arquitectura empresarial basadas en el Modelo de Togaf"}
        </p>
        <div className="img">
          <img src={togaf} alt="togaf" />
        </div>
        <div className="containerS"></div>
      </section>
      <i id="cloud">
        <AiFillCloud size={50} />
      </i>
      <section className="diagrama">
        <p>
          {len === "eng"
            ? "Creation of different advanced reports, as well as diagrams using different modeling languages ​​such as ArchiMate, UML and AWS"
            : "Creación de distintos reportes avanzados,  así como diagramas haciendo uso de los distintos lenguajes de modelado como ArchiMate, UML y AWS"}
        </p>
        <div className="img">
          <img src={diagramas} alt="diagramas" />
        </div>
        <div className="containerS"></div>
      </section>
      <i id="cloud">
        <AiFillCloud size={50} />
      </i>
      <section className="panel">
        <p>
          {len === "eng"
            ? "Wide collection of customized dashboards in line with the objectives"
            : "Amplia colección de dashboards personalizados en línea con los objetivos"}
        </p>
        <div className="img">
          <img src={panel} alt="panel" />
        </div>
        <div className="containerS"></div>
      </section>

      <i id="cloud">
        <AiFillCloud size={50} />
      </i>
      <section className="panel">
        <p>
          {len === "eng"
            ? "Creation of various teaching materials such as videos and manuals to support training and change management within organizations."
            : "Creación de diversos materiales didácticos como videos y manuales para apoyar las capacitaciones y change management dentro de las organizaciones."}
        </p>
        <div className="img">
          <iframe
            src="https://www.youtube.com/embed/50exqdiFu48"
            title="Aplicación"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="containerS"></div>
      </section>
    </div>
  );
};
