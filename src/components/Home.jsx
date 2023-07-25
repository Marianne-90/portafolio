import fresa from "../img/fresa.ico";
import { data } from "../data/data.js";

export const Home = () => {
  const { home } = data;

  const handleDownload = () => {
    console.log("handleDownload");
  };

  return (
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
        <button onClick={handleDownload}>Download Resume PDF</button>
        <img src={fresa} alt="fresa" className="slide-bottom-text" />
      </div>
      <div className="overlay"></div>
    </section>
  );
};
