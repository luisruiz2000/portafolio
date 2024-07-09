import React from "react";
import "./Certificates.css";

import webResponsivo from "../../assets/image/responsiWebCertificate.jpg";
import jsAnsStructuraDatos from "../../assets/image/certificateJs.jpg";
import CertificateComponent from "./CertificateComponent";
import JsUdemy from "../../assets/image/JavaScriptUdemy.jpg";
import imgEmprendimiento from "../../assets/image/CertificadoEmprendimiento.jpg";
import CertificadoEmprendimiento from "../../assets/image/EmprendimientoSena.pdf";
import Terminal from "../../assets/image/Terminal.jpeg";
import CertificadoTerminal from "../../assets/image/diploma-terminal.pdf";
import GitGitHub from "../../assets/image/GitGitub.jpeg";
import CertificadoGitGitHub from "../../assets/image/diploma-git-github.pdf";

const Certificates = () => {
  return (
    <div id="certificates" className="bgAllComponent">
      <h2 className="titleFontFamily text-white">Certificados</h2>
      <br />
      <div className="cards">
        <CertificateComponent
          className="card"
          img={JsUdemy}
          cardTitle="JavaScript Moderno"
          cardText="Udemy"
          urlBtn="https://www.udemy.com/certificate/UC-d1c2f5d4-7b36-4b7c-aae2-b5860f654571/"
        />
        <CertificateComponent
          className="card"
          img={jsAnsStructuraDatos}
          cardTitle="JS Algorithms & Data Structures"
          cardText="FreeCodeCamp"
          urlBtn="https://www.freecodecamp.org/certification/LuisRuiz/javascript-algorithms-and-data-structures"
        />
        <CertificateComponent
          className="card"
          img={GitGitHub}
          cardTitle="Profecional en Git y Github"
          cardText="Platzi"
          urlBtn={CertificadoGitGitHub}
          onClick={() => openImage(CertificadoGitGitHub)}
        />
        <CertificateComponent
          className="card"
          img={Terminal}
          cardTitle="Terminal Y Lineas De Comando"
          cardText="Platzi"
          urlBtn={CertificadoTerminal}
          onClick={() => openImage(CertificadoTerminal)}
        />
        <CertificateComponent
          className="card"
          img={webResponsivo}
          cardTitle="Responsive Web Design"
          cardText="FreeCodeCamp"
          urlBtn="https://www.freecodecamp.org/certification/LuisRuiz/responsive-web-design"
        />

        <CertificateComponent
          className="card"
          img={imgEmprendimiento}
          cardTitle="Emprendimiento"
          cardText="SENA"
          urlBtn={CertificadoEmprendimiento}
          onClick={() => openImage(CertificadoEmprendimiento)}
        />
      </div>
    </div>
  );
};

export default Certificates;
