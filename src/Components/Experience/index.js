import './style.css'

import { HiOutlineAcademicCap } from 'react-icons/hi'
import { MdOutlineWorkOutline } from 'react-icons/md'

import React from 'react'

export default function Experience({ experience, selected, setSelected, details }) {

    return (
        <>
            <li 
                className={`timeline-item ${selected?.id === experience.id && 'selected'}`}
                key={experience.id}
                onClick={() => setSelected && setSelected(experience)}
            >
                <div className="timeline-info">
                    <h4> {experience.title}</h4>

                    <div className='row'>
                        <a href={experience.link} target='_blank' className='highlight'>
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
                >
                    <div className='timeline-icon'>
                        {experience.type == 'work' ?
                            (<MdOutlineWorkOutline />) :
                            (<HiOutlineAcademicCap />)}
                    </div>
                </div>
                <div className="timeline-content">
                    <small>{experience.summary}</small>
                    <div className='tags'>
                        {experience.skills.map(stack => {
                            return (
                                <span className='tag' key={stack.id}>
                                    <img src={require(`../../assets/habilities-logos/${stack.name.toLowerCase()}.png`)} />
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
                </div>
            </li>
        </>
    )
}