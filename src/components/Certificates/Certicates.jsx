import React from "react";
import "./Certificates.css";

import webResponsivo from "../../assets/image/responsiWebCertificate.jpg";
import jsAnsStructuraDatos from "../../assets/image/certificateJs.jpg";
import CertificateComponent from "./CertificateComponent";
import JsUdemy from "../../assets/image/JavaScriptUdemy.jpg";
import imgEmprendimiento from "../../assets/image/CertificadoEmprendimiento.jpg";
import CertificadoEmprendimiento from "../../assets/image/EmprendimientoSena.pdf"

const Certificates = () => {
  return (
    <div id="certificates" className="bgAllComponent">
      <h2 className="titleFontFamily text-white">Certificados</h2>
      <br />
      <div className="cards">
        <CertificateComponent
          className="card"
          img={jsAnsStructuraDatos}
          cardTitle="JS algorithms & data structures"
          cardText="FreeCodeCam"
          urlBtn="https://www.freecodecamp.org/certification/LuisRuiz/javascript-algorithms-and-data-structures"
        />
        <CertificateComponent
          className="card"
          img={webResponsivo}
          cardTitle="Responsive web design"
          cardText="FreeCondeCam"
          urlBtn="https://www.freecodecamp.org/certification/LuisRuiz/responsive-web-design"
        />
        <CertificateComponent
          className="card"
          img={JsUdemy}
          cardTitle="JavaScript Moderno"
          cardText="Udemy"
          urlBtn="https://www.udemy.com/certificate/UC-d1c2f5d4-7b36-4b7c-aae2-b5860f654571/"
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
