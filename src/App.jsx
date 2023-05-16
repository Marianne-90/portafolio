import "./App.css";

function App() {
  return (
    <>
      <section className="photo" id="inicio">
        <div className="nav" id="sticker">
          <label for="toggle">&#9776</label>
          <input type="checkbox" id="toggle" />
          <div className="menu">
            <h5 className="logo">LOGO</h5>
            <a href="#inicio">inicio</a>
            <a href="#servicio">servicios</a>
            <a href="#trabajo">trabajo</a>
            <a href="#contacto">contacto</a>
          </div>
        </div>
        <div className="photo-text">
          <h4 data-ix="skype">genialidea</h4>
          <p data-ix="subtitle-hero-up">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
            quasi laboriosam architecto voluptatibus et, asperiores.
          </p>
        </div>
        <div className="overlay"></div>
      </section>
      <section className="content">
        <div className="grand-title" id="servicio">
          <h4 data-ix="slowfade-scroll-bigs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
            repellendus!
          </h4>
        </div>
        <div className="text">
          <div className="inner-text">
            <h3 data-ix="slowfade-scroll-bigs">genialidea</h3>
            <i className="ic ion-fork"></i>
            <div className="text-box">
              <h5 data-ix="slowfade-scroll-bigs">genialidea</h5>
              <p data-ix="slowfade-scroll-bigs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
                modi!
              </p>
            </div>
          </div>
          <div className="inner-text">
            <h3 data-ix="slowfade-scroll-bigs">genialidea</h3>
            <i className="ic ion-knife"></i>
            <div className="text-box">
              <h5 data-ix="slowfade-scroll-bigs">genialidea</h5>
              <p data-ix="slowfade-scroll-bigs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
                modi!
              </p>
            </div>
          </div>
          <div className="inner-text">
            <h3 data-ix="slowfade-scroll-bigs">genialidea</h3>
            <i className="ic ion-spoon"></i>
            <div className="text-box">
              <h5 data-ix="slowfade-scroll-bigs">genialidea</h5>
              <p data-ix="slowfade-scroll-bigs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
                modi!
              </p>
            </div>
          </div>
        </div>

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

        <section className="portafolio" id="trabajo">
          <h4 data-ix="slowfade-scroll-bigs">Trabajos</h4>
          <div className="portafolio-container">
            <section className="portafolio-item">
              <img
                src="https://unsplash.it/400/430?image=490"
                alt=""
                className="portafolio-img"
              />
              <section className="portafolio-text">
                <h5>genialidea</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus doloremque, error nostrum tempora sapiente corporis.
                </p>
              </section>
            </section>
            <section className="portafolio-item">
              <img
                src="https://unsplash.it/400/430?image=490"
                alt=""
                className="portafolio-img"
              />
              <section className="portafolio-text">
                <h5>genialidea.</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus doloremque, error nostrum tempora sapiente corporis.
                </p>
              </section>
            </section>
            <section className="portafolio-item">
              <img
                src="https://unsplash.it/400/430?image=490"
                alt=""
                className="portafolio-img"
              />
              <section className="portafolio-text">
                <h5>genialidea</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus doloremque, error nostrum tempora sapiente corporis.
                </p>
              </section>
            </section>
          </div>
        </section>
      </section>
      <div className="footer" id="contacto">
        <h4 data-ix="slowfade-scroll-bigs">Contacto</h4>
        <div className="container">
          <form action="enviar.php" method="post">
            <ul className="flex-outer">
              <li>
                <label for="nombre">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Ingresa Nombre"
                  className="rect"
                  required
                />
              </li>
              <li>
                <label for="correo">Correo</label>
                <input
                  type="email"
                  name="correo"
                  placeholder="Ingresa Correo"
                  className="rect"
                  required
                />
              </li>
              <li>
                <label for="fono">Teléfono</label>
                <input
                  type="text"
                  name="telefono"
                  placeholder="Ingresa Teléfono"
                  className="rect"
                  required
                />
              </li>
              <li>
                <label for="mensaje">Mensaje</label>
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
