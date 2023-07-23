import Navbar from './Components/Navbar';
import SocialMedia from './Components/SocialMedia';
import Email from './Components/Email';

import Home from './pages/Home'
import Contact from './pages/Contact'

import { useEffect, React, createContext, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Footer from './Components/Footer';
import CV from './pages/CV';

export const ConfigContext = createContext()

export default function App() {

  const initialLanguage =  localStorage.getItem('language') ? localStorage.getItem('language') : 'pt'
  const initialTheme =  localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'

  const [language, setLanguage] = useState(initialLanguage)
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    AOS.init({ duration: 800 });
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
            <Route element={<CV />} path="/resume" />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ConfigContext.Provider>
  );
}