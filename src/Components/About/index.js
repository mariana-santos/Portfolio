import './style.css'

import pic from '../../assets/main-picture.jpg'

import { React } from 'react'

import useStrings from '../../assets/useStrings'

export default function About() {

    const strings = useStrings() 

    return (
        <section className='container' id='about'>            
            <div className='column text' data-aos="fade-right">

                <h1 className='gradient-text'>
                    <span className='light'>Mariana Santos. </span> <br />
                    {strings.title}
                </h1>

                <p className='smaller'>{strings.subtitle[1]} <br /></p>
                <p className='smaller'>{strings.subtitle[2]}</p>

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