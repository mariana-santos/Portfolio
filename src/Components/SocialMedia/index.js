import { AiOutlineGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

import './style.css'

import React from 'react'

export default function SocialMedia(){
    return(
        <div className="fixed">
            <a href="https://github.com/mariana-santos" target="_blank">
                <AiOutlineGithub />
            </a>

            <a href='https://www.linkedin.com/in/mariana-santos-fernandes-de-sousa/' target='_blank'>
                <AiFillLinkedin/>
            </a>

            <a href='https://www.instagram.com/maris.fs/' target='_blank'>
                <AiFillInstagram/>
            </a>
        </div>
    )
}