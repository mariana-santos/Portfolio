import { Route, Routes, BrowserRouter } from "react-router-dom";

import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import SocialMedia from '../Components/SocialMedia';
import Email from '../Components/Email';

import Home from '../pages/Home'
import Contact from '../pages/Contact'
import CV from '../pages/CV';
import { useConfig } from "../contexts/config";

export default function AppLayout (){

  const { theme } = useConfig();

  return(
    <div className={`container-all ${theme}-theme`}>
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
  )
}