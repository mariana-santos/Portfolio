import pic from '../../assets/contact-picture.jpg'

import './style.css'

import { IoSend } from 'react-icons/io5'

import React, { useRef } from 'react';

import useStrings from '../../data/useStrings';

import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from '../../Components/Loader'

import { useState } from 'react';

export default function Contact() {

    const strings = useStrings();

    const form = useRef();

    const [loading, setLoading] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        setLoading(true)

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE, 
            process.env.REACT_APP_EMAILJS_TEMPLATE, 
            form.current, 
            process.env.REACT_APP_EMAILJS_PUBLICKEY
        )
            .then((result) => {
                if (result.text === "OK")
                    setLoading(false)
                    toast.success(strings.contact_success)
                    form.current.reset();
            }, (error) => {
                setLoading(false)
                toast.error(strings.contact_error)
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

                {loading && <Loader />}

                <form ref={form} onSubmit={sendEmail}>
                    <h1 className='gradient-text'>{strings.contact_title}</h1>
                    <p>{strings.contact_subtitle}</p>

                    <label htmlFor='nome'>
                        {strings.name_label} <span className='required'>*</span>
                        <input type='text' placeholder={strings.name_placeholder} id='nome' autoFocus name='nome' required />
                    </label>

                    <label htmlFor='nome'>
                        Email <span className='required'>*</span>
                        <input type='email' placeholder={strings.email_placeholder} id='email' name='email' required />
                    </label>

                    <label htmlFor='mensagem'>
                        {strings.message_label} <span className='required'>*</span>
                        <textarea placeholder={strings.message_placeholder} rows={3} id='mensagem' name='mensagem' required />
                    </label>

                    <button className='btn'>
                        {strings.send}
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