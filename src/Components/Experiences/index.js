import './style.css'
import React, { useState } from 'react'
import Experience from '../Experience'
import useStrings from '../../data/useStrings'

export default function Experiences() {
  const strings = useStrings()
  const [selected, setSelected] = useState(strings.experiences[0])

  return (
    <section className='container' id='experience' data-aos='fade-up'>
      <h2 className='code'>{strings.experience_title}</h2>

      <div className='column'>
        <ul className='timeline'>
          {strings.experiences.map((experience) => (
            <Experience
              key={experience.id}
              experience={experience}
              setSelected={setSelected}
              selected={selected}
            />
          ))}
        </ul>
      </div>

      <div className='column text-about'>
        <h3 className='line-after'>{strings.journey_title}</h3>
        {strings.journey}
      </div>

      <h2 className='code close'>{strings.experience_title}</h2>
    </section>
  )
}
