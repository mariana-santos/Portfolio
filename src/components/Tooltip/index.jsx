import './style.css'

export default function Tooltip ({ trigger, content }) {
  return (
    <div className="tooltip-container">
      <div className="tooltip-trigger">{trigger}</div>
      <span className="tooltip-content">{content}</span>
    </div>
  )
}