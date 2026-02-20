import { useEffect, useRef, useState } from 'react';
import './style.css'
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import useStrings from "../../hooks/useStrings";

import { HiOutlineAcademicCap } from 'react-icons/hi'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { BsBracesAsterisk, BsCalendarDate } from "react-icons/bs";
import { GrLocationPin } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function ExperiencesTimeline() {

  const { experiences } = useStrings();

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
          start: "top center+=50",
          onEnter: () => item.classList.add("in-view"),
          onLeaveBack: () => item.classList.remove("in-view"),
        });
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <ul 
      className="timeline" 
      ref={timelineRef}
    >
      <span className="default-line"></span>
      <span className="draw-line" ref={drawLineRef}></span>

      {experiences.map((experience, index) => (
        <li 
          className="timeline-item"
          key={experience.id}
          ref={(el) => {
            itemsRef.current[index] = el;
          }}
        >
          <div className="timeline-content column">
            <div className="experience-profile">
              {experience.icon}
              <div className="experience-headline">
                <div className="headline-column">
                  <h3 className="experience-title">{experience.title}</h3>
                  <span className="experience-name">{experience.company ?? experience.school}</span>
                </div>

                <div className="headline-column">
                  <span className="headline-detail date">
                    <BsCalendarDate />
                    {experience.period} ({experience.duration})
                  </span>

                  <span className="headline-detail">
                    <GrLocationPin />
                    {experience.location}
                  </span>
                </div>
              </div>
            </div>
            <p>{experience.summary}</p>

            {experience.details && 
              <ul className="experience-details">
                
                {experience.details.map((detail) => 
                  <li>
                    <BsBracesAsterisk />
                    {detail}
                  </li>
                )}
              </ul>
            }

            <p className="experiences-subtitle">
              <FaCode />
              Tecnologias
            </p>

            <div className='experiences-skills'>
              {experience.skills.map(stack => stack.icon)}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}