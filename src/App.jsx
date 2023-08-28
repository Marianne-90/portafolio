import "./App.css";
import { Game } from "./components/game/Game";
import {
  Education,
  Home,
  NavBar,
  Proyects,
  Skills,
  Work,
  Contact,
} from "./components/index";

import React, { useState, useEffect, useRef, useContext } from "react";
import { MainContext } from "./context/MainContext";

function App() {
  const { data } = useContext(MainContext);
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
      {data.language !== undefined && <Home />}
      <section className="content" ref={containerRef}>
        {data.language !== undefined && (
          <>
            <Education />
            <Skills />
            <Proyects />
            <Work />
            <Game />
            <Contact />
          </>
        )}
        {/*> */}
      </section>
    </>
  );
}

export default App;
