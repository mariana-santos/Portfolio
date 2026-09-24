import "./style.css";
import React, { useState } from "react";

import pic from "../../assets/about-picture.webp";
import { useConfig } from "../../contexts/config";
import EngineerView from "./EngineerView";
import PersonView from "./PersonView";
import Switch from "../Switch";

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

      <div className="about-intro">
        <p>{t(`home.about.switch.intro`)}</p>
        <div className="switch-view-wrapper">
          <Switch onChange={toggleView} />
          <div className="switch-view-labels">
            <span className="switch-view-label">{t(`home.about.switch.view.${view}.label`)}</span>
            <span className="switch-view-subtitle">{t(`home.about.switch.view.${view}.subtitle`)}</span>
          </div>
        </div>
      </div>

      {VIEWS[view]}
      
      <span className="code close">{t("home.about.title")}</span>
    </section>
  );
}
