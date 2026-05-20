import Tooltip from '../Tooltip';
import SkillIcon from '../Icon';
import './style.css';

import { useConfig } from "../../contexts/config";
import { keys } from "../../locales/keys";

export default function SkillsList({ skills, style, animate, max, keyPrefix = "default", showTopBorder = false }) {
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

  const duplicatedSkills = [...visibleSkills, ...visibleSkills].map((skill, index) => (
    { ...skill, customKey: `${keyPrefix}-${skill.id}-${index}` }
  ));

  const finalSkills = animate ? duplicatedSkills : visibleSkills;

  return (
    <div className={className}>
      {style === 'badge' &&
        finalSkills.map((skill) => (
          <span className="skill-badge" key={skill.customKey ?? `${keyPrefix}-${skill.id}`}>
            {t(keys.skill(skill.id).name)}
          </span>
        ))
      }
      {style === 'icon' &&
        visibleSkills.map((skill) => (
          <Tooltip
            key={`${keyPrefix}-${skill.id}`}
            trigger={<SkillIcon icon={skill.icon} />}
            content={t(keys.skill(skill.id).name)}
          />
        ))
      }
      {hiddenCount > 0 && (
        <span className="skill-more">(+{hiddenCount})</span>
      )}
    </div>
  );
}