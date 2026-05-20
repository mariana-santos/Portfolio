import "./style.css";

import { AiOutlineGithub } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import figmaLogo from "../../assets/skills-logos/figma.webp";

import { useConfig } from "../../contexts/config";
import { keys } from "../../locales/keys";

import { Fragment, useState } from "react";

export default function ProjectDetails({  project }) {
  const { t } = useConfig();

  const projectKeys = keys.project(project?.id);

  return (
    <Fragment>
      <div className="column project-info">
        <p className="subtitle">{t(projectKeys.subtitle)}</p>

        <div className="tags">
          {project?.skills.map((stack) => {
            return (
              <span className="tag" key={stack.id}>
                {stack.icon ? (
                  stack.icon
                ) : (
                  <img
                    src={require(`../../assets/skills-logos/${stack.name.toLowerCase()}.png`)}
                    alt={`${t("projects.tech-logo-alt")} ${stack.name}`}
                  />
                )}
                {stack.name}
              </span>
            );
          })}
        </div>

        <div>{t(projectKeys.description)}</div>

        {project?.team && (
          <p className="involved">
            <strong>{t("projects.other-involved")}</strong>
            {project?.team?.map((member, index) => {
              return (
                <span key={member.id}>
                  {member.link ? (
                    <a href={member.link} target="_blank" rel="noreferrer">
                      {member.name}
                    </a>
                  ) : (
                    <Fragment>{member.name}</Fragment>
                  )}
                  {index === project?.team.length - 2 ? (
                    <Fragment> {t("common.and")} </Fragment>
                  ) : index !== project?.team.length - 1 ? (
                    <Fragment>, </Fragment>
                  ) : (
                    <Fragment></Fragment>
                  )}
                </span>
              );
            })}
          </p>
        )}
      </div>

      <div className="column wrap-iframe">
        {project?.video_id ? (
          <Iframe project={project} />
        ) : (
          project?.title && (
            <img
              className="img-project"
              src={project?.image}
              alt={`${t("projects.image-alt")} ${project.title}`}
            />
          )
        )}

        <div className="modal_footer">
          {project?.github && (
            <a
              href={project?.github}
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              Github
              <AiOutlineGithub />
            </a>
          )}

          {project?.figma && (
            <a
              href={project?.figma}
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              Figma
              <img src={figmaLogo} alt={t("projects.figma-logo-alt")} className='figma-icon' />
            </a>
          )}

          {project?.deploy && (
            <a
              href={project?.deploy}
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              {t("projects.test")}
              <BsFillPlayFill />
            </a>
          )}
        </div>
      </div>
    </Fragment>
  );
}

function Iframe({ project }) {
  const { t } = useConfig();
  const [clicked, setClicked] = useState(false);

  return (
    <Fragment>
      {clicked ? (
        <iframe
          src={`https://www.youtube.com/embed/${project?.video_id}${
            project?.params ? project?.params : "?autoplay=1"
          }`}
          title={t("common.video-player-title")}
          autoplay
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <div className="wrap-img-iframe" onClick={() => setClicked(true)}>
          <img
            className="img-project"
            src={project?.image}
            alt={`${t("projects.image-alt")} ${project?.title}`}
          />

          <div className="wrap-play-icon">
            <BsFillPlayFill className="play-icon" />
          </div>
        </div>
      )}
    </Fragment>
  );
}
