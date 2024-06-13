import './style.css';

import { AiOutlineClose, AiOutlineGithub } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'
import useStrings from '../../data/useStrings';

import { Fragment, useEffect, useRef, useState } from 'react';

export default function Modal({ show, selected, setIsOpen, setSelected }) {

    const modalRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
          if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsOpen(false);
            setSelected(null);
          }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [setIsOpen, setSelected]);

    const showClass = show ? 'show' : 'hide'

    const strings = useStrings()

    return (
        <Fragment>
            <div id="fade" className={`${showClass} fade`}></div>
            <div id="modal" ref={modalRef} className={showClass}>
                <div className="modal_header">
                    <h3 className='line-after'>{selected?.title}</h3>
                    <AiOutlineClose onClick={() => {setIsOpen(false); setSelected(null)}} className="btn_close" />
                </div>

                <div className="modal_content">
                    <div className='column project-info'>

                        <p className='subtitle'>{selected?.subtitle}</p>

                        <div className='tags'>
                            {selected?.skills.map(stack => {
                                return (
                                    <span className='tag' key={stack.id}>
                                        {stack.icon ? stack.icon : 
                                            <img src={require(`../../assets/skills-logos/${stack.name.toLowerCase()}.png`)} alt="" />
                                        }
                                        {stack.name}
                                    </span>
                                )
                            })}
                        </div>

                        <div>{selected?.description}</div>

                        {selected?.team &&
                            <p className='involved'>
                                <strong>{strings.other_involved}</strong>
                                {selected?.team?.map((member, index) => {
                                    return (
                                        <span key={member.id}>
                                            {member.link ?
                                                <a href={member.link} target='_blank' rel="noreferrer">
                                                    {member.name}
                                                </a>
                                                :
                                                <Fragment>{member.name}</Fragment>
                                            }
                                            {index === selected?.team.length - 2 ? (
                                                <Fragment> {strings.and} </Fragment>
                                            ) : index !== selected?.team.length - 1 ? (
                                                <Fragment>, </Fragment>
                                            ) : (
                                                <Fragment></Fragment>
                                            )}
                                        </span>
                                    )
                                })}
                            </p>
                        }
                    </div>

                    <div className='column wrap-iframe'>
                        {selected?.video_id ?

                            <Iframe selected={selected} />

                            : selected?.title &&

                            <img className='img-project' src={require(`../../assets/projects/${selected?.title.toLowerCase()}.jpg`)} alt={`Imagem do projeto ${selected.title}`}/>
                        }

                        <div className='modal_footer'>
                            <a href={selected?.github} target='_blank' className='btn' rel="noreferrer">
                                {strings.more_info}
                                <AiOutlineGithub />
                            </a>

                            {selected?.deploy &&
                                <a href={selected?.deploy} target='_blank' className='btn' rel="noreferrer">
                                    {strings.test}
                                    <BsFillPlayFill />
                                </a>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

function Iframe({ selected }){
    const [clicked, setClicked] = useState(false)

    return(
        <Fragment>
            { clicked 
                ? 
                <iframe 
                    src={`https://www.youtube.com/embed/${selected?.video_id}${selected?.params ? selected?.params : '?autoplay=1'}`} 
                    title="YouTube video player" autoplay allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>

                </iframe>
                : 
                <div className='wrap-img-iframe' onClick={() => setClicked(true)}>
                    <img 
                        className='img-project' 
                        src={require(`../../assets/projects/${selected?.title.toLowerCase()}.jpg`)} 
                        alt={`Imagem do projeto ${selected.title}`} />
                    
                    <div className='wrap-play-icon'>
                        <BsFillPlayFill className='play-icon' />
                    </div>
                </div>
            }
        </Fragment>
    )
}