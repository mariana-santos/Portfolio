import "./style.css";

import { AiOutlineGithub } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import useStrings from "../../hooks/useStrings";

import { Fragment, useState } from "react";

export default function ProjectDetails({  project }) {
  const strings = useStrings();

  return (
    <Fragment>
      <div className="column project-info">
        <p className="subtitle">{project?.subtitle}</p>

        <div className="tags">
          {project?.skills.map((stack) => {
            return (
              <span className="tag" key={stack.id}>
                {stack.icon ? (
                  stack.icon
                ) : (
                  <img
                    src={require(`../../assets/skills-logos/${stack.name.toLowerCase()}.png`)}
                    alt={`Logo da tecnologia ${stack.name}`}
                  />
                )}
                {stack.name}
              </span>
            );
          })}
        </div>

        <div>{project?.description}</div>

        {project?.team && (
          <p className="involved">
            <strong>{strings.other_involved}</strong>
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
                    <Fragment> {strings.and} </Fragment>
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
              src={require(`../../assets/projects/${project?.title.toLowerCase()}.jpg`)}
              alt={`Imagem do projeto ${project.title}`}
            />
          )
        )}

        <div className="modal_footer">
          <a
            href={project?.github}
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            {strings.more_info}
            <AiOutlineGithub />
          </a>

          {project?.deploy && (
            <a
              href={project?.deploy}
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              {strings.test}
              <BsFillPlayFill />
            </a>
          )}
        </div>
      </div>
    </Fragment>
  );
}

function Iframe({ project }) {
  const [clicked, setClicked] = useState(false);

  return (
    <Fragment>
      {clicked ? (
        <iframe
          src={`https://www.youtube.com/embed/${project?.video_id}${
            project?.params ? project?.params : "?autoplay=1"
          }`}
          title="YouTube video player"
          autoplay
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <div className="wrap-img-iframe" onClick={() => setClicked(true)}>
          <img
            className="img-project"
            src={require(`../../assets/projects/${project?.title.toLowerCase()}.jpg`)}
            alt={`Imagem do projeto ${project.title}`}
          />

          <div className="wrap-play-icon">
            <BsFillPlayFill className="play-icon" />
          </div>
        </div>
      )}
    </Fragment>
  );
}
