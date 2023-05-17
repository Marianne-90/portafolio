import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export const NavBar = ({ state }) => {
  const [menuView, setMenuView] = useState(true);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition !== position) {
        setPosition(scrollPosition);
        setMenuView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);

  return (
    <nav className={state ? "navbar-fixed" : ""}>
      <span onClick={() => setMenuView(!menuView)}>
        <AiOutlineMenu size={30} />
      </span>
      <div className={menuView ? "menu menuHide" : "menu"}>
        <a href="#home">HOME</a>
        <a href="#skills">SKILLS</a>
        <a href="#education">EDUCATION</a>
        <a href="#work">WORK EXPERIENCE</a>
        <a href="#contact">CONTACT</a>
      </div>
    </nav>
  );
};
