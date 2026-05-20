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
import { keys } from '../../locales/keys';

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceDetails({ experience, itemsRef, index }) {
  const { t } = useConfig();

  const experienceKeys = keys.experience(experience.id);

  const name = t(experienceKeys.company) ?? t(experienceKeys.school);
  const details = t(experienceKeys.details);

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
            <Icon
              icon={{ ...experience.icon, alt: t(experienceKeys.logoAlt) }}
              rounded
              size={60}
            />
            <div className="headline-column">
              <h3 className="experience-title">{t(experienceKeys.title)}</h3>
              <div className="experience-subtitle">
                <span className="experience-name">{name}</span>
                <span className="experience-level">{t(experienceKeys.level)}</span>
              </div>
            </div>
          </div>

          <div className="profile-details">
            <span className="profile-detail date">
              <BsCalendarDate />
              {t(experienceKeys.period)}
              <span className="detail-extra">({t(experienceKeys.duration)})</span>
            </span>

            <span className="profile-detail">
              <GrLocationPin />
              {t(experienceKeys.location)}
              <span className="detail-extra">({t(experienceKeys.workLocationType)})</span>
            </span>
          </div>
        </div>
        <p className="experience-summary">{t(experienceKeys.summary)}</p>

        {details &&
          <ul className="experience-details">

            {details.map((detail) =>
              <li key={`${experience.id}-${detail}`}>
                <BsBracesAsterisk />
                {detail}
              </li>
            )}
          </ul>
        }

        <p className="experiences-subtitle">
          <FaCode />
          {t("experiences.technologies")}
        </p>

        <SkillsList skills={experience.skills} style="icon" keyPrefix={experience.id} />
      </div>
    </li>
  )
}