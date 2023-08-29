import video from "../../img/jobs/faurecia/faurecia.mp4";
import { AiFillCloud, AiFillTrophy } from "react-icons/ai";

export const Faurecia = ({ len }) => {
  return (
    <section className="faurecia">
      <i id="cloud">
        <AiFillCloud size={50} />
      </i>
      <h2>
        {len === "eng"
          ? "This is the video I made, get some popcorns ... enjoy!"
          : "Este es el video que realicé, ¡Espero lo disfrutes!"}
      </h2>
      <video src={video} controls>
        Tu navegador no soporta la etiqueta de video.
      </video>
    </section>
  );
};
