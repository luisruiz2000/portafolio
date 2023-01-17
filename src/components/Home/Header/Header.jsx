import React from "react";
import { container_header, nav_header, nav_a } from "./Header.module.css";
import { Link } from "react-router-dom";
import Language from "../Language/index.language";
import { useTranslation } from "react-i18next";
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
        <a className={nav_a} href="#main">
          {t("header.beginning")}
        </a>
        <a className={nav_a} href="#technologies">
          {t("header.technologies")}
        </a>
        <a className={nav_a} href="#contac">
          {t("header.contact")}
        </a>
        <a href="./Emprendimiento.pdf" target="blanck" className={nav_a}>
          {t("header.certificates")}
        </a>

        <Link to="projects" className={nav_a}>
          {t("header.projects")}
        </Link>
      </nav>
    </div>
  );
};

export default Header;
