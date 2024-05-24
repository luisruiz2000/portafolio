import React from "react";
import "./cardsProjects.css";
const CardProjects = ({ title, description, icons, img, ulrProject }) => {
  return (
    <a data-aos="fade-right" href={ulrProject} target="_blank">
      <article className="container cardProjects">
        <div className="contentInfoCard">
          <h2 className="fw-bolder">{title}</h2>
          <p className="description">{description}</p>
          <div className="iconsCards">
            {icons.map((icon, index) => {
              return <img key={index} src={icon} width={50} />;
            })}
          </div>
        </div>
        <img src={img} className="imgProject"/>
      </article>
    </a>
  );
};

export default CardProjects;
