import React from "react";
import icon_html from "../../../assets/icon/icon_html.png";
import icon_css from "../../../assets/icon/icon_css.png";
import icon_js from "../../../assets/icon/icon_js.png";
import icon_git from "../../../assets/icon/icon_git.png";
import icon_sass from "../../../assets/icon/icon_sass.png";
import icon_react from "../../../assets/icon/icon_react.png";
import icon_redux from "../../../assets/icon/icon_redux.png";
import icon_node from "../../../assets/icon/icon_node.png";
import icon_vue from "../../../assets/icon/icon_vue.png";
import icon_sql from "../../../assets/icon/icon_sql.png";
import icon_bootstrap from "../../../assets/icon/icon_bootstrap.png";

import { useTranslation } from "react-i18next";
import {
  container_t,
  container_icon,
  titles_technologies,
  icons_technologies,
} from "./Technologies.module.css";

const Technologies = () => {
  const [t] = useTranslation("global");

  return (
    <div className={container_t} id="technologies">
      <div>
        <h2 className={titles_technologies}>{t("technologies.title")}</h2>
        <hr />
        <div className={container_icon}>
          <img className={icons_technologies} src={icon_html} alt="icon" />
          <img className={icons_technologies} src={icon_css} alt="icon" />
          <img className={icons_technologies} src={icon_js} alt="icon" />
          <img className={icons_technologies} src={icon_bootstrap} alt="icon" />
          <img className={icons_technologies} src={icon_sass} alt="icon" />
          <img className={icons_technologies} src={icon_react} alt="icon" />
          <img className={icons_technologies} src={icon_vue} alt="icon" />
          <img className={icons_technologies} src={icon_redux} alt="icon" />
          <img className={icons_technologies} src={icon_node} alt="icon" />
          <img className={icons_technologies} src={icon_sql} alt="icon" />
          <img className={icons_technologies} src={icon_git} alt="icon" />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Technologies;
