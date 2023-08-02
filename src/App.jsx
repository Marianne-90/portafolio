import "./App.css";
import {
  Education,
  Home,
  NavBar,
  Proyects,
  Skills,
  Work,
  Contact,
  Bunny,
} from "./components/index";
import { Base } from "./img/game/base";

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
        <Bunny/>
        <Base/>
        <Contact />
      </section>
    </>
  );
}

export default App;
