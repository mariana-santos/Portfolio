import "./style.css";

import { useConfig } from "../../contexts/config";
import { useModal } from "../../contexts/modal";
import { keys } from "../../locales/keys";
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

  const { t } = useConfig();

  const projectKeys = keys.project(project.id);

  return (
    <div className={`card size-${size ?? 'default'}`} onClick={handleClickCard}>
      <div className="wrap-img-card">
        <img
          src={project.image}
          alt={`${t("projects.video-thumbnail-alt")} ${project.title}`}
        />
      </div>

      {size !== 'small' && (
        <SkillsList skills={project.skills} style="badge" max={3} showTopBorder />
      )}

      <h3>{project.title}</h3>
      <p className="card-footer">
        <span className="subtitle">{t(projectKeys.subtitle)}</span>
        <span className="see-details btn-secondary btn-line">
          {t("projects.know-more")}
        </span>
      </p>
    </div>
  );
}
