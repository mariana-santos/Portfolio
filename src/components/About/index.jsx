import "./style.css";
import React, { useState } from "react";

import pic from "../../assets/about-picture.webp";
import { useConfig } from "../../contexts/config";
import EngineerView from "./EngineerView";
import PersonView from "./PersonView";

export default function About() {
  const { t } = useConfig();

  const [view, setView] = useState("engineer");

  const VIEWS = {
    engineer: <EngineerView />,
    person: <PersonView />,
  };

  const toggleView = () => {
    setView((prevView) => (prevView === "engineer" ? "person" : "engineer"));
  }

  return (
    <section className="container" id="about" data-aos="fade-up">
      <h2 className="code">{t("home.about.title")}</h2>

      <div className="switch-view-wrapper">
        Show me as {" "}
        <span className={`switch-view ${view === "engineer" ? "active" : ""}`} onClick={toggleView}>
          an engineer
        </span>
        <span className="switch-view-separator"> / </span>
        <span className={`switch-view ${view === "person" ? "active" : ""}`} onClick={toggleView}>
          a person
        </span>
      </div>

      {VIEWS[view]}
      
      <span className="code close">{t("home.about.title")}</span>
    </section>
  );
}
