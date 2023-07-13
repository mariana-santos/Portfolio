import { useState, React, useEffect } from 'react'
import './style.css'

import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

import { useContext } from 'react';

import { ConfigContext } from '../../App';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import useStrings  from '../../assets/useStrings'

export default function Navbar() {

    const [theme, setTheme] = useState('light')
    const [menuOpen, setMenuOpen] = useState(null)

    const { language, setLanguage } = useContext(ConfigContext);

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    const strings = useStrings();

    return (
        <header>
            <nav className="navbar">
                <h1>Logo</h1>

                <div className='menu-wrapper'>
                    <div className='language-switcher'>
                        <Select
                            labelId="language"
                            id="language"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            autoWidth
                            label="Lang"
                            sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                            disableUnderline
                            variant="standard"
                        >
                            <MenuItem value={'pt'}>PT-BR</MenuItem>
                            <MenuItem value={'en'}>EN</MenuItem>
                        </Select>
                    </div>

                    <div
                        className={`theme-switcher ${theme}`}
                        role='button'
                        onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
                    >
                        <BsFillMoonFill className='moon' />
                        <BsFillSunFill className='sun' />
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
                        <li className='code autoclose'>
                            <a href="/#about">{strings.navbar.about}</a>
                        </li>

                        <li className='code autoclose'>
                            <a href="/#experience">{strings.navbar.experience}</a>
                        </li>

                        <li className='code autoclose'>
                            <a href="/#habilities">{strings.navbar.habilities}</a>
                        </li>

                        <li className='code autoclose'>
                            <a href="/#projects">{strings.navbar.projects}</a>
                        </li>

                        <li className='code autoclose'>
                            <a href="/contact">{strings.navbar.contact}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}