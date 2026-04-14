import "./style.css";

import useStrings from "../../hooks/useStrings";
import { useModal } from "../../contexts/modal";
import ProjectDetails from "../ProjectDetails";
import SkillsList from "../SkillsList";

export default function Card({ project, size }) {
  
  const { setModalData, toggleModal, setModalTitle } = useModal();

  function handleClickCard() {
    setModalData(
      <ProjectDetails project={project} />
    );

    setModalTitle(project.title);
    toggleModal();
  }

  const strings = useStrings();

  return ( 
    <div className={`card size-${size ?? 'default'}`} onClick={handleClickCard}>
      <div className="wrap-img-card">
        <img
          src={project.image}
          alt={`Thumbnail do vídeo demonstrando o projeto ${project.title}`}
        />
      </div>

      {size !== 'small' && (
        <SkillsList skills={project.skills} style="badge" max={3} showTopBorder />
      )}
      
      <h3>{project.title}</h3>
      <p className="card-footer">
        <span className="subtitle">{project.subtitle}</span>
        <span className="see-details btn-secondary btn-line">
          {strings.know_more}
        </span>
      </p>
    </div>
  );
}
