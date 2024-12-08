import './style.css'

import React from 'react'

export default function Skill({ skill }) {
    return (
        <div 
            className={"stack"}
        >
            <div className='wrap-img-hab'>
                {skill.icon ? skill.icon : 
                <img src={require(`../../assets/skills-logos/${skill.name.toLowerCase()}.png`)} alt=''/>
                }
            </div>
            <p>{skill.name}</p>

            <span className='tooltip'>{skill.summary}</span>
        </div>
    )
}