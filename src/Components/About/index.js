import './style.css'

import pic from '../../assets/main-picture.jpg'

export default function About() {
    return (
        <section className='container' id='about'>
            <div className='column text'>
                {/* <p className='show-up'>Oi! Meu nome é </p> */}

                <h1 className='gradient-text show-up'>
                    <span className='light'>Mariana Santos. </span> <br/>
                    {/* <span className='smaller light'>e sou</span>  */}
                    Desenvolvedora Frontend.
                </h1>

                <p className='smaller show-up'>Apaixonada por criação e tecnologia. Ampla experiência em desenvolvimento de aplicações web e mobile responsivas e acessíveis</p>

                <a className='btn btn-secondary show-up' href='#contato'>Saiba mais</a>
            </div>

            <div className='column wrapper-pic'>
                <div className='pic'>
                    <div className='line-element' />
                    <img src={pic} alt='Imagem de Mariana Santos programando durante Hackaton' id='main-pic' />
                </div>
            </div>
        </section>
    )
}