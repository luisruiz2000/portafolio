import React from "react";
import { Link } from "react-router-dom";
import Language from "../Language/index.language";
import { useTranslation } from "react-i18next";
import logoProjects from "../../../assets/icon/projects.png";
import {
  container_header,
  nav_header,
  nav_a,
  movile_none,
  iconProjects,
} from "./Header.module.css";
const Header = () => {
  const [t] = useTranslation("global");

  return (
    <div
      className={container_header}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Language />
      <nav className={nav_header}>
        <a className={`${nav_a} ${movile_none}`} href="#main">
          {t("header.beginning")}
        </a>
        <a className={`${nav_a} ${movile_none}`} href="#technologies">
          {t("header.technologies")}
        </a>
        <a className={`${nav_a} ${movile_none}`} href="#contac">
          {t("header.contact")}
        </a>
        <a
          href="./Emprendimiento.pdf"
          target="blanck"
          className={`${nav_a} ${movile_none}`}
        >
          {t("header.certificates")}
        </a>

        <Link to="/projects" className={nav_a}>
          <img className={iconProjects} src={logoProjects} />
          {t("header.projects")}
        </Link>
      </nav>
    </div>
  );
};

export default Header;
