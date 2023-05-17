import fresa from "../img/fresa.ico";

export const Home = () => {
  return (
    <section className="photo" id="home">
      <div className="photo-text">
        <h4 id="portafolio">
          <small> My Portafolio </small>
        </h4>
        <h4 id="name">Marianne Garrido Minutti</h4>
        <p data-ix="subtitle-hero-up">
          I am a proactive and enthusiastic professional with a passion for
          innovation and teamwork. I thrive on big challenges and have a proven
          ability to solve problems in creative and efficient ways.
        </p>
        <img src={fresa} alt="fresa" />
      </div>
      <div className="overlay"></div>
    </section>
  );
};
