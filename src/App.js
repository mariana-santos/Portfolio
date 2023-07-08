import 
  { 
    About, 
    Email, 
    Experience, 
    Habilities, 
    NavBar, 
    SocialMedia 
  } from './components';

import { useEffect } from 'react';

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
      <Experience />
      <Habilities />
    </>
  );
}

export default App;
