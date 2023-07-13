import About from '../../Components/About'
import Experiences from '../../Components/Experiences'
import Habilities from '../../Components/Habilities'
import Modal from '../../Components/Modal';
import Projects from '../../Components/Projects';

import projects from '../../assets/projects.json'

import { useState } from 'react';

function App() {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(projects[0])

  return (
    <>
      <Modal
        show={modalIsOpen}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={() => setIsOpen(false)}>close</button>

      </Modal>

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