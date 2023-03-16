import React from "react";
import "../../assets/CSS/Technologies.css";
import icon_html from "../../assets/icon/icon_html.png";
import icon_css from "../../assets/icon/icon_css.png";
import icon_js from "../../assets/icon/icon_js.png";
import icon_react from "../../assets/icon/icon_react.png";
import icon_sass from "../../assets/icon/icon_sass.png";
import icon_bootstrap from "../../assets/icon/icon_bootstrap.png";
import icon_vue from "../../assets/icon/icon_vue.png";
import icon_redux from "../../assets/icon/icon_redux.png";
import icon_node from "../../assets/icon/icon_node.png";
import icon_git from "../../assets/icon/icon_git.png";
import icon_github from "../../assets/icon/icon_github.png";
import icon_sql from "../../assets/icon/icon_sql.png";
import icon_vite from "../../assets/icon/icon_vite.svg";

const Technologies = () => {
  return (
    <div className="containerTechnologies text-center" id="technologies">
      <h1
        className="text-white mb-4 bg p-2 w-75 mx-5"
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        Tecnologias
      </h1>
      <div
        className="mx-5 py-1"
        data-aos="zoom-in-left"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        <img className="img-fluit iconTecgnologies" src={icon_html} />
        <img className="img-fluit iconTecgnologies" src={icon_css} />
        <img className="img-fluit iconTecgnologies" src={icon_js} />
        <img className="img-fluit iconTecgnologies" src={icon_react} />
        <img className="img-fluit iconTecgnologies" src={icon_sass} />
        <img className="img-fluit iconTecgnologies" src={icon_bootstrap} />
        <img className="img-fluit iconTecgnologies" src={icon_vue} />
        <img className="img-fluit iconTecgnologies" src={icon_redux} />
        <img className="img-fluit iconTecgnologies" src={icon_node} />
        <img className="img-fluit iconTecgnologies" src={icon_git} />
        <img className="img-fluit iconTecgnologies" src={icon_github} />
        <img className="img-fluit iconTecgnologies" src={icon_sql} />
        <img className="img-fluit iconTecgnologies" src={icon_vite} />
      </div>
    </div>
  );
};

export default Technologies;
