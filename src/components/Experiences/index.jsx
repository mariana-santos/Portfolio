import "./style.css";
import useStrings from "../../hooks/useStrings";
import ExperiencesTimeline from "../ExperiencesTimeline";
import { useEffect, useState } from "react";


export default function Experiences({ setIsOpen, setSelected }) {
  const { experience_title } = useStrings();

  return (
    <section className="container" id="experience" data-aos="fade-up">
      <h2 className="code">{experience_title}</h2>

      <div className="experiences-wrapper">
        <ExperiencesTimeline />
      </div>

      <h2 className="code close">{experience_title}</h2>
    </section>
  );
}
