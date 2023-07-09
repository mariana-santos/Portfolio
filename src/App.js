import 
  { 
    About, 
    Email, 
    Experiences, 
    Habilities, 
    NavBar, 
    SocialMedia 
  } from './components';

import { useEffect, React } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({duration: 800});
  }, [])
  
  return (
    <>
      <NavBar />
      <SocialMedia />
      <Email />
      <About />
      <Experiences />
      <Habilities />
    </>
  );
}

export default App;
