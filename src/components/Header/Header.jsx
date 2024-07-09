import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header id="header">
      <h2 data-aos="fade-up" className="titleHeader titleFontFamily">
        <span className="m-0">
          Soy <span className="colorTitle">Luis Fernando</span>,
        </span>
        <br />
        <span className="m-0" colorTitle>Desarrollador Full Stack</span>
        <br />
        <span className="m-0"> <span className="colorTitle">+2 años</span> de experiencia</span>
      </h2>
    </header>
  );
};

export default Header;
