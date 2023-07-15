import './style.css'

import Project from '../Project'

import useStrings from '../../assets/useStrings'

export default function Projects({ setIsOpen, setSelected }){

    const strings = useStrings()

    return(
        <section className='container' id='projects'>
            
            <h2 className='code'>{strings.projects_title}</h2>

            <div id="filter">
                Filtrar por:
            </div>

            <div className="wrap-projects">
                {strings.projects.map((project) => {
                    return(
                        <Project 
                            setIsOpen={setIsOpen}
                            project={project}
                            setSelected={setSelected}
                        />
                    )
                })}
            </div>

            <h2 className='code close'>{strings.projects_title}</h2>

        </section>
    )
}