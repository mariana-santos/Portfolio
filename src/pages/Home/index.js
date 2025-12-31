import About from "../../components/About";
import Hero from "../../components/Hero";
import Experiences from "../../components/Experiences";
import Skills from "../../components/Skills";
import Modal from "../../components/Modal";
import Projects from "../../components/Projects";

import { Fragment } from "react";

import useStrings from "../../hooks/useStrings";

import { useState } from "react";

function App() {
  const strings = useStrings();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(strings.projects[0]);

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
      <Projects setIsOpen={setIsOpen} setSelected={setSelected} />
    </Fragment>
  );
}

export default App;
