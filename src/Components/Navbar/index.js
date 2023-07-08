import { useState } from 'react'
import './style.css'

import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

export default function Navbar() {

    const [theme, setTheme] = useState('light')
    const [language, setLanguage] = useState('pt')
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header>
            <nav className="navbar">
                <h1>Logo</h1>

                <div className='menu-wrapper'>
                    <div className='language-switcher' role='button'>
                        PT-BR
                    </div>

                    <div 
                        className='theme-switcher' 
                        role='button'
                        onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
                    >
                        { theme == 'light' ? <BsFillMoonFill /> : <BsFillSunFill /> }
                    </div>

                    <div className='hamburguer' role='button'>
                        <span />
                        <span />
                    </div>

                    <ul className={menuOpen ? 'open' : 'closed'}>
                        <li className='code'><a href="/">sobre mim</a></li>
                        <li className='code'><a href="/">habilidades</a></li>
                        <li className='code'><a href="/">experiência</a></li>
                        <li className='code'><a href="/">projetos</a></li>
                        <li className='code'><a href="/">contato</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}