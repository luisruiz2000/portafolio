import React from "react";
import "../../assets/CSS/Header.css";
import linkedin from "./../../assets/icon/icon_linkedin.png";
import gitHub from "./../../assets/icon/icon_github.png";
import instagram from "./../../assets/icon/icon_instagram.png";
import whatsApp from "./../../assets/icon/icon_wpp.png";

const Header = () => {
  return (
    <div
      className="containerHeader d-flex  align-items-center justify-content-center"
      id="header"
      data-aos="flip-right"
    >
      <div
        data-aos="flip-left"
        className="p-5 px-5 d-flex align-items-center justify-content-center flex-column textHeader"
      >
        <h1 className="text-center" data-aos="fade-up" data-aos-duration="2000">
          Soy Luis Fernando Rengifo <br />
          Desarrollador Front End
        </h1>
        <div className="d-flex justify-content-evenly w-100 flex-wrap mt-3">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/luis-fernando-rengifo-ruiz-9b5290245/"
          >
            <img className="iconContact" src={linkedin} />
          </a>
          <a target="_blank" href="https://github.com/luisruiz2000">
            <img className="iconContact" src={gitHub} />
          </a>
          <a target="_blank" href="https://www.instagram.com/moroxxo._.l/">
            <img className="iconContact" src={instagram} />
          </a>
          <a target="_blank" href="https://wa.link/nxmibr">
            <img className="iconContact" src={whatsApp} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
