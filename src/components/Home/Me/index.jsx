import React from "react";
import { useTranslation } from "react-i18next";
import { container_me, card_me, me_text } from "./Me.module.css";
const Me = () => {
  const [t] = useTranslation("global");

  return (
    <div className={container_me}>
      <div className={card_me}>
        <h1>{t("me.title")}</h1>
        <span className={me_text}>{t("me.text")}</span>
      </div>
    </div>
  );
};

export default Me;
