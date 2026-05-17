import './style.css'
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { BsBracesAsterisk, BsCalendarDate } from "react-icons/bs";
import { GrLocationPin } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import Tooltip from '../Tooltip';
import SkillsList from '../SkillsList';
import Icon from '../Icon';
import { useConfig } from '../../contexts/config';

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceDetails({ experience, itemsRef, index }) {
  const { t } = useConfig();

  const TRANSLATION_KEYS = {
    title: experience => `experiences.${experience.id}.title`,
    level: experience => `experiences.${experience.id}.level`,
    summary: experience => `experiences.${experience.id}.summary`,
    company: experience => `experiences.${experience.id}.company`,
    school: experience => `experiences.${experience.id}.school`,
    period: experience => `experiences.${experience.id}.period`,
    location: experience => `experiences.${experience.id}.location`,
    workLocationType: experience => `experiences.${experience.id}.workLocationType`,
    duration: experience => `experiences.${experience.id}.duration`,
    details: experience => `experiences.${experience.id}.details`,
  }

  const name = t(TRANSLATION_KEYS.company(experience)) ?? t(TRANSLATION_KEYS.school(experience));

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
            <Icon icon={experience.icon} rounded size={60} />
            <div className="headline-column">
              <h3 className="experience-title">{t(TRANSLATION_KEYS.title(experience))}</h3>
              <div className="experience-subtitle">
                <span className="experience-name">{name}</span>
                <span className="experience-level">{t(TRANSLATION_KEYS.level(experience))}</span>
              </div>
            </div>
          </div>

          <div className="profile-details">
            <span className="profile-detail date">
              <BsCalendarDate />
              {t(TRANSLATION_KEYS.period(experience))} 
              <span className="detail-extra">({t(TRANSLATION_KEYS.duration(experience))})</span>
            </span>

            <span className="profile-detail">
              <GrLocationPin />
              {t(TRANSLATION_KEYS.location(experience))}
              <span className="detail-extra">({t(TRANSLATION_KEYS.workLocationType(experience))})</span>
            </span>
          </div>
        </div>
        <p className="experience-summary">{t(TRANSLATION_KEYS.summary(experience))}</p>

        {t(TRANSLATION_KEYS.details(experience)) && 
          <ul className="experience-details">
            
            {t(TRANSLATION_KEYS.details(experience)).map((detail) => 
              <li>
                <BsBracesAsterisk />
                {detail}
              </li>
            )}
          </ul>
        }

        <p className="experiences-subtitle">
          <FaCode />
          {t("technologies")}
        </p>

        <SkillsList skills={experience.skills} style="icon" />
      </div>
    </li>
  )
}