import "./App.css";
import { Education } from "./components/Education";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Proyects } from "./components/Proyects";
import { Skills } from "./components/Skills";
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= (containerRef.current.offsetTop - 100)) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavBar state={isNavbarFixed} />
      <Home/>
      <section className="content" ref={containerRef}>
        <Education />
        <Skills/>
        <Proyects/>
        <div className="inner-content">
          <div className="boxy"></div>
          <div className="boxy">
            <div id="slider">
              <figure>
                <ul>
                  <li>
                    <h4>Lorem ipsum 1</h4>
                    <img src="https://unsplash.it/80?image=823" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eligendi, perspiciatis.
                    </p>
                  </li>
                  <li>
                    <h4>Lorem ipsum 2</h4>
                    <img src="https://unsplash.it/80?image=823" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Repellat, fugiat!
                    </p>
                  </li>
                  <li>
                    <h4>Lorem ipsum 3</h4>
                    <img src="https://unsplash.it/80?image=823" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Officiis, nemo!
                    </p>
                  </li>
                  <li>
                    <h4>Lorem ipsum 4</h4>
                    <img src="https://unsplash.it/80?image=823" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quibusdam, consequatur.
                    </p>
                  </li>
                </ul>
              </figure>
            </div>
          </div>
        </div>


      </section>
      <div className="footer" id="contacto">
        <h4 data-ix="slowfade-scroll-bigs">Contacto</h4>
        <div className="container">
          <form action="enviar.php" method="post">
            <ul className="flex-outer">
              <li>
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Ingresa Nombre"
                  className="rect"
                  required
                />
              </li>
              <li>
                <label htmlFor="correo">Correo</label>
                <input
                  type="email"
                  name="correo"
                  placeholder="Ingresa Correo"
                  className="rect"
                  required
                />
              </li>
              <li>
                <label htmlFor="fono">Teléfono</label>
                <input
                  type="text"
                  name="telefono"
                  placeholder="Ingresa Teléfono"
                  className="rect"
                  required
                />
              </li>
              <li>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  rows="6"
                  name="mensaje"
                  className="rect"
                  required
                ></textarea>
              </li>
              <li className="center">
                <button type="submit">Enviar</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
