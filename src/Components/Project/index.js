import './style.css'

export default function Project({ project }) {
    return (
        <div className={`project`}>
            <div className='wrap-img-card'>
                <img src={require(`../../assets/projects/${project.title.toLowerCase()}.jpg`)} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
            <div className='tags'>
                {project.stacks.slice(0, 2).map(stack => {
                    return (
                        <span className='tag' key={stack.id}>
                            <img src={require(`../../assets/habilities-logos/${stack.name.toLowerCase()}.png`)} />
                            {stack.name}
                        </span>
                    )
                })}
                <span className='tag'>
                    +{project.stacks.length - 2}
                </span>
            </div>
        </div>
    )
}