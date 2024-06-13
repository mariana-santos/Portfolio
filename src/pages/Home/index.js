import About from '../../Components/About'
import Hero from '../../Components/Hero'
import Experiences from '../../Components/Experiences'
import Skills from '../../Components/Skills'
import Modal from '../../Components/Modal';
import Projects from '../../Components/Projects';

import { Fragment } from "react";

import useStrings from '../../data/useStrings';

import { useState } from 'react';

function App() {

  const strings = useStrings()

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(strings.projects[0])

  return (
    <Fragment>
      <Modal
        show={modalIsOpen}
        setIsOpen={setIsOpen}
        selected={selected}
        setSelected={setSelected}
      />

      <Hero />
      <About />
      <Experiences />
      <Skills />
      <Projects
        setIsOpen={setIsOpen}
        setSelected={setSelected}
      />
    </Fragment>
  );
}

export default App;