import useStrings from '../../assets/useStrings'
import './style.css'

import { FaLocationDot } from 'react-icons/fa6'
import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io'
import { RiComputerFill } from 'react-icons/ri'

export default function CV() {

    const strings = useStrings()

    return (
        <section id="resume" className="container">
            <div id="page">
                <div className='column column-small'>
                    <p className='highlight'>
                        <a className='with-icon' href='https://marianasantos.tech/' target='_blank'>
                            <RiComputerFill />
                            marianasantos.tech
                        </a>
                    </p>
                    <p className='with-icon'>
                        <FaLocationDot />
                        {strings.location}
                    </p>
                    <p>
                        <a className='with-icon' href='https://wa.link/xtpeg4' target='_blank'>
                            <IoLogoWhatsapp />
                            +55 11 95042-6440
                        </a>
                    </p>
                    <p className='highlight'>
                        <a className='with-icon' href='mailto:marianasfernandessousa@gmail.com' target='_blank'>
                            <IoMdMail />
                            marianasfernandessousa@gmail.com
                        </a>
                    </p>
                </div>
                <div className='column main-information'>
                    <h1 className='gradient-text'>
                        Mariana Santos
                    </h1>
                    <h2>{strings.title}</h2>

                    <p className='light'>{strings.subtitle} </p>
                </div>
            </div>
        </section>
    )
}