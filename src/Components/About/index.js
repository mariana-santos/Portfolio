import './style.css'

import pic from '../../assets/main-picture.jpg'

import React from 'react'

export default function About() {
    return (
        <section className='container' id='about'>
            <div className='column text' data-aos="fade-right">

                <h1 className='gradient-text'>
                    <span className='light'>Mariana Santos. </span> <br/>
                    Desenvolvedora Frontend.
                </h1>

                <p className='smaller'>Apaixonada por criação e tecnologia. <br/></p>
                <p className='smaller'>Ampla experiência em <strong>desenvolvimento de aplicações web e mobile </strong>responsivas e acessíveis.</p>

                {/* <a className='btn btn-secondary' href='#contato'>Saiba mais</a> */}
            </div>

            <div className='column wrapper-pic' data-aos="fade-left">
                <div className='pic'>
                    <div className='line-element' />
                    <img src={pic} alt='Imagem de Mariana Santos programando durante Hackaton' id='main-pic' />
                </div>
            </div>
        </section>
    )
}