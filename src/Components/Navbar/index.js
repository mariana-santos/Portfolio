import { useState, React, useEffect } from 'react'
import './style.css'

import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

export default function Navbar() {

    const [theme, setTheme] = useState('light')
    const [language, setLanguage] = useState('pt')
    const [menuOpen, setMenuOpen] = useState(null)

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <header>
            <nav className="navbar">
                <h1>Logo</h1>

                <div className='menu-wrapper'>
                    <div className='language-switcher' role='button'>
                        PT-BR
                    </div>

                    <div
                        className={`theme-switcher ${theme}`}
                        role='button'
                        onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
                    >
                        <BsFillMoonFill className='moon'/> 
                        <BsFillSunFill className='sun'/>
                    </div>

                    <div
                        className={`hamburguer ${menuOpen !== null && (menuOpen ? 'close' : 'open')}`}
                        role='button'
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span />
                        <span />
                    </div>

                    <ul className={menuOpen !== null && (menuOpen ? 'opened' : 'closed')}>
                        <li className='code autoclose'><a href="/#about">sobre mim</a></li>
                        <li className='code autoclose'><a href="/#experience">experiência</a></li>
                        <li className='code autoclose'><a href="/#habilities">habilidades</a></li>
                        <li className='code autoclose'><a href="/#projects">projetos</a></li>
                        <li className='code autoclose'><a href="/contact">contato</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}