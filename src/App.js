// import 
//   { 
//     About, 
//     Email, 
//     Experiences, 
//     Habilities, 
//     NavBar, 
//     SocialMedia 
//   } from './components';

import Navbar from './components/Navbar';
import SocialMedia from './components/SocialMedia';
import Email from './components/Email';
import About from './components/About'
import Experiences from './components/Experiences'
import Habilities from './components/Habilities'

import { useEffect, React } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({duration: 800});
  }, [])
  
  return (
    <>
      {/* <NavBar />
      <SocialMedia />
      <Email />
      <About />
      <Experiences />
      <Habilities /> */}
    </>
  );
}

export default App;