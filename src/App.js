import Navbar from './Components/Navbar';
import SocialMedia from './Components/SocialMedia';
import Email from './Components/Email';

import Home from './pages/Home'
import Contact from './pages/Contact'

import { useEffect, React, createContext, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Route, Routes, BrowserRouter } from "react-router-dom";

export const ConfigContext = createContext()

export default function App() {

  const [language, setLanguage] = useState('en')
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    AOS.init({ duration: 800 });

    // if (localStorage.getItem('theme'))
    //   theme = localStorage.getItem('theme')

  }, [])

  const ConfigValues = {
    language,
    setLanguage,
    theme,
    setTheme
  }

  return (
    <ConfigContext.Provider value={ConfigValues}>
      <div className={`${theme}-theme`}>
        <BrowserRouter>
          <Navbar />
          <SocialMedia />
          <Email />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Contact />} path="/contact" />
          </Routes>
        </BrowserRouter>
      </div>
    </ConfigContext.Provider>
  );
}