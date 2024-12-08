import "./style.css";
import React from "react";
import Experience from "../Experience";
import useStrings from "../../hooks/useStrings";

export default function Experiences() {
  const strings = useStrings();

  return (
    <section className="container" id="experience" data-aos="fade-up">
      <h2 className="code">{strings.experience_title}</h2>

      <ul className="timeline">
        {strings.experiences.map((experience) => (
          <Experience key={experience.id} experience={experience} />
        ))}
      </ul>

      <h2 className="code close">{strings.experience_title}</h2>
    </section>
  );
}
