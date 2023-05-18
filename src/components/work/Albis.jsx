import staub from "../../img/jobs/staub.jpg";
import zwilling from "../../img/jobs/zwilling.jpg";
import steiner from "../../img/jobs/steiner.jpg";
import kuch from "../../img/jobs/kuch.jpg";
import swiss from "../../img/jobs/swiss.jpg";
import lider from "../../img/jobs/melilider.jpg";
import score from "../../img/jobs/meliinprov.jpg";

import { AiFillCloud, AiFillTrophy } from "react-icons/ai";

export const Albis = () => {
  return (
    <div className="Albis">
      <i id="cloud">
        <AiFillCloud size={50} />
      </i>
      <section className="stores">
        <p>
          I registered several official brands on Amazon and created their
          respective ecommerce on Amazon.
        </p>
        <div className="containerS">
          <a
            href="https://www.amazon.com.mx/stores/page/EB5913F7-EE2C-4558-9A13-DBEF5B958F12?ingress=3"
            target="blank"
          >
            <div className="imgContainer">
              <img src={staub} alt="staub" />
            </div>
          </a>
          <a
            href="https://www.amazon.com.mx/stores/page/2D054D97-0BE7-4509-8897-F689BD5661BD?ingress=3"
            target="blank"
          >
            <div className="imgContainer">
              <img src={zwilling} alt="zwilling" />
            </div>
          </a>

          <a
            href="https://www.amazon.com.mx/stores/page/1C478778-976C-47D0-82D0-8EF4E71BFD16?ingress=3"
            target="blank"
          >
            <div className="imgContainer">
              <img src={steiner} alt="steiner" />
            </div>
          </a>

          <a
            href="https://www.amazon.com.mx/stores/page/AB19A0B9-519B-45D5-83EC-EBD40C145A99?ingress=3"
            target="blank"
          >
            <div className="imgContainer">
              <img src={kuch} alt="kuch" />
            </div>
          </a>
          <a
            href="https://www.amazon.com.mx/stores/page/427A57AE-DFA5-47B0-9364-3D57F3225127?ingress=3&visitId=b7b022f6-cfcb-4e23-b59d-276197e225be"
            target="blank"
          >
            <div className="imgContainer">
              <img src={swiss} alt="swiss" />
            </div>
          </a>
        </div>
      </section>
      <i id="cloud">
        <AiFillCloud size={50} />
      </i>
      <section className="score">
        <div className="conteinerS">
          <div className="img">
            <img src={lider} alt="mercado libre score" />
          </div>
          <div className="text">
            <p>
              <i>
                <AiFillTrophy size={50} />
              </i>
              <br />
              As a dedicated advocate of perpetual improvement and cutting-edge
              innovation, my unwavering commitment to excellence is reflected in
              the tangible results achieved within the realm of e-commerce.
            </p>
          </div>
        </div>
        <div className="img">
          <img src={score} alt="score" />
        </div>
      </section>
    </div>
  );
};
