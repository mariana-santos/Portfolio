import About from "../../components/About";
import Hero from "../../components/Hero";
import Experiences from "../../components/Experiences";
import Expertise from "../../components/Expertise";
import Modal from "../../components/Modal";
import Projects from "../../components/Projects";

import { Fragment } from "react";

import { useConfig } from "../../contexts/config";

import { useState } from "react";

function App() {
  const { t } = useConfig();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(t("projects")[0]);

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
      <Experiences setIsOpen={setIsOpen} setSelected={setSelected} />
      <Expertise />
      <Projects setIsOpen={setIsOpen} setSelected={setSelected} />
    </Fragment>
  );
}

export default App;
