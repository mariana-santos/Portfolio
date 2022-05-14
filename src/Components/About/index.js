import '../../Styles/app.scss';

import ReactTypingEffect from 'react-typing-effect';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profile from '../../Assets/profile.png'

function About() {
    
  return (
    <>
      <main id='about'>
          <div id='name'>
              <p>Oi, tudo bem? Meu nome é</p>

              <ReactTypingEffect
                className='typewriter'
                text={["Mariana Santos. "]}
                cursorClassName='cursor'
                speed={150}
                eraseSpeed={150}
                typingDelay={500}
              />

              <p className='medium'>Sou desenvolvedora <span className='highlight'>Front-end</span> jr.</p>
          </div>

          <div id='pic'>
            <div className='border-helper'>
              <div className='border'>
                <img src={profile}/>
              </div>
            </div>
            
          </div>
      </main>

      <p className='scrolldown'>
        <FontAwesomeIcon icon="fas computer-mouse" />
        <i class="fa-solid fa-computer-mouse"></i>
        deslize para entender melhor a minha jornada :)
      </p>
    </>
  );
}

export default About;