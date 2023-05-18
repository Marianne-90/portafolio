import "./App.css";
import {
  Education,
  Home,
  NavBar,
  Proyects,
  Skills,
  Work,
  Contact,
} from "./components/index";

import React, { useState, useEffect, useRef } from "react";

function App() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= containerRef.current.offsetTop - 100) {
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
      <Home />
      <section className="content" ref={containerRef}>
        <Education />
        <Skills />
        <Proyects />
        <Work />
        <Contact />
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
    </>
  );
}

export default App;
