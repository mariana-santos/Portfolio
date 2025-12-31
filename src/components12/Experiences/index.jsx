import "./style.css";
import Experience from "../Experience";
import useStrings from "../../hooks/useStrings";
import award from "../../assets/award.jpeg";
import { useState } from "react";

export default function Experiences() {
  const strings = useStrings();
    const [selected, setSelected] = useState(strings.experiences[0])

  return (
    <section className="container" id="experience" data-aos="fade-up">
      <h2 className="code">{strings.experience_title}</h2>

      <div className="column column-timeline">
        <ul className="timeline">
          {strings.experiences.map((experience) => (
            <Experience 
              key={experience.id} 
              experience={experience} 
              setSelected={setSelected}
              selected={selected} />
          ))}
        </ul>
      </div>

      <div className="column wrapper-pic" data-aos="fade-down">
        <div className="pic">
          <div className="line-element" />
          <img
            src={award}
            alt="Imagem de Mariana Santos recebendo um prêmio de reconhecimento no maior evento da faculdade FIAP"
          />
        </div>
      </div>

      <h2 className="code close">{strings.experience_title}</h2>
    </section>
  );
}
