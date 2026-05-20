import "./style.css";

import pic from "../../assets/main-picture.jpg";

import { React } from "react";

import { useConfig } from "../../contexts/config";

export default function Hero() {
  const { t } = useConfig();

  return (
    <section className="container" id="hero">
      <div className="column text" data-aos="fade-up">
        <h1 className="gradient-text">
          <span className="light">{t("home.name")}. </span> <br />
          {t("home.role-title")}
        </h1>

        <div className="smaller">{t("home.subtitle")}</div>
      </div>

      <div className="column wrapper-pic" data-aos="fade-down">
        <div className="pic">
          <div className="line-element" />
          <img
            src={pic}
            alt={t("home.hero.image-alt")}
            id="main-pic"
          />
        </div>
      </div>
    </section>
  );
}
