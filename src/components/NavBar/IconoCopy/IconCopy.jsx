import React, { useState } from "react";
import "../NavBar.css";
import { PulseLoader } from "react-spinners";
const IconCopy = ({ classIcon, valueCopy }) => {
  const [textCopy, setTextCopy] = useState(false);
  const [hoverIcon, setHoverIcon] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(valueCopy);
    setHoverIcon(true)
    setTextCopy(true);
    setTimeout(() => {
      setTextCopy(false);
      window.open("https://mail.google.com/mail/u/0/#inbox?compose=new");
    }, 2500);
  };

  const handleMouseEnter = () => {
    setHoverIcon(true);
  };

  const handleMouseLeave = () => {
    textCopy ? setHoverIcon(true) : setHoverIcon(false);
  };
  return (
    <a
      target="_blank"
      onClick={handleCopy}
      className={classIcon}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {hoverIcon && (
        <div
          className={
            textCopy ? "copy-message bg-success me-5" : "copy-message"
          }>
          {textCopy ? "Correo Copiado" : hoverIcon ? "Enviar Correo" : ""}
          {textCopy ? <PulseLoader color="white" size={8} /> : ""}
        </div>
      )}
    </a>
  );
};

export default IconCopy;
