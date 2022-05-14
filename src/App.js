import './Styles/app.scss';

import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <div>
          <Link to="#about">Sobre mim</Link>
          <Link to="#skills">Habilidades</Link>
          <Link to="#projects">Projetos</Link>
          <Link to="#contact">Contato</Link>
        </div>
      </nav>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <section id='section1'>
        <header className="App-header">
          <Nav /> 
        </header>
          <About />
      </section>
        <Skills />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
