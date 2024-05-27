import React from "react";
import "../../assets/CSS/Header.css";
import GitHub from "../../assets/icon/icon_github.png";
import Linkedin from "../../assets/icon/icon_linkedin.png";

const Header = () => {
  return (
    <header id="header">
      <h2 data-aos="fade-up" className="titleHeader titleFontFamily">
        Bienvenido a mi portafolio
        <br />
        Soy Luis Fernando
        <br />
        Desarrollador Full Stack
      </h2>
      <div className="iconsHeader">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/luis-fernando-rengifo-ruiz-9b5290245/"
          className="btn btn-secondary iconBtn">
          <img src={Linkedin} width={50} />
        </a>
        <a
          target="_blank"
          href="https://github.com/luisruiz2000"
          className="btn btn-secondary iconBtn">
          <img src={GitHub} width={50} />
        </a>
      </div>
    </header>
  );
};

export default Header;
