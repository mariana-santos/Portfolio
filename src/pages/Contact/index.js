import pic from '../../assets/contact-picture.jpg'

import './style.css'

import { IoSend } from 'react-icons/io5'

export default function Contact(){
    return(
        <section className="container" id="contact">
            <div className="column form">
                <form>
                    <h1 className='gradient-text'>Fale comigo!</h1>
                    <p>Se tiver alguma pergunta ou algo a me dizer, não exite em falar comigo!
                        Prometo responder assim que possível 💜</p>

                    <label htmlFor='nome'>Nome</label>
                    <input type='text' placeholder='Qual seu nome?' id='nome'/>

                    <label htmlFor='nome'>Email</label>
                    <input type='text' placeholder='Qual seu principal email?' id='email'/>

                    <label htmlFor='mensagem'>Sua mensagem</label>
                    <textarea placeholder='O que você tem a dizer?' rows={3} id='mensagem'/>

                    <button className='btn'>
                        Enviar
                        <IoSend />
                    </button>

                </form>
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