import './style.css'
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { BsBracesAsterisk, BsCalendarDate } from "react-icons/bs";
import { GrLocationPin } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceDetails({ experience, itemsRef, index }) {
  return (
    <li 
      className="timeline-item"
      key={experience.id}
      ref={(el) => {
        itemsRef.current[index] = el;
      }}
    >
      <div className="timeline-content column">
        <div className="experience-profile">
          <div className="experience-headline">
            {experience.icon}
            <div className="headline-column">
              <h3 className="experience-title">{experience.level} {experience.title}</h3>
              <span className="experience-name">{experience.company ?? experience.school}</span>
            </div>
          </div>

          <div className="profile-details">
            <span className="profile-detail date">
              <BsCalendarDate />
              {experience.period} 
              <span className="detail-extra">({experience.duration})</span>
            </span>

            <span className="profile-detail">
              <GrLocationPin />
              {experience.location}
              <span className="detail-extra">({experience.workLocationType})</span>
            </span>
          </div>
        </div>
        <p className="experience-summary">{experience.summary}</p>

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
  )
}