import React from "react";
import "../../assets/CSS/Header.css";
import linkedin from "./../../assets/icon/icon_linkedin.png";
import gitHub from "./../../assets/icon/icon_github.png";
import instagram from "./../../assets/icon/icon_instagram.png";
import whatsApp from "./../../assets/icon/icon_wpp.png";
import freeCodeCam from "./../../assets/icon/freeCodeCamIcon.png"

const Header = () => {
  return (
    <div id="header" className="containerHeader d-flex align-items-center justify-content-center flex-column">
      <section data-aos="fade-right" className="textHeader w-50 py-5 fs-5 text-center">
        Soy Luis Fernando, un desarrollador Full Stack junior con experiencia en Trabajos freelance y trabajos personales. Me apasiona el Desarrollo web y la tecnología, y siempre busco nuevas formas de aprender, emprender y mejorar mis habilidades. En mi tiempo libre, disfruto montar en bicicleta, viajar y tomar café. Estoy emocionado de seguir creciendo en el mundo del desarrollo web.
      </section>
      <section data-aos="fade-left" className="px-5 pb-3">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/luis-fernando-rengifo-ruiz-9b5290245/"
        >
          <img className="iconContact mx-2" src={linkedin} />
        </a>
        <a target="_blank" href="https://github.com/luisruiz2000">
          <img className="iconContact mx-2" src={gitHub} />
        </a>
        <a target="_blank" href="https://www.instagram.com/moroxxo._.l/">
          <img className="iconContact mx-2" src={instagram} />
        </a>
        <a target="_blank" href="https://wa.link/nxmibr">
          <img className="iconContact mx-2" src={whatsApp} />
        </a>
        <a target="_blank" href="https://www.freecodecamp.org/LuisRuiz">
          <img className="iconContact mx-2" src={freeCodeCam} />
        </a>

      </section>
    </div>

  );
};

export default Header;
