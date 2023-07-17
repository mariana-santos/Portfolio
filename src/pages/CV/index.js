import useStrings from '../../assets/useStrings'
import './style.css'

import { AiOutlineGithub } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'
import { FaLocationDot, FaGithub } from 'react-icons/fa6'
import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io'
import { RiComputerFill } from 'react-icons/ri'
import Experience from '../../Components/Experience'

export default function CV() {

    const strings = useStrings()

    const experiences = strings.experiences.filter((experience) => experience.type === 'work')
    const educations = strings.experiences.filter((experience) => experience.type === 'academic')
    const featured_project = strings.projects.find((project) => project.title === 'Investium')

    return (
        <section id="resume" className="container">
            <div id="page">
                <div className='column column-small'>
                    <h3>
                        <a className='btn-secondary btn-line' href='https://marianasantos.tech/contact' target='_blank'>{strings.resume.contact_title}</a>
                    </h3>

                    <WithIcon
                        icon={<RiComputerFill />} link='https://marianasantos.tech/' label={'marianasantos.tech'}
                    />
                    <WithIcon
                        icon={<IoMdMail />} link='mailto:marianasfernandessousa@gmail.com' label={'marianasfernandessousa@gmail.com'}
                    />

                    <WithIcon
                        icon={<FaGithub />} link='https://github.com/mariana-santos' label={'mariana-santos'}
                    />

                    <WithIcon
                        icon={<IoLogoWhatsapp />} link='https://wa.link/xtpeg4' label={'+55 11 95042-6440'}
                    />

                    <WithIcon
                        icon={<FaLocationDot />} label={strings.resume.location}
                    />

                </div>
                <div className='column main-information'>
                    <section className='border-bottom'>
                        <h1 className='gradient-text'>Mariana Santos</h1>
                        <h2>{strings.title}</h2>
                        <p>{strings.subtitle} </p>
                    </section>

                    <section className='border-bottom experience'>
                        <h3>
                            <a className='btn-secondary btn-line' href='https://marianasantos.tech/#experience' target='_blank'>{strings.resume.experience_title}</a>
                        </h3>

                        {experiences.map((experience) => {
                            return(
                                <Experience experience={experience} details />
                            )
                        })}
                    </section>

                    <section className='education'>
                        <h3>
                            <a className='btn-secondary btn-line' href='https://marianasantos.tech/#experience' target='_blank'>{strings.resume.education_title}</a>
                        </h3>

                        {educations.map((education) => {
                            return(
                                <Experience experience={education} details />
                            )
                        })}
                    </section>

                    {/* <section className='featured-project'>
                        <h3>
                            <a className='btn-secondary btn-line' href='https://marianasantos.tech/#projects' target='_blank'>{strings.resume.featured_project}</a>
                        </h3>

                        <h4> {featured_project.title} </h4>
                        {featured_project.summary_description}

                        <a href={featured_project.github} className='btn btn-secondary' target='_blank'>
                            <AiOutlineGithub />
                            {strings.more_info}
                        </a>
                        <a href={featured_project.deploy} className='btn btn-secondary' target='_blank'>
                            {strings.test}
                            <BsFillPlayFill />
                        </a>
                    </section> */}

                </div>
            </div>
        </section>
    )
}

function WithIcon({ icon, link, label }) {
    return (
        <p className={link ? 'highlight' : 'with-icon'}>
            {link ?
                <a className='with-icon' href={link} target='_blank'>
                    {icon}
                    {label}
                </a>
                :
                <>
                    {icon}
                    {label}
                </>
            }
        </p>
    )
}