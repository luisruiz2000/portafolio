import React from "react";
import "../../assets/CSS/NavBar.css";

const NavBar = () => {
  return (
    <nav data-aos="fade-down" class="navbar navbar-expand-lg navContent sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <h1 className="log">LF</h1>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" aria-current="page" href="#header">
              Inicio
            </a>
            <a class="nav-link" href="#projects">
              Proyectos
            </a>
            <a class="nav-link" href="#aboutMe">
              Sobre mí
            </a>
            <a class="nav-link" href="#certificates" aria-disabled="true">
              Certificados 
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
