import { useState, React, useEffect } from 'react'
import './style.css'

import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

import { useContext } from 'react';

import { ConfigContext } from '../../App';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import useStrings  from '../../assets/useStrings'
import { Link } from 'react-router-dom';

export default function Navbar() {

    // const [theme, setTheme] = useState('light')
    const [menuOpen, setMenuOpen] = useState(null)

    const { 
        language, 
        setLanguage,
        theme,
        setTheme
     } = useContext(ConfigContext);

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    const strings = useStrings();

    return (
        <header>
            <nav className="navbar">
                <Link to='/'>Início</Link>

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
                            <Link to="/#about">{strings.navbar.about}</Link >
                        </li>

                        <li className='code autoclose'>
                            <Link to="/#experience">{strings.navbar.experience}</Link >
                        </li>

                        <li className='code autoclose'>
                            <Link to="/#habilities">{strings.navbar.habilities}</Link >
                        </li>

                        <li className='code autoclose'>
                            <Link to="/#projects">{strings.navbar.projects}</Link >
                        </li>

                        <li className='code autoclose'>
                            <Link to="/contact">{strings.navbar.contact}</Link >
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}