import React from "react";
import { useTranslation } from "react-i18next";
import { container_lng, select_lng } from "./lenguage.module.css";
const lenguage = () => {
  const [t, i18n] = useTranslation("global");

  const selectLenguage = () => {
    const select = document.getElementById("lenguage");
    const lenguage = select.value;
    if (lenguage === "es") {
      i18n.changeLanguage("es");
    } else if (lenguage === "en") {
      i18n.changeLanguage("en");
    }
  };

  return (
    <div className={container_lng} data-aos="fade-left">
      <select
        className={select_lng}
        onChange={selectLenguage}
        name="lenguege"
        id="lenguage"
      >
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};

export default lenguage;

// onClick = {() => i18n.changeLanguage('en')}
