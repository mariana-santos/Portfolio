import './style.css'

import experience from '../../assets/experience.json'

import { useState, React } from 'react'

import Experience from '../Experience'

export default function Experiences() {
    const [selected, setSelected] = useState(experience[0])
    return (
        <section className='container' id='experience' data-aos="fade-left">
            <h2 className='code'>Experiência e educação</h2>

            <div className="column">
                <ul class="timeline">
                    {experience.map(experience => {
                        return (
                            <Experience 
                                experience={experience}
                                setSelected={setSelected}
                                selected={selected}
                            />
                        )
                    })}
                </ul>
            </div>

            <div className="column text-about">
                <h3 className='line-after'>Sobre a minha jornada</h3>
                {/* <p>Sempre fui uma pessoa muito ligada em tecnologia e inovação, e tudo começou quando fiz um curso de informática básica aos 10 anos, onde aprendi os básicos de <strong>Software, Hardware e os programas do Pacote Office</strong>.</p> */}

                {/* <p>Mas eu entrei de fato no mundo da programação quando comecei a fazer o curso técnico de  <strong>Desenvolvimento de Sistemas na ETEC de Guainazes</strong>, uma escola referência no ensino de tecnologia. Lá foi onde eu me apaixonei pelo desenvolvimento frontend e descobri que seguiria na profissão.</p> */}

                {/* <p>Atualmente estou seguindo a jornada na tecnologia cursando <strong>Análise e Desenvolvimento de Sistemas na melhor faculdade de tecnologia do país, a FIAP.</strong></p> */}
                
                {/* <p>Além disso, atuo como <strong>Desenvolvedora Web Jr.</strong> na Agência Choveu, onde sigo aprendendo aprendendo e me aprimorando no mundo do <strong>desenvolvimento frontend.</strong></p> */}

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum tellus sit amet velit hendrerit mattis. Aenean ornare ut lectus in scelerisque. Praesent id aliquet tellus, ut dictum felis.</p> 

                <p>Mauris consequat interdum posuere. Nullam rhoncus molestie est, eu pulvinar tortor pretium eget. Proin in semper velit, nec tempor sapien. Donec facilisis ex id nibh dignissim pulvinar.</p>
            </div>

            <h2 className='code close'>Experiência e educação</h2>
        </section>
    )
}