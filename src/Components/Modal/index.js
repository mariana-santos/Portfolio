import './style.css';

import { AiOutlineClose, AiOutlineGithub, AiFillPlayCircle } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'

export default function Modal({ show, selected, setIsOpen }) {

    const showClass = show ? 'show' : 'hide'

    return (
        <>
            <div id="fade" className={showClass}></div>
            <div id="modal" className={showClass}>
                <div className="modal_header">
                    <h3 className='line-after'>{selected.title}</h3>
                    <AiOutlineClose onClick={() => setIsOpen(false)} className="btn_close" />
                </div>

                <div className="modal_content">
                    <div className='column project-info'>

                        <p className='subtitle'>{selected.subtitle}</p>

                        <div className='tags'>
                            {selected.skills.map(stack => {
                                return (
                                    <span className='tag' key={stack.id}>
                                        <img src={require(`../../assets/habilities-logos/${stack.name.toLowerCase()}.png`)} />
                                        {stack.name}
                                    </span>
                                )
                            })}
                        </div>

                        <div>{selected.description}</div>

                        
                        <p className='involved'>
                            <strong>Outros envolvidos no projeto: </strong>
                            {selected.team?.map((member, index) => {
                                return(
                                    <span key={member.id}>
                                        { member.link ? 
                                            <a href='https://www.linkedin.com/in/anacdprado/' target='_blank'>
                                                {member.name}     
                                            </a> 
                                            : 
                                            <>{member.name}</>
                                        }
                                        { index === selected.team.lenght ? <> e </>  
                                        : index !== selected.team.lenght ? <>, </> : <></>}
                                    </span>
                                )
                            })}
                        </p>
                    </div>

                    <div className='column wrap-iframe'>
                        <iframe src={`https://www.youtube.com/embed/${selected.video_id}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        <div className='modal_footer'>
                            <a href={selected.github} target='_blank' className='btn'>
                                Mais informações
                                <AiOutlineGithub />
                            </a>

                            {selected.deploy &&
                                <a href={selected.deploy} target='_blank' className='btn'>
                                    Testar
                                    <BsFillPlayFill />
                                </a>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}