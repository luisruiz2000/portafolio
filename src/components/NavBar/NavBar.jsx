import React from "react";
import "../../assets/CSS/NavBar.css";

const NavBar = () => {
  return (
    <div className="fixed-top">
      <nav className="navbar navbar-expand-lg bgNav">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon iconNav"></span>
          </button>
          <a
            className="navbar-brand text-white textNav"
            href="./Luis_Fernando.pdf"
            target="_blank"
          >
            Ver Curriculum
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white textNav"
                  aria-current="page"
                  href="#header"
                >
                  | Inicio |
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-white textNav"
                  aria-current="page"
                  href="#myProjects"
                >
                  | Proyectos |
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-white textNav"
                  aria-current="page"
                  href="#technologies"
                >
                  | Tecnologias |
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
