import { WorkMap } from "./WorkMap";
import { data } from "../data/data.js";


export const Work = () => {

  const { jobs } = data;

  return (
    <section id="work">
      <div className="grand-title">
        <h4 data-ix="slowfade-scroll-bigs">WORK EXPERIENCE!</h4>
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
