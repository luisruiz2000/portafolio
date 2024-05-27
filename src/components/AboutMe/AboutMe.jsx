import React from "react";
import "../../assets/CSS/AboutMe.css";

import myAvatar from "../../assets/image/myAvatar.svg";

import IconJs from "../../assets/icon/icon_js.png";
import IconReact from "../../assets/icon/icon_react.png";
import IconRedux from "../../assets/icon/icon_redux.png";
import IconCss from "../../assets/icon/icon_css.png";
import IconNodejs from "../../assets/icon/icon_node.png";
import IconHtml from "../../assets/icon/icon_html.png";
import IconVue from "../../assets/icon/icon_vue.png";
import IconSQL from "../../assets/icon/icon_sql.png";
import IconSass from "../../assets/icon/icon_sass.png";
import iconGitHub from "../../assets/icon/icon_github.png";
import IconBotstrap from "../../assets/icon/icon_bootstrap.png";
import iconGit from "../../assets/icon/icon_git.png";

const AboutMe = () => {
  return (
    <section id="aboutMe" className="container">
      <div data-aos="flip-left" className="textAbout">
        <h2 className="titleFontFamily titleAboutMe">Sobre Mí</h2>
        <span className="descriptionAboutMe">
          <p>
            Soy Luis Fernando, un desarrollador full stack con experiencia en la
            creación de software de calidad. Comencé mi camino en la
            programación de forma autodidacta, dominando tecnologías como HTML,
            CSS y JavaScript moderno. Me especialicé en frameworks como React,
            lo que me ha permitido desarrollar aplicaciones web robustas y
            escalables.
          </p>
          <p>
            {" "}
            Recientemente, trabajé en Santos Blockchain como parte del equipo de
            front-end, contribuyendo al desarrollo de una billetera digital.
            Aplicando mis habilidades en React, SQL y otras tecnologías, ayudé
            al éxito del proyecto.
          </p>
          <p>
            Soy proactivo, con una fuerte ética de trabajo y un gran interés por
            aprender continuamente. Además, tengo varios certificados y
            actualmente estoy estudiando una técnica en programación de software
            en el Sena. Si buscas un desarrollador full stack comprometido, con
            habilidades en React y una amplia gama de tecnologías, ¡estoy listo
            para contribuir a tu próximo proyecto!
          </p>
        </span>
        <div className="iconsAboutMe">
          <img className="iconAboutMe" src={IconHtml} width={40} />
          <img className="iconAboutMe" src={IconCss} width={40} />
          <img className="iconAboutMe" src={IconJs} width={40} />
          <img className="iconAboutMe" src={IconBotstrap} width={40} />
          <img className="iconAboutMe" src={IconSass} width={40} />
          <img className="iconAboutMe" src={IconReact} width={40} />
          <img className="iconAboutMe" src={IconVue} width={40} />
          <img className="iconAboutMe" src={IconNodejs} width={40} />
          <img className="iconAboutMe" src={IconRedux} width={40} />
          <img className="iconAboutMe" src={IconSQL} width={40} />
          <img className="iconAboutMe" src={iconGitHub} width={40} />
          <img className="iconAboutMe" src={iconGit} width={40} />
        </div>
      </div>
      <article data-aos="zoom-in-up" className="text-center">
        <img src={myAvatar} className="myAvatar" />
      </article>
    </section>
  );
};

export default AboutMe;
