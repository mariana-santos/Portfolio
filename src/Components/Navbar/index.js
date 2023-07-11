import { useState, React } from 'react'
import './style.css'

import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

export default function Navbar() {

    const [theme, setTheme] = useState('light')
    const [language, setLanguage] = useState('pt')
    const [menuOpen, setMenuOpen] = useState(null)

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
                        {theme == 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
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
                        <li className='code autoclose'><a href="/contato">contato</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}