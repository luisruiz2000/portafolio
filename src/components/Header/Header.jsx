import React from "react";
import "../../assets/CSS/Header.css";
import linkedin from "./../../assets/icon/icon_linkedin.png";
import gitHub from "./../../assets/icon/icon_github.png";
import instagram from "./../../assets/icon/icon_instagram.png";
import whatsApp from "./../../assets/icon/icon_wpp.png";

const Header = () => {
  return (
   <div id="header" className="containerHeader d-flex align-items-center justify-content-center flex-column">
    <section className="bgBlur textHeader w-50 p-5 fs-5 text-center">
      <span className="fs-1">¡Hola!</span> Soy Luis Fernando, un desarrollador front-end junior con experiencia en proyectos freelance y trabajos personales. Me apasiona el diseño web y la tecnología, y siempre busco nuevas formas de aprender, emprender y mejorar mis habilidades. En mi tiempo libre, disfruto montar en bicicleta, viajar y tomar café. Estoy emocionado de seguir creciendo en el mundo del desarrollo web.
    </section>
    <section className="bgBlur px-5 pb-3">
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
    </section>
   </div>
      
  );
};

export default Header;
