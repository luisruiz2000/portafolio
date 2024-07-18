import React from "react";
import "./Header.css";
import BtnComponent from "../BtnComponent/BtnComponent.jsx";

const Header = () => {
  return (
    <header id="header">
      <h2 data-aos="fade-up" className="titleHeader titleFontFamily">
        <span className="m-0">
          Soy <span className="colorTitle">Luis Fernando</span>,
        </span>
        <br />
        <span className="m-0" colorTitle>
          Desarrollador Full Stack
        </span>
        <br />
        <span className="m-0">
          {" "}
          <span className="colorTitle">+2 años</span> de experiencia
        </span>
      </h2>
      <div className="containerBtn color-white">
        <BtnComponent viwUrl="/LuisFernandoCV.pdf" textBtn="Ver currículum" />
      </div>
    </header>
  );
};

export default Header;
