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

  const isEngineer = view === "engineer";

  return (
    <section className="container" id="about" data-aos="fade-up">
      <h2 className="code">{t("home.about.title")}</h2>

      <div className="about-intro">
        <p className="about-intro-note">{t("home.about.switch.intro.note")}</p>
        <div className="view-doors" role="tablist" aria-label="About me views">
          <button
            type="button"
            role="tab"
            aria-selected={isEngineer}
            className={`view-door ${isEngineer ? "active" : ""}`.trim()}
            onClick={() => setView("engineer")}
          >
            <span className="view-door-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="8 6 2 12 8 18" />
                <polyline points="16 6 22 12 16 18" />
              </svg>
            </span>
            <span className="view-door-copy">
              <span className="view-door-title">{t("home.about.switch.engineer.title")}</span>
              <span className="view-door-label">{t("home.about.switch.engineer.label")}</span>
            </span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={!isEngineer}
            className={`view-door ${!isEngineer ? "active" : ""}`.trim()}
            onClick={() => setView("person")}
          >
            <span className="view-door-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
              </svg>
            </span>
            <span className="view-door-copy">
              <span className="view-door-title">{t("home.about.switch.person.title")}</span>
              <span className="view-door-label">{t("home.about.switch.person.label")}</span>
            </span>
          </button>
        </div>
      </div>

      {VIEWS[view]}

      <span className="code close">{t("home.about.title")}</span>
    </section>
  );
}
