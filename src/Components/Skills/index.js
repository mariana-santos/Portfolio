import { useEffect, useState, React } from 'react'
import Skill from '../Skill'

import { IoIosArrowDown } from 'react-icons/io'

import './style.css'

import useStrings from '../../assets/useStrings'

export default function Skills() {
    
    const strings = useStrings()

    const [selected, setSelected] = useState(strings.skills[0])
    const [seeAll, setSeeAll] = useState(false)
    const [animation, setAnimation] = useState(null)

    useEffect(() => {

        setAnimation('show-up')

        setTimeout(() => {
            setAnimation(null)
        }, 800)

    }, [selected])

    return (
        <section className='container' id="skills" data-aos="fade-up">
            <h2 className='code'>{strings.skills_title}</h2>

            <div className={`column wrap-skills ${seeAll ? 'hab-see-all' : 'hab-see-less'}`}>
                {
                    strings.skills.map((skill) => {
                        return (
                            <Skill
                                skill={skill}
                                key={skill.id}
                                className={selected.id === skill.id && 'selected'}
                                setSelected={setSelected}
                            />
                        )
                    })
                }
                <button
                    className='btn btn-secondary see-all'
                    onClick={() => setSeeAll(!seeAll)}
                > {seeAll ? 'ver menos' : 'ver mais'}
                    <IoIosArrowDown />
                </button>
            </div>

            <div className={`skill-info ${animation ? animation : ''}`}>
                <h3 className='line-after'>{selected.name}</h3>
                {selected.summary}

                {/* <button className='btn'>Ver projetos com {selected.name} </button> */}
            </div>

            <h2 className='code close'>{strings.skills_title}</h2>
        </section>
    )
}