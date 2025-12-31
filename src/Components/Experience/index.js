import React, { useEffect, useState } from 'react';
import './style.css'

import { HiOutlineAcademicCap } from 'react-icons/hi'
import { MdOutlineWorkOutline } from 'react-icons/md'

export default function Experience({ experience, active }) {

  const [paused, setPaused] = useState(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setPaused(true);
  //   }, 5000);

  //   return () => clearTimeout(timeout);
  // }, []);

  const icons = {
    work: <MdOutlineWorkOutline />,
    academic: <HiOutlineAcademicCap />
  }


  return (
    <li 
        className="timeline-item"
        key={experience.id}
    >
      <div className="timeline-info">
        {/* <a href={experience.link} target='_blank' className='highlight' rel="noreferrer">
          {experience.location}
        </a> */}

        {/* <small>
          {experience.period}
        </small> */}
    
        <h4> 
          {experience.location}
        </h4>

        <span>{experience.level}</span> 
      </div>
      
      <div className="timeline-marker">
        <div className='timeline-icon'>
          {icons[experience.type]}
        </div>

        {active && (
          <div className={`countdown ${paused ? 'pause' : ''}`}>
            <svg viewBox="-50 -50 100 100" strokeWidth="7">
              <circle r="45" />
              <circle r="45" pathLength="1" />
            </svg>
          </div>
        )}   
      </div>
    </li>
  )
}