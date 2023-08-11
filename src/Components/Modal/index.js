import './style.css';

import { AiOutlineClose, AiOutlineGithub } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'
import useStrings from '../../assets/useStrings';

import { useEffect, useRef } from 'react';

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
        <>
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
                                        <img src={require(`../../assets/skills-logos/${stack.name.toLowerCase()}.png`)} />
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
                                                <a href={member.link} target='_blank'>
                                                    {member.name}
                                                </a>
                                                :
                                                <>{member.name}</>
                                            }
                                            {index === selected?.team.length - 2 ? (
                                                <> {strings.and} </>
                                            ) : index !== selected?.team.length - 1 ? (
                                                <>, </>
                                            ) : (
                                                <></>
                                            )}
                                        </span>
                                    )
                                })}
                            </p>
                        }
                    </div>

                    <div className='column wrap-iframe'>
                        {selected?.video_id ?
                            <iframe src={`https://www.youtube.com/embed/${selected?.video_id}${selected?.param ? selected?.param : ''}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            : selected?.title &&
                            <img className='img-project' src={require(`../../assets/projects/${selected?.title.toLowerCase()}.jpg`)} />
                        }

                        <div className='modal_footer'>
                            <a href={selected?.github} target='_blank' className='btn'>
                                {strings.more_info}
                                <AiOutlineGithub />
                            </a>

                            {selected?.deploy &&
                                <a href={selected?.deploy} target='_blank' className='btn'>
                                    {strings.test}
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