import './style.css'

import useStrings from '../../assets/useStrings'

export default function Project({ project, setSelected, setIsOpen }) {

    function changeSelected(){
        setSelected(project)
        setIsOpen(true)
    }

    const strings = useStrings()

    return (
        <div className={`project`} onClick={changeSelected}>
            <div className='wrap-img-card'>
                <img src={require(`../../assets/projects/${project.title.toLowerCase()}.jpg`)} />
            </div>
            <div className='tags'>
                {project.skills.slice(0, 3).map(stack => {
                    return (
                        <span className='tag' key={stack.id}>
                            <img src={require(`../../assets/habilities-logos/${stack.name.toLowerCase()}.png`)} />
                            {stack.name}
                        </span>
                    )
                })}
                <span className='tag'>
                    +{project.skills.length - 3}
                </span>
            </div>
            <h3>{project.title}</h3>
            <p className="card-footer">
                <span className='subtitle'>{project.subtitle}</span>
                <span className='saiba-mais btn-secondary btn-line'>{strings.know_more}</span>
            </p>
        </div>
    )
}