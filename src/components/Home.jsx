import fresa from "../img/fresa.ico";
// import { data } from "../data/data.js";
import { DocumentPDF } from "./DocumentPDF";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import { DocumentoPDF } from "./DocumentoPDF";

export const Home = () => {
  const { data } = useContext(MainContext);

  if (data.language !== undefined) {
    const { home } = data;

    return (
      <>
        <section className="photo" id="home">
          <div className="photo-text">
            <h4 id="portafolio" className="slide-top-text">
              <small>{data.language == "eng"? "My Portafolio":"Mi Portafolio"}  </small>
            </h4>
            <h4 id="name" className="slide-right">
              {home.name}
            </h4>
            <p data-ix="subtitle-hero-up" className="slide-top-text">
              {home.description}
            </p>
            <div className="button">
    {     data.language === "eng"? <PDFDownloadLink
                document={<DocumentPDF />}
                fileName="Marianne-Garrido.pdf"
              >
                <button>Download Resume PDF</button>
              </PDFDownloadLink>:
              <PDFDownloadLink
                document={<DocumentoPDF />}
                fileName="Marianne-Garrido.pdf"
              >
                <button>Descargar CV</button>
              </PDFDownloadLink>
              }
            </div>
            <img src={fresa} alt="fresa" className="slide-bottom-text" />
          </div>
  
          <div className="overlay"></div>
        </section>
      </>
    );
  }

};
