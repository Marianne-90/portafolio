import React, { useState } from "react";

import { AiFillCloud } from "react-icons/ai";

import chinos from "../../img/jobs/inter/chinos.jpg";
import google from "../../img/jobs/inter/google.jpeg";
import mail from "../../img/jobs/inter/mail.jpg";
import mail1 from "../../img/jobs/inter/mail1.jpg";
import mail2 from "../../img/jobs/inter/mail2.jpg";
import mail3 from "../../img/jobs/inter/mail3.png";
import mail4 from "../../img/jobs/inter/mail4.jpeg";
import mail5 from "../../img/jobs/inter/mail5.jpeg";

const images = [mail, mail1, mail2, mail3, mail4, mail5];

export const Interceramic = () => {
  const [imagenModalVisible, setImagenModalVisible] = useState(true);
  const [imagenEnModal, setImagenEnModal] = useState(mail);

  const mostrarImagen = (imagenSrc) => {
    setImagenModalVisible(true);
    setImagenEnModal(imagenSrc);
  };

  const cerrarImagen = () => {
    setImagenModalVisible(false);
    setImagenEnModal("");
  };

  return (
    <section className="interceramic">
      <i id="cloud">
        <AiFillCloud size={50} />
      </i>
      <div className="radio">
        <h2>
          During a radio interview with the renowned radio host Pau Chinos, we
          discussed the latest trends in Interceramic.
        </h2>
        <div className="img">
          <img src={chinos} alt="pau chinos" />
        </div>
      </div>
      <div className="google">
        <div className="text">
          <p>
            Upon completion of the project aimed at increasing Google reviews
            across all branches, we successfully achieved the objective of
            attaining a rating of 4.5 or higher for each one.
          </p>
        </div>
        <div className="img">
          <img src={google} alt="google review" />
        </div>
      </div>
      <div className="galery">
        <p>
          Some of the numerous graphic materials I utilized for email campaigns,
          SMS, social media, and Google Ads.
        </p>
        <div className="imgContent">
          {imagenModalVisible && (
            <div id="ventanaModal" onClick={cerrarImagen}>
              <img
                id="imagenEnModal"
                src={imagenEnModal}
                alt="Imagen en grande"
              />
            </div>
          )}
          {images.map((img, index) => (
            <div className="img" key={index} onClick={() => mostrarImagen(img)}>
              <img src={img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
