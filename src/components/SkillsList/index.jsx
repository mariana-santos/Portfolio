import Tooltip from '../Tooltip';
import './style.css';

export default function SkillsList({ skills, style, animate, max, showTopBorder = false }) {
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
          <span className="skill-badge" key={skill.name}>
            {skill.name}
          </span>
        ))
      }
      {style === 'icon' &&
        visibleSkills.map((skill) => (
          <Tooltip key={skill.name} trigger={skill.icon} content={skill.name} />
        ))
      }
      {hiddenCount > 0 && (
        <span className="skill-more">(+{hiddenCount})</span>
      )}
    </div>
  );
}