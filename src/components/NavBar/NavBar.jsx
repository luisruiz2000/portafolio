import React from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
import IconCopy from "./IconoCopy/IconCopy";

const NavBar = () => {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg p-0 navContent px-5">
        <div className="container-fluid">
          <a className="navbar-brand logo fs-1" href="#">
            LF
          </a>
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
              <div className="iconsNavMovil">
                <a
                  title="GitHub"
                  target="_blank"
                  href="https://github.com/luisruiz2000"
                  className="bi bi-github iconNav"></a>
                <a
                  title="Linkedin"
                  target="_blank"
                  href="https://www.linkedin.com/in/luis-fernando-rengifo-ruiz-9b5290245/"
                  className="bi bi-linkedin iconNav"></a>
                <IconCopy
                  classIcon="bi bi-envelope-fill iconNav"
                  valueCopy="luisruiz462000@gmail.com"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="iconsNavActivo">
          <IconCopy
            classIcon="bi bi-envelope-fill iconNav"
            valueCopy="luisruiz462000@gmail.com"
          />
          <a
            title="GitHub"
            target="_blank"
            href="https://github.com/luisruiz2000"
            className="bi bi-github iconNav"></a>
          <a
            title="Linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/luis-fernando-rengifo-ruiz-9b5290245/"
            className="bi bi-linkedin iconNav"></a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
