import './style.css'

export default function SkillCard({ card, skills }) {
  return (
    <div
      className={`skill-card ${card.highlighted ? "highlighted" : ""}`.trim()}
      key={card.key}
      style={{ gridArea: card.key }}
    >
      <h3 className="skill-card-title">{card.title}</h3>
      <div className="skill-card-description">
        {card.description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
      <div className="impact-badges">
        {card.impact.map((impact, index) => (
          <span key={index}>{impact}</span>
        ))}
      </div>
      <div className="skills-list">
        {[...skills, ...skills].map((skill) => (
          <span className="skill-tag" key={skill.name}>
            {skill.name}
          </span>
        ))}
      </div>
      {<card.Icon className="card-icon" />}
    </div>
  )
}