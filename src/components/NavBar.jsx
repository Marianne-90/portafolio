import { useState, useEffect, useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MainContext } from "../context/MainContext";
import { data as dataList } from "../data/data";
import { dataEs } from "../data/dataEs";

export const NavBar = ({ state }) => {
  const [menuView, setMenuView] = useState(true);
  const [position, setPosition] = useState(0);
  const { data, setData, setLoaded } = useContext(MainContext);

useEffect(()=>{
  setData({...dataList})
  setLoaded(true)
  
},[]) 

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

  const handleLenguaje = () => {
    
if(data.language === "eng") {
  setData({...dataEs})
}else if(data.language === "esp"){
  setData({...dataList})
}



  };

  return (
    <nav className={state ? "navbar-fixed" : ""}>
      <span onClick={() => setMenuView(!menuView)}>
        <AiOutlineMenu size={30} />
      </span>
      <div className={menuView ? "menu menuHide" : "menu"}>
        <a href="#home">{data.language === "eng"? "HOME" : "INICIO"}</a>
        <a href="#skills">{data.language === "eng"? "SKILLS" : "COMPETENCIAS"}</a>
        <a href="#education">{data.language === "eng"? "EDUCATION": "EDUCACION"}</a>
        <a href="#work">{data.language === "eng"? "WORK EXPERIENCE": "EXPERIENCIA"}</a>
        <a href="#contact">{data.language === "eng"? "CONTACT": "CONTACTO"}</a>
        <button onClick={handleLenguaje}>{data.language}</button>
      </div>
    </nav>
  );
};
