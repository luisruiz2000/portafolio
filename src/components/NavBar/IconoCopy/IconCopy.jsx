import React, { useState } from "react";
import "../NavBar.css";
import { PulseLoader } from "react-spinners";
const IconCopy = ({ classIcon, valueCopy }) => {
  const [textCopy, setTextCopy] = useState(false);
  const [hoverIcon, setHoverIcon] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(valueCopy);
    setTextCopy(true);
    setTimeout(() => {
      setRedirect(true);
      setTextCopy(false);
    }, 2000);
  };

  const handleMouseEnter = () => {
    setHoverIcon(true);
  };

  const handleMouseLeave = () => {
    setHoverIcon(false);
  };

  if (redirect) {
    window.open(
      "https://mail.google.com/mail/u/0/#inbox?compose=new",
      "_blank"
    );
    window.location.reload()
  }

  return (
    <div>
      <a
        onClick={handleCopy}
        className={classIcon}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {/* {textCopy ? <SyncLoader className="loadding" color="#222" /> : ""} */}
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
    </div>
  );
};

export default IconCopy;
