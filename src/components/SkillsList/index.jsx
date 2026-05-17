import Tooltip from '../Tooltip';
import SkillIcon from '../Icon';
import './style.css';

import { useConfig } from "../../contexts/config";

export default function SkillsList({ skills, style, animate, max, showTopBorder = false }) {
  const { t } = useConfig();
  const showMax = typeof max === 'number' && max > 0 ? max : skills.length;
  const visibleSkills = skills.slice(0, showMax);
  const hiddenCount = skills.length - showMax;

  const className = [
    'skills-list',
    style,
    animate && 'animate',
    showTopBorder && 'show-top-border',   
  ].filter(Boolean).join(' ');

  const TRANSLATION_KEYS = {
    name: skill => `skills.${skill.id}.name`,
    summary: skill => `skills.${skill.id}.summary`,
  }

  return (
    <div className={className}>
      {style === 'badge' && 
        visibleSkills.map((skill) => (
          <span className="skill-badge" key={skill.id}>
            {t(TRANSLATION_KEYS.name(skill))}
          </span>
        ))
      }
      {style === 'icon' &&
        visibleSkills.map((skill) => (
          <Tooltip
            key={skill.id}
            trigger={<SkillIcon icon={skill.icon} />}
            content={t(TRANSLATION_KEYS.name(skill))}
          />
        ))
      }
      {hiddenCount > 0 && (
        <span className="skill-more">(+{hiddenCount})</span>
      )}
    </div>
  );
}