import SkillsList from '../SkillsList'
import './style.css'

export default function ExpertiseCard({ card, skills }) {
  return (
    <div
      className={`expertise-card ${card.highlighted ? "highlighted" : ""}`.trim()}
      key={card.key}
      style={{ gridArea: card.key }}
    >
      <h3 className="expertise-card-title">{card.title}</h3>
      <div className="expertise-card-description">
        {card.description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
      <div className="impact-badges">
        {card.impact.map((impact, index) => (
          <span key={index}>{impact}</span>
        ))}
      </div>

      <SkillsList skills={skills} style="badge" animate showTopBorder keyPrefix={card.key} />

      {<card.Icon className="card-icon" />}
    </div>
  )
}