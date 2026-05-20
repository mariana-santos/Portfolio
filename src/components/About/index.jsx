import "./style.css";
import React from "react";

import pic from "../../assets/about-picture.webp";
import { useConfig } from "../../contexts/config";

export default function About() {
  const { t } = useConfig();

  return (
    <section className="container" id="about" data-aos="fade-up">
      <h2 className="code">{t("home.about.title")}</h2>
      <div className="column text-about">{t("home.about.body")}</div>

      <div className="column wrapper-pic" data-aos="fade-down">
        <div className="pic">
          <div className="line-element" />
          <img
            src={pic}
            alt={t("home.about.image-alt")}
          />
        </div>
      </div>
      <span className="code close">{t("home.about.title")}</span>
    </section>
  );
}
