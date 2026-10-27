import "./style.css";
import { useConfig } from "../../contexts/config";
import { useState } from "react";

import ExperienceDetails from "../ExperienceDetails";
import Timeline from "../Timeline";
import Menu from "../Menu";

import { experiences } from "../../data/experiences";

export default function Experiences() {
  const { t } = useConfig();
  const [selectedOption, setSelectedOption] = useState("work")

  const filteredExperiences = experiences.filter(
    experience => experience.type === selectedOption
  )

  const MENU_OPTIONS = [
    {
      label: t("experiences.filter-work"),
      value: "work"
    },
    {
      label: t("experiences.filter-academic"),
      value: "academic"
    }
  ]

  const handleOptionChange = (option) => {
    setSelectedOption(option)
  }

  return (
    <section className="container" id="experience" data-aos="fade-up">
      <h2 className="code">{t("experiences.title")}</h2>

      <div className="experiences-wrapper">

        <Menu options={MENU_OPTIONS} handleOptionChange={handleOptionChange} />

        <Timeline
          items={filteredExperiences}
          renderItem={(experience) => <ExperienceDetails experience={experience} />}
        />
      </div>

      <h2 className="code close">{t("experiences.title")}</h2>
    </section>
  );
}
