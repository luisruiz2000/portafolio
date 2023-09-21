import React from "react";
import '../../assets/CSS/Certificates.css'
import webRespondivo from '../../assets/image/responsiWebCertificate.webp'
import jsAnsStructuraDatos from '../../assets/image/certificateJs.jpeg'
const Cetificates = () => {
  return (
    <div id="certificates" className="certificates" data-aos="zoom-in">
      <center className="titleCertificates fs-1">Certificados</center>
      <section className="allCertificates">
        <a target="_blank" href="https://www.freecodecamp.org/certification/LuisRuiz/responsive-web-design">
          <img className='certificatesImg' src={webRespondivo} />
          <p className="fs-4">Responsive web design</p>
        </a>
        <a target="_blank" href="https://www.freecodecamp.org/certification/LuisRuiz/javascript-algorithms-and-data-structures">
          <img className='certificatesImg' src={jsAnsStructuraDatos} />
          <p className="fs-4">Javascript algorithms and data structures</p>
        </a>
      </section>

      <center className="titleCertificates fs-1">¡Y voy por mas!</center>
    </div>
  )
}

export default Cetificates;