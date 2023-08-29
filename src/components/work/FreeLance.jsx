import bill1 from "../../img/freelance/colegio/espectacular.jpg";
import bill2 from "../../img/freelance/colegio/lona.jpg";
import flyera from "../../img/freelance/colegio/ladoaflyer.jpg";
import flyerb from "../../img/freelance/colegio/ladobflyer.jpg";
import gif from "../../img/freelance/colegio/gifgraduacion.gif";
import logoc from "../../img/freelance/cienciaParaNinos/logoc.jpeg";
import flyerca from "../../img/freelance/cienciaParaNinos/flyercienciaa.png";
import flyercb from "../../img/freelance/cienciaParaNinos/flyercienciab.png";
import SalTab1 from "../../img/freelance/pizza/tabloide2.jpg";
import SalTab2 from "../../img/freelance/pizza/tabloide3.jpg";
import SalTab3 from "../../img/freelance/pizza/tabloide4.jpg";
import car1 from "../../img/freelance/carni/carnia.jpg";
import car2 from "../../img/freelance/carni/carnib.jpg";
import liderManual from "../../img/freelance/carni/Manual-Lider.pdf";
import adalo1 from "../../img/freelance/Adalo/adalo1.jpeg";
import adalo2 from "../../img/freelance/Adalo/adalo2.jpeg";
import adalo3 from "../../img/freelance/Adalo/adalo3.jpeg";
import AdaloManual from "../../img/freelance/Adalo/identidadAdalo.pdf";

import { CiFaceSmile } from "react-icons/ci";

import { useState } from "react";

