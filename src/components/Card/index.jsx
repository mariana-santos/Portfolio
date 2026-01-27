import "./style.css";

import useStrings from "../../hooks/useStrings";
import { useModal } from "../../contexts/modal";
import ProjectDetails from "../ProjectDetails";

export default function Card({ project }) {
  
  const { setModalData, toggleModal, setModalTitle } = useModal();

  function handleClickCard() {
    setModalData(
      <ProjectDetails project={project} />
    );

    setModalTitle(project.title);
    toggleModal();
  }

  const strings = useStrings();

  const remainingSkills = project.skills.length - 3;

  return ( 
    <div className="card" onClick={handleClickCard}>
      <div className="wrap-img-card">
        <img
          src={project.image}
          alt={`Thumbnail do vídeo demonstrando o projeto ${project.title}`}
        />
      </div>
      <div className="tags">
        {project.skills.slice(0, 3).map((stack) => {
          return (
            <span className="tag" key={stack.id}>
              {stack.icon ? (
                stack.icon
              ) : (
                <img
                  src={require(`../../assets/skills-logos/${stack.name.toLowerCase()}.png`)}
                  alt=""
                />
              )}
              {stack.name}
            </span>
          );
        })}
        {remainingSkills > 0 && <span className="tag">+{remainingSkills}</span>}
      </div>
      <h3>{project.title}</h3>
      <p className="card-footer">
        <span className="subtitle">{project.subtitle}</span>
        <span className="saiba-mais btn-secondary btn-line">
          {strings.know_more}
        </span>
      </p>
    </div>
  );
}
