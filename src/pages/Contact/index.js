import pic from '../../assets/contact-picture.jpg'

import './style.css'

import { IoSend } from 'react-icons/io5'

import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE, process.env.REACT_APP_EMAILJS_TEMPLATE, form.current, process.env.REACT_APP_EMAILJS_PUBLICKEY)
            .then((result) => {
                if(result.text == 'OK')
                    toast.success('Mensagem enviada com sucesso! Em breve te retorno 💜')
                    form.current.reset();
            }, (error) => {
                toast.error('Eita, algo deu errado 😕. Me envie um email!')
            });
    };

    return (
        <section className="container" id="contact">
            <div className="column form">

                <ToastContainer
                    position="bottom-left"
                    autoClose={3000}
                    newestOnTop={false}
                    closeOnClick
                    pauseOnHover
                />

                <form ref={form} onSubmit={sendEmail}>
                    <h1 className='gradient-text'>Fale comigo!</h1>
                    <p>Se tiver alguma pergunta ou algo a me dizer, não hesite em falar comigo!
                        Prometo responder assim que possível 💜</p>

                    <label htmlFor='nome'>
                        Nome <span className='required'>*</span>
                        <input type='text' placeholder='Qual seu nome?' id='nome' autoFocus name='nome' required />
                    </label>

                    <label htmlFor='nome'>
                        Email <span className='required'>*</span>
                        <input type='email' placeholder='Qual seu principal email?' id='email' name='email' required />
                    </label>

                    <label htmlFor='mensagem'>
                        Sua mensagem <span className='required'>*</span>
                        <textarea placeholder='O que você tem a dizer?' rows={3} id='mensagem' name='mensagem' required />
                    </label>

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