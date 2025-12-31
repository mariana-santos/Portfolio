import './style.css'

import { HiOutlineAcademicCap } from 'react-icons/hi'
import { MdOutlineWorkOutline } from 'react-icons/md'

export default function Experience({ experience, selected, setSelected, details }) {

    return (
        <li 
            className={`timeline-item ${selected?.id === experience.id ? 'selected' : ''}`}
            onClick={() => setSelected(experience)}
        >
            <div className="timeline-info">
                <h3> {experience.title}</h3>

                <div className='row'>
                    <a href={experience.link} target='_blank' className='highlight' rel="noreferrer">
                        {experience.location}
                    </a>
                    <small>
                        {experience.period}:
                        <strong> {experience.duration}</strong>
                    </small>
                </div>
            </div>
            <div 
                className="timeline-marker" 
                onClick={() => setSelected(experience)}
                role='button'
                aria-label='Selecionar experiência'
            >
                <div className='timeline-icon'>
                    {experience.type === 'work' ?
                        (<MdOutlineWorkOutline />) :
                        (<HiOutlineAcademicCap />)}
                </div>
            </div>
            <div className="timeline-content">
                <small>{experience.summary}</small>
                <div className='tags'>
                    {experience.skills.map((stack, index) => {
                        return (
                            <div className='tag' key={stack.id + index}>
                                { stack.icon ? stack.icon : 
                                    (<img src={require(`../../assets/skills-logos/${stack.name.toLowerCase()}.png`)} alt='' />) }
                                    {stack.name}

                            </div>
                        )
                    })}
                </div>

                { details && 
                    <ul>
                        {experience.details.map((detail, index) => {
                            return <li key={index}>{detail}</li>
                        })}
                    </ul> 
                }
            </div>
        </li>
    )
}