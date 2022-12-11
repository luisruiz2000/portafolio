import React from "react";
import { useTranslation } from "react-i18next";
import {
  container_projects,
  myPotho,
  title_name,
  subtitle_projects,
  link_cv,
  btn_cv,
} from "./Projects.module.css";
import img from "../../../assets/image/profile.svg";

const Projects = () => {
  const [t] = useTranslation("global");

  return (
    <div className={container_projects} id="main">
      <img className={myPotho} src={img} alt="Foto" />

      <div>
        <h1 className={title_name}>
          <i>Luis Fernando Rengifo Ruiz</i>
        </h1>
        <p className={subtitle_projects}> {t("main.text_projects")} </p>

        <a className={link_cv}>
          <a
            href="./Luis_Fernando.pdf"
            download
            target="blanck"
            className={btn_cv}
          >
            {t("main.text_btn")}
          </a>
        </a>
      </div>
    </div>
  );
};

export default Projects;
