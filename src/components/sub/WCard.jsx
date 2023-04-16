import "./WCard.scss";

import works from "../../assets/work.json";

import { FaGithub } from "react-icons/fa";

function WCard() {
  return (
    <div className="WCardGroup">
      {works.map((work) => (
        <a className="WCard" key={work.id} href={work.link}>
          <div className="overf">
            <img src={work.imgUrl} alt={`${work.name} image`} />
          </div>
          <div className="info">
            <h2>{work.name}</h2>
            <p>{work.desc}</p>

            <a href={work.ghLink}>
              <FaGithub className={work.status ? "gh finish" : "gh unfinish"} size={45}/>
            </a>
          </div>
        </a>
      ))}
    </div>
  );
}

export default WCard;
