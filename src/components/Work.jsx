import { WorkMap } from "./WorkMap";
import { data } from "../data/data.js";
import { bunnyData } from "../data/bunnyData.js";
import { BunnyAnimation } from "./BunnyAnimation.jsx";



export const Work = () => {
  
  //LA ANIMACIÓN DEL CONEJO
  const { programingBunny } = bunnyData;
  const { jobs } = data;

  return (
    <section id="work">
      <BunnyAnimation width={200} height={100} data={programingBunny} speed={20}/>
      <div className="grand-title">
        <h4 data-ix="slowfade-scroll-bigs">WORK EXPERIENCE</h4>
      </div>
      <div className="josbContainer">
        <div className="box"></div>
        {jobs.map((job) => (
          <WorkMap {...job} key={job.company}/>
        ))}
      </div>
    </section>
  );
};
