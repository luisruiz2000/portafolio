import React from "react";
import projectWeather from "../../assets/image/projectWeather.png";
import projectPokemon from "../../assets/image/projectPokemon.png";
import projectTrading from "../../assets/image/projectTrading.png";
import projectAmatrix from "../../assets/image/projectAmatrix.png";
import projectRickAndMorty from "../../assets/image/projectRickAndMorty.png";
import "../../assets/CSS/MyProjects.css";
const MyProjects = () => {
  return (
    <center className="px-5 pb-5 pt-3" id="myProjects">
      <h1 data-aos="fade-up" className="titleTec fw-bold text-white mb-4 bg p-2 w-75 mx-5">Mi experiencia y proyectos</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 containerMyProjects">
        <a
          data-aos="fade-up"
          data-aos-duration="500"
          target="_blank"
          className="col text-decoration-none text-reset"
          href="https://good-weather-forecast-app.netlify.app"
        >
          <div className="card h-100  linkMyProjects">
            <img
              src={projectWeather}
              className="card-img-top border"
              alt="Imagen"
            />
            <div className="card-body bgBlur">
              <h5 className="card-title fw-bold">Predicción meteorológica</h5>
              <p className="card-text">
                En esta App podrá ver el clima de la ciudad ingresada, y varios
                datos mas incluyendo predicciones del clima en las próximas 6
                horas (React).
              </p>
            </div>
          </div>
        </a>

        <a
          data-aos="fade-up"
          data-aos-duration="500"
          target="_blank"
          className="col text-decoration-none text-reset"
          href="https://landing-page-tranding.netlify.app

"
        >
          <div className="card h-100  linkMyProjects">
            <img
              src={projectTrading}
              className="card-img-top border"
              alt="Imagen"
            />
            <div className="card-body bgBlur">
              <h5 className="card-title fw-bold">Traiding</h5>
              <p className="card-text">
                Landing Page de Traiding con Presentación, opción de ingles o
                español, preguntas frecuentes y con formularios validados para
                iniciar sesión o para registrarse. (vue)
              </p>
            </div>
          </div>
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
          target="_blank"
          className="col text-decoration-none text-reset"
          href="https://search-pokemones.netlify.app"
        >
          <div className="card h-100  linkMyProjects">
            <img
              src={projectPokemon}
              className="card-img-top border"
              alt="Imagen"
            />
            <div className="card-body bgBlur">
              <h5 className="card-title fw-bold">Busca El Pokemon</h5>
              <p className="card-text">
                En Esta App podrás encontrar el pokemon por nombre o por ID,
                arrojando varias características como El nombre, peso, tamaño
                entre otros datos (React)
              </p>
            </div>
          </div>
        </a>

        <a
          data-aos="fade-up"
          data-aos-duration="500"
          target="_blank"
          className="col text-decoration-none text-reset"
          href="https://amatrix.netlify.app/"
        >
          <div className="card h-100  linkMyProjects">
            <img
              src={projectAmatrix}
              className="card-img-top border"
              alt="Imagen"
            />
            <div className="card-body bgBlur">
              <h5 className="card-title fw-bold">Amatix</h5>
              <p className="card-text">
                Landing Page con Presentación, opción de ingles o español,
                instrucciones, términos y con formularios validados para iniciar
                sesión o para registrarse. (Vue)
              </p>
            </div>
          </div>
        </a>
        <a
          data-aos="fade-up"
          data-aos-duration="500"
          target="_blank"
          className="col text-decoration-none text-reset"
          href="https://rink-and-morty-app.netlify.app"
        >
          <div className="card h-100  linkMyProjects">
            <img
              src={projectRickAndMorty}
              className="card-img-top border"
              alt="Imagen"
            />
            <div className="card-body bgBlur">
              <h5 className="card-title fw-bold">Personajes de Rick and Morty</h5>
              <p className="card-text">
                Consumiendo Api para mostrar los personajes de la serie Rick and
                Morty con algunas características de estos. (React)
              </p>
            </div>
          </div>
        </a>
      </div>
    </center>
  );
};

export default MyProjects;
