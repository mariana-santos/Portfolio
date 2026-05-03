import "./style.css";
import { useConfig } from "../../contexts/config";
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExperienceDetails from "../ExperienceDetails";
import Menu from "../Menu";

gsap.registerPlugin(ScrollTrigger);

export default function Experiences() {
  const { t } = useConfig();
  const [selectedOption, setSelectedOption] = useState("work")

  const timelineRef = useRef(null);
  const drawLineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        drawLineRef.current,
        { height: 0 },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      itemsRef.current.forEach((item) => {
        if (!item) return;

        ScrollTrigger.create({
          trigger: item,
          start: "top center+=70",
          onEnter: () => item.classList.add("in-view"),
          onLeaveBack: () => item.classList.remove("in-view"),
        });
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  const filteredExperiences = t("experiences").filter(
    experience => experience.type === selectedOption
  )

  const MENU_OPTIONS = [
    {
      label: "Profissional",
      value: "work"
    },
    {
      label: "Acadêmica",
      value: "academic"
    }
  ]

  const handleOptionChange = (option) => {
    setSelectedOption(option)
  }

  return (
    <section className="container" id="experience" data-aos="fade-up">
      <h2 className="code">{t("experience_title")}</h2>

      <div className="experiences-wrapper">

        <Menu options={MENU_OPTIONS} handleOptionChange={handleOptionChange} />

        <ul 
          className="timeline" 
          ref={timelineRef}
        >
          <span className="default-line"></span>
          <span className="draw-line" ref={drawLineRef}></span>
    
          {filteredExperiences.map((experience, index) => (
            <ExperienceDetails
              experience={experience}
              key={experience.id}
              itemsRef={itemsRef}
              index={index}
            />
          ))}
        </ul>
      </div>

      <h2 className="code close">{t("experience_title")}</h2>
    </section>
  );
}
