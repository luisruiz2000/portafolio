import React from "react";
import "../../assets/CSS/Header.css";
const Header = () => {
  return (
    <div
      className="containerHeader d-flex  align-items-center justify-content-center"
      id="header"
      data-aos="flip-right"
    >
      <div
        data-aos="flip-left"
        className="p-5 px-5 d-flex align-items-center justify-content-center flex-column textHeader"
      >
        <h1 className="text-center" data-aos="fade-up" data-aos-duration="2000">
          Soy Luis Fernando Rengifo <br />
          Desarrollador Front End
        </h1>
      </div>
    </div>
  );
};

export default Header;
