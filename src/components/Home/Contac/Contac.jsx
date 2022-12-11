import React from "react";
import icon_wpp from "../../../assets/icon/icon_wpp.png";
import icon_linkedin from "../../../assets/icon/icon_linkedin.png";
import icon_instagram from "../../../assets/icon/icon_instagram.png";
import icon_fb from "../../../assets/icon/icon_fb.png";
import {
  content_contac,
  icons_contac,
  container_icons,
} from "./Contac.module.css";

const Contac = () => {
  return (
    <div className={content_contac} id="contac">
      <div className={container_icons}>
        <a href="https://wa.link/7yd8wh" target="blank">
          <img className={icons_contac} src={icon_wpp} alt="icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/luis-fernando-rengifo-ruiz-9b5290245/"
          target="blank"
        >
          <img className={icons_contac} src={icon_linkedin} alt="icon" />
        </a>

        <a href="https://www.instagram.com/morochxx._.l/" target="blank">
          <img className={icons_contac} src={icon_instagram} alt="icon" />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100008543585013"
          target="blank"
        >
          <img className={icons_contac} src={icon_fb} alt="icon" />
        </a>
      </div>
    </div>
  );
};

export default Contac;
