import './style.css'
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { BsBracesAsterisk, BsCalendarDate } from "react-icons/bs";
import { GrLocationPin } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import Tooltip from '../Tooltip';

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
              <h3 className="experience-title"> {experience.title}</h3>
              <div className="experience-subtitle">
                <span className="experience-name">{experience.company ?? experience.school}</span>
                <span className="experience-level">{experience.level}</span>
              </div>
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
          {experience.skills.map(stack => 
            <Tooltip trigger={stack.icon} content={stack.name} />)
          }
        </div>
      </div>
    </li>
  )
}