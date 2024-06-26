import './style.css'

import pic from '../../assets/main-picture.jpg'

import { React } from 'react'

import useStrings from '../../data/useStrings'

export default function Hero() {
  const strings = useStrings() 

  return (
    <section className='container' id='hero'>            
      <div className='column text' data-aos="fade-up">
          <h1 className='gradient-text'>
            <span className='light'>Mariana Santos. </span> <br />
            {strings.title}
          </h1>

          <div className='smaller'>{strings.subtitle}</div>
      </div>

      <div className='column wrapper-pic' data-aos="fade-down">
        <div className='pic'>
          <div className='line-element' />
          <img src={pic} alt='Imagem de Mariana Santos programando durante Hackaton' id='main-pic' />
        </div>
      </div>
    </section>
  )
}