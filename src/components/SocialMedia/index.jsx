import { 
    AiOutlineGithub, 
    AiFillLinkedin, 
    AiFillInstagram, 
} from "react-icons/ai"

import { FaDev } from "react-icons/fa";

import "./style.css"

import React from "react"

export default function SocialMedia(){
    return(
        <div className="fixed">
            <a 
                href="https://github.com/mariana-santos" 
                target="_blank" 
                rel="noreferrer"
            >
                <AiOutlineGithub />
            </a>

            <a 
                href="https://dev.to/marianasantos" 
                target="_blank" 
                rel="noreferrer"
            >
                <FaDev />
            </a>

            <a 
                href="https://www.linkedin.com/in/mariana-santosf/" 
                target="_blank" 
                rel="noreferrer"
            >
                <AiFillLinkedin/>
            </a>

            <a 
                href="https://www.instagram.com/maris.fs/" 
                target="_blank" 
                rel="noreferrer"
            >
                <AiFillInstagram/>
            </a>
        </div>
    )
}