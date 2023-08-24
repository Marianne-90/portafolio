import fresa from "../img/fresa.ico";
import { data } from "../data/data.js";
import { DocumentPDF } from "./DocumentPDF";

import { PDFDownloadLink } from "@react-pdf/renderer";

export const Home = () => {
  const { home } = data;


  return (
    <>
      <section className="photo" id="home">
        <div className="photo-text">
          <h4 id="portafolio" className="slide-top-text">
            <small> My Portafolio </small>
          </h4>
          <h4 id="name" className="slide-right">
            {home.name}
          </h4>
          <p data-ix="subtitle-hero-up" className="slide-top-text">
            {home.description}
          </p>
          <div className="button">
            <PDFDownloadLink
              document={<DocumentPDF />}
              fileName="Marianne-Garrido.pdf"
            >
              <button>Download Resume PDF</button>
            </PDFDownloadLink>
          </div>
          <img src={fresa} alt="fresa" className="slide-bottom-text" />
        </div>

        <div className="overlay"></div>
      </section>
    </>
  );
};
