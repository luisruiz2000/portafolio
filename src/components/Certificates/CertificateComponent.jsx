import React from "react";
import "../../assets/CSS/Certificates.css";

const CertificateComponent = ({
  img,
  cardTitle,
  cardText,
  urlBtn,
}) => {
  return (
    <div className="card bg-black" style={{ width: "18rem", height: "60vh" }}>
      <img data-aos="flip-down"  src={img} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title fw-bold">{cardTitle}</h5>
        <p className="card-text">{cardText}</p>
        <a href={urlBtn} target="_black" className="btn btn-primary">
          Ver Certificado
        </a>
      </div>
    </div>
  );
};

export default CertificateComponent;
