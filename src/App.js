// import 
//   { 
//     About, 
//     Email, 
//     Experiences, 
//     Habilities, 
//     NavBar, 
//     SocialMedia 
//   } from './Components';

import Navbar from './Components/Navbar';
import SocialMedia from './Components/SocialMedia';
import Email from './Components/Email';
import About from './Components/About'
import Experiences from './Components/Experiences'
import Habilities from './Components/Habilities'

import { useEffect, React } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({duration: 800});
  }, [])
  
  return (
    <>
      <Navbar />
      <SocialMedia />
      <Email />
      <About />
      <Experiences />
      <Habilities />
    </>
  );
}

export default App;