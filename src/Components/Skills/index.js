import { useState, React } from 'react'
import Skill from '../Skill'

import './style.css'

import useStrings from '../../data/useStrings'

export default function Skills() {
    
    const strings = useStrings()

    const [selected, setSelected] = useState(strings.skills[0])

    const skills = strings.skills.filter(skill => !skill.hide);

    const languages = skills.filter((language) => language.type === 'language');
    const libs_frameworks = skills.filter((language) => 
        language.type === 'library' || language.type === 'framework'
    );
    const platforms_tools_others = skills.filter((language) => 
        language.type === 'platform' || language.type === 'tool' || language.type === 'other');

    return (
        <section className='container' id="skills" data-aos="fade-up">
            <h2 className='code'>{strings.skills_title}</h2>

            <div className={`column wrap-skills`}>
                <h3 className='line-after'>{strings.resume.programming_languages}</h3>
                {
                    languages.map((skill) => {
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
            </div>

            <div className={`column wrap-skills`}>
                <h3 className='line-after'>{strings.resume.libs_frameworks}</h3>
                {
                    libs_frameworks.map((skill) => {
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
            </div>

            <div className={`column wrap-skills`}>
                <h3 className='line-after'>{strings.resume.tools_platf_others}</h3>

                {
                    platforms_tools_others.map((skill) => {
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
            </div>

            <h2 className='code close'>{strings.skills_title}</h2>
        </section>
    )
}