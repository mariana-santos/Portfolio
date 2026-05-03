import Tooltip from '../Tooltip';
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

  return (
    <div className={className}>
      {style === 'badge' && 
        visibleSkills.map((skill) => (
          <span className="skill-badge" key={skill.id}>
            {t(skill.nameKey)}
          </span>
        ))
      }
      {style === 'icon' &&
        visibleSkills.map((skill) => (
          <Tooltip key={skill.id} trigger={skill.icon} content={t(skill.nameKey)} />
        ))
      }
      {hiddenCount > 0 && (
        <span className="skill-more">(+{hiddenCount})</span>
      )}
    </div>
  );
}