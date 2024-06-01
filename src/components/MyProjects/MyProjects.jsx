import React from "react";
import "./MyProjects.css";
import CardProjects from "./CardsProjects/CardProjects";

import Chimba from "../../assets/image/chimba.png";
import Trading from "../../assets/image/projectTrading.png";
import Amatrix from "../../assets/image/projectAmatrix.png";
import Carbonera from "../../assets/image/carbonera.png";
import ProjectWeather from "../../assets/image/projectWeather.png";
import PokeDex from "../../assets/image/projectPokemon.png";

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
const MyProjects = () => {
  return (
    <section id="projects" className="projects bgAllComponent">
      <div  className="text-center textProjects">
        <h2 className="titleFontFamily">Proyectos y experiencia</h2>
        <p className="subTitleProjects text-white fs-4">
         ( Todo lo que puedas imaginar, lo puedes programar)
        </p>
      </div>
      <div className="containerCards">
        <CardProjects
          urlProjects="https://chimba.ooo/"
          title="Chimba BlockChain (8 Meses)"
          description="Contribuí al desarrollo de Chimba BlockChain, una billetera digital. En este proyecto, antes de su migración a Angular, implementé nuevas funcionalidades, formularios avanzados, validaciones, vistas dinámicas y un diseño responsivo. Aseguré una experiencia de usuario fluida y optimizada durante mi participación en el desarrollo. "
          icons={[
            IconHtml,
            IconCss,
            IconJs,
            IconReact,
            IconRedux,
            IconSQL,
            iconGitHub,
          ]}
          img={Chimba}
        />

        <CardProjects
          data-aos="fade-right"
          urlProjects="https://landing-page-tranding.netlify.app/"
          title="Landing Page Trading (4 Mes)"
          description="Participé en el desarrollo de una landing page como freelance, Esta página tiene opción página con opciones en inglés y español. Desarrollé formularios de login y registro, así como secciones de preguntas frecuentes y otros aspectos. La landing page resultante es completa y cumple con los objetivos esperados."
          icons={[
            IconHtml,
            IconCss,
            IconSass,
            IconJs,
            IconVue,
            IconNodejs,
            iconGitHub,
          ]}
          img={Trading}
        />
        <CardProjects
          urlProjects="https://amatrix.netlify.app/"
          title="Amatrix (3 Mes)"
          description="Colaboré en la maquetación de una landing page que incorporaba un video de YouTube y secciones de reseñas. Me encargué de desarrollar la estructura y el diseño siguiendo las indicaciones del cliente. El objetivo fue garantizar una experiencia de usuario fluida y optimizada, cumpliendo con los requisitos de la maquetación."
          icons={[
            IconHtml,
            IconCss,
            IconJs,
            IconVue,
            IconNodejs,
            IconSass,
            iconGitHub,
          ]}
          img={Amatrix}
        />

        <CardProjects
          urlProjects="https://tickets.tablaolascarboneras.com/"
          title="Página De Reservas (6 Meses)"
          description="Participé en el desarrollo de una página web para reservar citas para un cliente en España. Mi trabajo consistió en modificar y mejorar el diseño existente, así como en implementar nuevas funcionalidades y vistas. Aunque el proyecto estaba basado en PHP, me enfoqué principalmente en desarrollar la interfaz de usuario con HTML y CSS, además de contribuir con algunos elementos en PHP."
          icons={[IconHtml, IconCss, iconGitHub]}
          img={Carbonera}
        />

        <CardProjects
          urlProjects="https://good-weather-forecast-app.netlify.app/"
          title="Predicción meteorológica (2 Mes)"
          description="En esta aplicación web, se consume la API del clima para mostrar la información meteorológica de la ciudad ingresada, así como otros datos relevantes, incluidas las previsiones del clima para las próximas 6 horas."
          icons={[IconHtml, IconCss, IconJs, IconReact, IconBotstrap]}
          img={ProjectWeather}
        />
        <CardProjects
          urlProjects="https://search-pokemones.netlify.app/"
          title="Pokédex (1 Mes)"
          description="Para esta aplicación, se utilizó un API de Pokémon para buscar información por nombre o ID. Se guardan los datos en una base de datos y se muestran al usuario al buscar un Pokémon."
          icons={[IconHtml, IconCss, IconJs, IconReact, IconBotstrap, IconSQL]}
          img={PokeDex}
        />
      </div>
    </section>
  );
};

export default MyProjects;
