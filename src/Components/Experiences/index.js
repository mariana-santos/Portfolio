import './style.css'
import React, { useState } from 'react'
import Experience from '../Experience'
import useStrings from '../../assets/useStrings'

export default function Experiences() {
  const strings = useStrings()
  const [selected, setSelected] = useState(strings.experiences[0])

  return (
    <section className='container' id='experience' data-aos='fade-left'>
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
        <h3 className='line-after'>Sobre a minha jornada</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          elementum tellus sit amet velit hendrerit mattis. Aenean ornare ut
          lectus in scelerisque. Praesent id aliquet tellus, ut dictum felis.
        </p>
        <p>
          Mauris consequat interdum posuere. Nullam rhoncus molestie est, eu
          pulvinar tortor pretium eget. Proin in semper velit, nec tempor sapien.
          Donec facilisis ex id nibh dignissim pulvinar.
        </p>
      </div>

      <h2 className='code close'>{strings.experience_title}</h2>
    </section>
  )
}
