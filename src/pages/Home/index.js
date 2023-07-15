import About from '../../Components/About'
import Experiences from '../../Components/Experiences'
import Habilities from '../../Components/Skills'
import Modal from '../../Components/Modal';
import Projects from '../../Components/Projects';

import useStrings from '../../assets/useStrings';

import { useState } from 'react';

function App() {

  const strings = useStrings()

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(strings.projects[0])

  return (
    <>
      <Modal
        show={modalIsOpen}
        setIsOpen={setIsOpen}
        selected={selected}
        setSelected={setSelected}
      />

      <About />
      <Experiences />
      <Habilities />
      <Projects
        setIsOpen={setIsOpen}
        setSelected={setSelected}
      />
    </>
  );
}

export default App;