import { useState } from "react";
import { Albis, Faurecia, FreeLancer, Interceramic } from "./work/index";
import { AiFillCloud } from "react-icons/ai";
import { MainContext } from "../context/MainContext";
import { useContext } from "react";

export const WorkButton = ({ job }) => {
  const [show, setShow] = useState(false);
  const { data } = useContext(MainContext);

  const jobComponent = () => {
    switch (job) {
      case "Representaciones Albis":
        return <Albis len={data.language}/>;
      case "Interceramic":
        return <Interceramic len={data.language}/>;
      case "FreeLancer":
        return <FreeLancer len={data.language}/>;
      case "Faurecia Planta Premium":
        return <Faurecia len={data.language}/>;
      default:
        return;
    }
  };

  const hide = () => {
    return data.language === "eng"? "Hide" : "Ocultar"
  };

  const viewMore = () => {
    return data.language === "eng"? "View More" : "Ver Más"
  };

  hide()
  return (
    <>
      <div className={show ? "" : "hide"}>{jobComponent()}</div>
      <button onClick={() => setShow(!show)}>
        {show ? hide() : viewMore()}
      </button>
    </>
  );
};
