import './style.css'

import React from 'react'

export default function Skill({ skill, className, setSelected }) {
    return (
        <div 
            className={`skill ${className ? className : ''}`}
            onClick={() => setSelected(skill)}
        >
            <div className='wrap-img-hab'>
                <img src={require(`../../assets/habilities-logos/${skill.name.toLowerCase()}.png`)} />
            </div>
            <p>{skill.name}</p>

            <div className='wrap-percentage'>
                <div 
                    className='percentage' 
                    style={{width: `${skill.percentage}%`}}
                    percentage={skill.percentage}
                >
                    <span className='value-percentage'>{skill.percentage}%</span>
                </div>
            </div>
        </div>
    )
}