export const FreeLancer = ({ len }) => {
  const [imagenModalVisible, setImagenModalVisible] = useState(false);
  const [imagenEnModal, setImagenEnModal] = useState();

  const mostrarImagen = (imagenSrc) => {
    setImagenModalVisible(true);
    setImagenEnModal(imagenSrc);
  };

  const cerrarImagen = () => {
    setImagenModalVisible(false);
    setImagenEnModal("");
  };

  const CONTENT_DATA = {
    eng: [
      "This is some of the work I made as a freelance",
      "I was involved in the opening campaign of Colegio Le Bret, where I was responsible for overseeing the entire campaign, including designing and creating billboards, flyers, digital marketing initiatives, banners, and various other promotional materials.",
      "I was responsible for developing the corporate color scheme, designing the logo, creating the business card, implementing social media campaigns, and designing flyers.",
      "I was involved in creating print advertising campaigns for positioning purposes for Il Salentino, a pizzeria.",
      "I was responsible for developing the brand identity manual, designing the logo, creating the business card, and designing flyers to promote the opening of Líder, a butcher shop.",
      "I was responsible of creating the brand identity manual, designing the logo, establishing the corporate colors, presentation cards and developing a design proposal for social media campaigns for Adalo.",
      "View the Identity Manual",
    ],
    esp: [
      "Estos son algunos de los trabajos que realicé como freelancer.",
      "Participé en la campaña de apertura del Colegio Le Bret, donde fui responsable de supervisar toda la campaña, incluyendo el diseño y creación de vallas publicitarias, folletos, iniciativas de marketing digital, banners y diversos materiales promocionales.",
      "Fui responsable de desarrollar la paleta de colores corporativos, diseñar el logotipo, crear la tarjeta de presentación, implementar campañas en redes sociales y diseñar folletos.",
      "Participé en la creación de campañas de publicidad impresa con fines de posicionamiento para Il Salentino.",
      "Fui responsable de desarrollar el manual de identidad de marca, diseñar el logotipo, crear la tarjeta de presentación y diseñar folletos para promocionar la apertura de carnicería Líder.",
      "Fui responsable de crear el manual de identidad de marca, diseñar el logotipo, establecer los colores corporativos, tarjetas de presentación y desarrollar una propuesta de diseño para campañas en redes sociales para Adalo.",
      "Ver el Manual de Identidad",
    ],
  };

  return (
    <section className="freelance">
      <h2 id="title">
        {CONTENT_DATA[len][0]} <CiFaceSmile size={22} />
      </h2>
      <section className="colegio">
        <h2 id="mainTitle">Colegio Le Bret</h2>
        <p id="mainDescription">{CONTENT_DATA[len][1]}</p>
        {imagenModalVisible && (
          <div id="ventanaModal" onClick={cerrarImagen}>
            <img
              id="imagenEnModal"
              src={imagenEnModal}
              alt="Imagen en grande"
            />
          </div>
        )}
        <div className="gif">
          <img
            src={gif}
            alt="Colegio Le Bret"
            onClick={() => mostrarImagen(gif)}
          />
        </div>

        <h3>Billboards</h3>
        <div className="billboard">
          <div className="img">
            <img
              src={bill1}
              alt="Colegio Le Bret"
              onClick={() => mostrarImagen(bill1)}
            />
          </div>
          <div className="img">
            <img src={bill2} alt="lona" onClick={() => mostrarImagen(bill2)} />
          </div>
        </div>
        <h3>Flyers</h3>
        <div className="flyers">
          <div className="img">
            <img
              src={flyera}
              alt="Colegio Le Bret"
              onClick={() => mostrarImagen(flyera)}
            />
          </div>
          <div className="img">
            <img
              src={flyerb}
              alt="Colegio Le Bret"
              onClick={() => mostrarImagen(flyerb)}
            />
          </div>
        </div>
      </section>
      <section className="ciencia">
        <h2 id="mainTitle">Ciencia Para Niños</h2>
        <p id="mainDescription">{CONTENT_DATA[len][2]}</p>
        <div className="logo">
          <img
            src={logoc}
            alt="Ciencia para niños"
            onClick={() => mostrarImagen(logoc)}
          />
        </div>
        <div className="flyer">
          <div className="img">
            <img
              src={flyerca}
              alt="Ciencia para niños"
              onClick={() => mostrarImagen(flyerca)}
            />
          </div>
          <div className="img">
            <img
              src={flyercb}
              alt="Ciencia para niños"
              onClick={() => mostrarImagen(flyercb)}
            />
          </div>
        </div>
      </section>
      <section className="pizza">
        <h2 id="mainTitle">Il Salentino</h2>
        <p id="mainDescription">{CONTENT_DATA[len][3]}</p>
        <div className="gallery">
          <div className="img">
            <img
              src={SalTab1}
              alt="Il Salentino"
              onClick={() => mostrarImagen(SalTab1)}
            />
          </div>
          <div className="img">
            <img
              src={SalTab2}
              alt="Il Salentino"
              onClick={() => mostrarImagen(SalTab2)}
            />
          </div>
          <div className="img">
            <img
              src={SalTab3}
              alt="Il Salentino"
              onClick={() => mostrarImagen(SalTab3)}
            />
          </div>
        </div>
      </section>
      <section className="carni">
        <h2 id="mainTitle">Carnicería Líder</h2>
        <p id="mainDescription">{CONTENT_DATA[len][4]}</p>
        <div className="gallery">
          <div className="img">
            <img
              src={car1}
              alt="Carnicería Lider"
              onClick={() => mostrarImagen(car1)}
            />
          </div>
          <div className="img">
            <img
              src={car2}
              alt="Carnicería Líder"
              onClick={() => mostrarImagen(car2)}
            />
          </div>
        </div>
        <a href={liderManual} id="download" target="blank">
          {" "}
          {CONTENT_DATA[len][6]}
        </a>
      </section>
      <section className="adalo">
        <h2 id="mainTitle">Adalo</h2>
        <p id="mainDescription">{CONTENT_DATA[len][5]}</p>
        <div className="galery">
          <div className="img">
            <img
              src={adalo1}
              alt="Adalo"
              onClick={() => mostrarImagen(adalo1)}
            />
          </div>
          <div className="img">
            <img
              src={adalo2}
              alt="Adalo"
              onClick={() => mostrarImagen(adalo2)}
            />
          </div>
          <div className="img">
            <img
              src={adalo3}
              alt="Adalo"
              onClick={() => mostrarImagen(adalo3)}
            />
          </div>
        </div>
        <a href={AdaloManual} id="download" target="blank">
          {CONTENT_DATA[len][6]}
        </a>
      </section>
    </section>
  );
};
