import { useState, React, useEffect } from 'react'
import './style.css'

import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

import { useContext } from 'react';

import { ConfigContext } from '../../App';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import useStrings from '../../data/useStrings'
import { HashLink } from 'react-router-hash-link';

import logo from '../../assets/logo.svg'


export default function Navbar() {

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

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const strings = useStrings();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuOpen && !event.target.closest('.menu-wrapper'))
        setMenuOpen(false);
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
        document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header>
      <nav 
        className="navbar" 
        style={{ backgroundColor: menuOpen ? 'var(--bg-light-strong)' : 'var(--header-transparent)' }}>
        <HashLink to='/#about' className='logo'>
            <img src={logo} alt="Logo do site: texto 'mari' envolvido por símbolos simulando uma tag HTML" />
        </HashLink>

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
              inputProps={{
                classes: {
                    icon: 'icon-select',
                },
              }}
            >
              <MenuItem value={'pt'}>PT</MenuItem>
              <MenuItem value={'en'}>EN</MenuItem>
            </Select>
          </div>

          <div
            className={`theme-switcher ${theme}`}
            role='button'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
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

          <ul
            className={menuOpen !== null ? (menuOpen ? 'opened' : 'closed') : undefined}
            onClick={() => menuOpen && setMenuOpen(false)}
          >   
            <li className='code autoclose'>
              <HashLink to="/#about">{strings.navbar.about}</HashLink >
            </li>

            <li className='code autoclose'>
              <HashLink to="/#experience">{strings.navbar.experience}</HashLink >
            </li>

            <li className='code autoclose'>
              <HashLink to="/#skills">{strings.navbar.skills}</HashLink >
            </li>

            <li className='code autoclose'>
              <HashLink to="/#projects">{strings.navbar.projects}</HashLink >
            </li>

            <li className='code autoclose'>
              <HashLink to="/contact">{strings.navbar.contact}</HashLink >
            </li>

            <li className='code autoclose'>
              <HashLink to="/resume">{strings.navbar.resume}</HashLink >
            </li>
          </ul>
        </div>
      </nav>

      {menuOpen && <div className='fade fade-menu show' />}
    </header>
  )
}