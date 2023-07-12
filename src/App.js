import Navbar from './Components/Navbar';
import SocialMedia from './Components/SocialMedia';
import Email from './Components/Email';

import Home from './pages/Home'
import Contact from './pages/Contact'

import { useEffect, React } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";

function App() {

  let theme = 'light';

  useEffect(() => {
    AOS.init({ duration: 800 });

    if(localStorage.getItem('theme')) 
      theme = localStorage.getItem('theme')

  }, [])

  return (
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
  );
}

export default App;