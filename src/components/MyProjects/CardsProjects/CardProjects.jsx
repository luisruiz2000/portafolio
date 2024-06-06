import React from "react";
import "./cardsProjects.css";
import BtnComponent from "../../BtnComponent/BtnComponent";
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
          <BtnComponent viwUrl={urlProjects} textBtn='Ver Proyecto' classBtn='' />
      </div>
      <img src={img} className="imgProject img-fluid" />
    </article>
  );
};

export default CardProjects;
