import React from "react";
import "./Certificates.css";
import BtnComponent from "../BtnComponent/BtnComponent";

const CertificateComponent = ({
  img,
  cardTitle,
  cardText,
  urlBtn,
}) => {
  return (
    <div className="card" style={{ width: "18rem", height: "auto" }}>
      <img src={img} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title fw-bold">{cardTitle}</h5>
        <p className="card-text colorTitle fw-bold">{cardText}</p>
        <BtnComponent viwUrl={urlBtn} textBtn="Ver Certificado" />
      </div>
    </div>
  );
};

export default CertificateComponent;
