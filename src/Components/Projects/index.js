import './style.css'

import Project from '../Project'

import useStrings from '../../assets/useStrings'

export default function Projects({ setIsOpen, setSelected }){

    const strings = useStrings()

    return(
        <section className='container' id='projects' data-aos="fade-left">
            
            <h2 className='code'>Projetos</h2>

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

            <h2 className='code close'>Projetos</h2>

        </section>
    )
}