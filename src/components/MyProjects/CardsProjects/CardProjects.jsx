import React from "react";
import "./cardsProjects.css";
import BtnComponent from "../../BtnComponent/BtnComponent";
const CardProjects = ({ title, description, icons, img, urlProjects, tiempo }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title} <span className="colorTitle">{tiempo}</span></h5>
        <p className="card-text">{description}</p>
        <div className="iconsCards">
          {icons.map((icon, index) => {
            return <img key={index} src={icon} width={30} />;
          })}
        </div>
        <BtnComponent viwUrl={urlProjects} textBtn="Ver Proyecto" classBtn="" />
      </div>
    </div>
  );
};
export default CardProjects;

