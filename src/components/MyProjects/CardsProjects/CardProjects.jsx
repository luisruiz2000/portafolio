import React from "react";
import "./cardsProjects.css";
const CardProjects = ({ title, description, icons, img, urlProjects }) => {
  return (
    <article data-aos="fade-up-right" className="container cardProjects">
      <div className="contentInfoCard">
        <strong className="title">{title}</strong>
        <p className="description">{description}</p>
        <div className="iconsCards">
          {icons.map((icon, index) => {
            return <img key={index} src={icon} width={30} />;
          })}
        </div>
        <a href={urlProjects} target="_blank"  class="btn btn-light btnProjects">
          IR AL PROYECTO <i class="bi bi-eye ms-2"></i> 
        </a>
      </div>
      <img src={img} className="imgProject img-fluid" />
    </article>
  );
};

export default CardProjects;
