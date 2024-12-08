import "./style.css";
import React from "react";
import useStrings from "../../hooks/useStrings";

import pic from "../../assets/about-picture.webp";

export default function About() {
  const strings = useStrings();

  return (
    <section className="container" id="about" data-aos="fade-up">
      <h2 className="code">{strings.journey_title}</h2>
      <div className="column text-about">{strings.journey}</div>

      <div className="column wrapper-pic" data-aos="fade-down">
        <div className="pic">
          <div className="line-element" />
          <img
            src={pic}
            alt="Imagem de Mariana Santos apresentando um projeto na B3, bolsa de valores do Brasil."
          />
        </div>
      </div>
      <h2 className="code close">{strings.journey_title}</h2>
    </section>
  );
}
