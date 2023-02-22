import React from "react";
import "../../assets/CSS/Header.css";
import icon_gitHub from "../../assets/icon/icon_github.png";
import icon_linkedin from "../../assets/icon/icon_linkedin.png";
import icon_instagra from "../../assets/icon/icon_instagram.png";
import icon_fb from "../../assets/icon/icon_fb.png";

const Nav = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-5 py-2 fixed-top">
      <div className="container-fluid">
        <a
          href="./Luis_Fernando.pdf"
          target="blanck"
          className="text-decoration-none"
        >
          <button
            data-aos="fade-down"
            type="button"
            className="px-5 py-2 text-white btnMenu border border-dark rounded-3"
          >
            Ver Curriculum
          </button>
        </a>
        <button
          data-aos="fade-down"
          className="navbar-toggler btnMenu"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item mb-2 text-center">
                <a
                  className="nav-link active bg-secondary"
                  aria-current="page"
                  href="#header"
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item text-center mb-2">
                <a className="nav-link active bg-secondary" href="#abautMe ">
                  Un poco de mi
                </a>
              </li>
              <li className="nav-item text-center mb-2">
                <a className="nav-link active bg-secondary" href="#myProjects">
                  Mis Proyectos
                </a>
              </li>
              <li className="nav-item text-center mb-2">
                <a
                  className="nav-link active bg-secondary"
                  href="#technologies"
                >
                  Tecnologias
                </a>
              </li>
              <li class="nav-item dropdown">
                <p
                  class="nav-link dropdown-toggle fs-5"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  contáctame
                </p>
                <ul class="dropdown-menu">
                  <div className="text-center d-flex justify-content-evenly">
                    <a
                      href="https://www.linkedin.com/in/luis-fernando-rengifo-ruiz-9b5290245/"
                      target="_blank"
                    >
                      <img width="50" src={icon_linkedin} />
                    </a>
                    <a
                      href="https://www.instagram.com/moroxxo._.l/"
                      target="_blank"
                    >
                      <img width="50" src={icon_instagra} />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=100008543585013"
                      target="_blank"
                    >
                      <img width="50" src={icon_fb} />
                    </a>
                    <a href="https://github.com/luisruiz2000" target="_blank">
                      <img width="50" src={icon_gitHub} />
                    </a>
                  </div>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li className="text-center">
                    <p>luisruiz462000@gmail.com</p>
                    <p>(+57) 32059515331</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
