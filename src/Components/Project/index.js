import './style.css'

export default function Project({ project }) {
    return (
        <div className={`project`}>
            <div className='wrap-img-card'>
                <img src={require(`../../assets/projects/${project.title.toLowerCase()}.jpg`)} />
            </div>
            <div className='tags'>
                {project.stacks.slice(0, 3).map(stack => {
                    return (
                        <span className='tag' key={stack.id}>
                            <img src={require(`../../assets/habilities-logos/${stack.name.toLowerCase()}.png`)} />
                            {stack.name}
                        </span>
                    )
                })}
                <span className='tag'>
                    +{project.stacks.length - 3}
                    {/* +1 */}
                </span>
            </div>
            <h3>{project.title}</h3>
            <p className="card-footer">
                <span className='subtitle'>{project.subtitle}</span>
                <span className='saiba-mais btn-secondary btn-line'>Saiba mais</span>
            </p>
        </div>
    )
}