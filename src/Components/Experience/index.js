import './style.css'

import { HiOutlineAcademicCap } from 'react-icons/hi'
import { MdOutlineWorkOutline } from 'react-icons/md'

import React from 'react'

export default function Experience({ experience, details }) {

    return (
        <li 
            className="timeline-item"
            key={experience.id}
        >
            <div className="timeline-info">
                <a href={experience.link} target='_blank' className='highlight' rel="noreferrer">
                    {experience.location}
                </a>

                <small>
                    {experience.period}
                </small>
            
                <h4> 
                    {experience.abbreviatedTitle ?? experience.title}

                    {experience.abbreviatedTitle && 
                        <span className='tooltip'>
                            {experience.title}
                        </span>
                    }
                </h4>

                <span>{experience.level}</span> 
            </div>
            <div className="timeline-marker">
                <div className='timeline-icon'>
                    {experience.type === 'work' ?
                        (<MdOutlineWorkOutline />) :
                        (<HiOutlineAcademicCap />)}
                </div>
            </div>
            {/* <div className="timeline-content">
                <small>{experience.summary}</small>
                <div className='tags'>
                    {experience.skills.map(stack => {
                        return (
                            <span className='tag' key={stack.id}>
                                { stack.icon ? stack.icon : 
                                    (<img src={require(`../../assets/skills-logos/${stack.name.toLowerCase()}.png`)} alt='' />) }
                                    {stack.name}

                            </span>
                        )
                    })}
                </div>

                { details && 
                    <ul>
                        {experience.details.map((detail) => {
                            return <li>{detail}</li>
                        })}
                    </ul> 
                }
            </div> */}
        </li>
    )
}