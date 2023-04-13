import "./WCard.css";

import works from "./../assets/work.json";

function WCard() {
  return (
    <div className="WCardGroup">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
      </style>
      {works.map((work) => (
        <a className="WCard" key={work.id} href={work.link}>
          <div className="overf">
            <img src={work.imgUrl} alt={`${work.name} image`} />
          </div>
          <div className="info">
            <h2>{work.name}</h2>
            <p>{work.desc}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default WCard;
