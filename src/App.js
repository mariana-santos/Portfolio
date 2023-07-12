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

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <SocialMedia />
        <Email />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;