import React from "react";
import "./NavBar.css";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div data-aos="fade-down" className="sticky-top">
      <nav className="navbar navbar-expand-lg p-0 navContent px-5">
        <div className="container-fluid">
          <a className="navbar-brand logo fs-1" href="#">
            LF
          </a>
          <div className="iconsNavDisable">
            <i class="bi bi-linkedin text-white"></i>
            <i class="bi bi-github text-white"></i>
          </div>
          <button
            className="navbar-toggler bg-white border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className="nav-link"
                activeClass="active"
                to="header"
                spy={true}
                smooth={true}
                offset={-50}
                duration={300}>
                Inicio
              </Link>
              <Link
                className="nav-link"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={300}>
                Proyectos
              </Link>
              <Link
                className="nav-link"
                activeClass="active"
                to="certificates"
                spy={true}
                smooth={true}
                offset={-50}
                duration={300}>
                Certificados
              </Link>
              <Link
                className="nav-link"
                activeClass="active"
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-50}
                duration={300}>
                Sobre mí
              </Link>
            </div>
          </div>
        </div>

        <div className="iconsNavActivo">
          <a
            target="_blank"
            href="https://github.com/luisruiz2000"
            className="bi bi-github text-white"></a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/luis-fernando-rengifo-ruiz-9b5290245/"
            className="bi bi-linkedin text-white"></a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
