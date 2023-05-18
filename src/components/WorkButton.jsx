import { useState } from "react";
import { Albis, Faurecia, FreeLancer, Interceramic } from "./work/index";
import { AiFillCloud } from "react-icons/ai";

export const WorkButton = ({ job }) => {
  const [show, setShow] = useState(false);

  const jobComponent = () => {
    switch (job) {
      case "Representaciones Albis":
        return <Albis />;
      case "Interceramic":
        return <Interceramic />;
      case "FreeLancer":
        return <FreeLancer />;
      case "Faurecia Planta Premium":
        return <Faurecia />;
      default:
        return;
    }
  };

  return (
    <>
      <div className={show ? "" : "hide"}>{jobComponent()}</div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "View More"}
      </button>
    </>
  );
};
