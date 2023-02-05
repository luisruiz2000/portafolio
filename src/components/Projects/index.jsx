import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../Home/Footer/index";
import img_back from "../../assets/image/back.svg";
import img_amatrix from "../../assets/image/img_amatrix.png";
import img_tranding from "../../assets/image/img_trading.png";
import img_pokemon from "../../assets/image/img_pokemon.png";
import weatherApp from "../../assets/image/weatherApp.png";
import rickandmorty from "../../assets/image/rickandmorty.png";
import icon_react from "../../assets/icon/icon_react.png";
import icon_vite from "../../assets/icon/icon_vite.svg";
import icon_css from "../../assets/icon/icon_css.png";
import icon_html from "../../assets/icon/icon_html.png";
import icon_sass from "../../assets/icon/icon_sass.png";
import icon_vue from "../../assets/icon/icon_vue.png";
import icon_js from "../../assets/icon/icon_js.png";
import icon_bootstrap from "../../assets/icon/icon_bootstrap.png";

import {
  container_projects,
  back,
  icon_back,
  text_back,
  all_projects,
  card,
  card_info,
  card_img,
  title_card,
  icon_cards,
} from "./Projects.module.css";
const Projects = () => {
  const [t] = useTranslation("global");

  return (
    <div className={container_projects}>
      <Link to="/" className={back}>
        <img className={icon_back} src={img_back} />
        <span className={text_back}>Rregrasar</span>
      </Link>
      <div className={all_projects}>
        {/* WEATHER APP */}
        <a
          className={card}
          data-aos="fade-up"
          target="blank"
          href="https://good-weather-forecast-app.netlify.app"
        >
          <img className={card_img} src={weatherApp} />
          <div className={card_info}>
            <h3 className={title_card}>Prediccion Meteorologica</h3>
            <div>
              <img className={icon_cards} src={icon_html} />
              <img className={icon_cards} src={icon_css} />
              <img className={icon_cards} src={icon_bootstrap} />
              <img className={icon_cards} src={icon_js} />
              <img className={icon_cards} src={icon_react} />
              <img className={icon_cards} src={icon_vite} />
            </div>
          </div>
        </a>
        {/* LANDING PAGE TRADING */}
        <a
          className={card}
          data-aos="fade-down"
          target="blank"
          href="https://landing-page-tranding.netlify.app"
        >
          <img className={card_img} src={img_tranding} />
          <div className={card_info}>
            <h3 className={title_card}>Landing Page Trading</h3>
            <div>
              <img className={icon_cards} src={icon_html} />
              <img className={icon_cards} src={icon_sass} />
              <img className={icon_cards} src={icon_vue} />
              <img className={icon_cards} src={icon_js} />
            </div>
          </div>
        </a>
        {/* POKEMON APP */}
        <a
          className={card}
          data-aos="fade-up"
          target="blank"
          href="https://search-pokemones.netlify.app"
        >
          <img className={card_img} src={img_pokemon} />
          <div className={card_info}>
            <h3 className={title_card}> Aplicacion De Pokemon</h3>
            <div>
              <img className={icon_cards} src={icon_html} />
              <img className={icon_cards} src={icon_css} />
              <img className={icon_cards} src={icon_js} />
              <img className={icon_cards} src={icon_react} />
              <img className={icon_cards} src={icon_vite} />
            </div>
          </div>
        </a>
        {/* LANDING PAGE AMATRIX */}
        <a
          className={card}
          data-aos="fade-up"
          target="blank"
          href="https://amatrix.netlify.app"
        >
          <img className={card_img} src={img_amatrix} />
          <div className={card_info}>
            <h3 className={title_card}> Landing Page Amatrix</h3>
            <div>
              <img className={icon_cards} src={icon_html} />
              <img className={icon_cards} src={icon_css} />
              <img className={icon_cards} src={icon_js} />
              <img className={icon_cards} src={icon_vue} />
              <img className={icon_cards} src={icon_vite} />
            </div>
          </div>
        </a>
        {/* PI DE RICK AND MORTY */}
        <a
          className={card}
          data-aos="fade-up"
          target="blank"
          href="https://consumiendo-api-rick-and-morty.netlify.app"
        >
          <img className={card_img} src={rickandmorty} />
          <div className={card_info}>
            <h3 className={title_card}>Consumiendo API De Rick And Morty</h3>
            <div>
              <img className={icon_cards} src={icon_html} />
              <img className={icon_cards} src={icon_sass} />
              <img className={icon_cards} src={icon_js} />
              <img className={icon_cards} src={icon_react} />
              <img className={icon_cards} src={icon_vite} />
            </div>
          </div>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
