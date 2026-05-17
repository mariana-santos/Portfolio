import { useConfig } from "../../contexts/config";
import "./style.css";

import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { FaLocationDot, FaGithub } from "react-icons/fa6";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import { RiComputerFill } from "react-icons/ri";
// import Experience from "../../components/Experience";

import curriculo from "../../assets/curriculo-mariana.pdf";
import resume from "../../assets/resume-mariana.pdf";

import { Fragment } from "react";
import { skills } from "../../data/skills";

export default function CV() {
  const { t } = useConfig();

  const experiences = experiences.filter(
    (experience) => experience.type === "work"
  );
  const educations = experiences.filter(
    (experience) => experience.type === "academic"
  );
  const featured_project = projects.find(
    (project) => project.title === "Investium"
  );
  const languages = skills.filter(
    (language) => language.type === "language"
  );
  const libs_frameworks = skills.filter(
    (language) => language.type === "library" || language.type === "framework"
  );
  const platforms_tools_others = skills.filter(
    (language) =>
      language.type === "platform" ||
      language.type === "tool" ||
      language.type === "other"
  );

  return (
    <section id="resume" className="container">
      <div className="row row-btn">
        <a href={curriculo} download className="btn">
          {" "}
          {t("resume.download_portuguese")} 
        </a>

        <span>{t("resume.or")}</span>

        <a href={resume} download className="btn">
          {" "}
          {t("resume.download_english")} 
        </a>
      </div>
      <main id="page">
        <div className="column column-small">
          <section className="contact border-bottom">
            <h3>
              <a
                className="btn-secondary btn-line"
                href="https://marianasantos.tech/contact"
                target="_blank"
              >
                {t("resume.contact_title")}
              </a>
            </h3>

            <WithIcon
              icon={<RiComputerFill />}
              link="https://marianasantos.tech/"
              label={"marianasantos.tech"}
            />

            <p>
              <a
                className="with-icon"
                href="mailto:marianasfernandessousa@gmail.com"
                target="_blank"
              >
                <IoMdMail />
                marianasfernandessousa@
                <br />
                gmail.com
              </a>
            </p>

            <WithIcon
              icon={<AiFillLinkedin />}
              link="https://www.linkedin.com/in/mariana-santosf/"
              label={"/in/mariana-santosf/"}
            />

            <WithIcon
              icon={<FaGithub />}
              link="https://github.com/mariana-santos"
              label={"mariana-santos"}
            />

            <WithIcon
              icon={<IoLogoWhatsapp />}
              link="https://wa.link/xtpeg4"
              label={"+55 11 95042-6440"}
            />

            <WithIcon
              icon={<FaLocationDot />}
              label={t("resume.location")}
            />
          </section>

          <section className="hard-skills border-bottom">
            <h3>
              <a
                className="btn-secondary btn-line"
                href="https://marianasantos.tech/#skills"
                target="_blank"
              >
                Hard Skills
              </a>
            </h3>

            <DisplayList
              list={languages}
              title={t("resume.programming_languages")}
            />
            <DisplayList
              list={libs_frameworks}
              title={t("resume.libs_frameworks")}
            />
            <DisplayList
              list={platforms_tools_others}
              title={t("resume.tools_platf_others")}
            />
          </section>
          <section className="soft-skills border-bottom">
            <h3>
              <a
                className="btn-secondary btn-line"
                href="https://marianasantos.tech/#skills"
                target="_blank"
              >
                Soft Skills
              </a>
            </h3>

            <ul>
              {t("resume.soft_skills").map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </section>
          <section className="languages border-bottom">
            <h3 className="btn-secondary btn-line">
              {t("resume.languages_title")}
            </h3>

            <ul>
              {t("resume.languages").map((item) => {
                return (
                  <li>
                    {item.name} — {item.level}
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
        <div className="column main-information">
          <section className="border-bottom">
            <h1 className="gradient-text">Mariana Santos</h1>
            <h2>{t("title")}</h2>
            <p>{t("subtitle")} </p>
          </section>

          <section className="border-bottom experience">
            <h3>
              <a
                className="btn-secondary btn-line"
                href="https://marianasantos.tech/#experience"
                target="_blank"
              >
                {t("resume.experience_title")}
              </a>
            </h3>

            {/* {experiences.map((experience) => {
              return <Experience experience={experience} details />;
            })} */}
          </section>

          <section className="education">
            <h3>
              <a
                className="btn-secondary btn-line"
                href="https://marianasantos.tech/#experience"
                target="_blank"
              >
                {t("resume.education_title")}
              </a>
            </h3>

            {educations.map((education) => {
              return <Experience experience={education} details />;
            })}
          </section>

          <section className="featured-project">
            <h3>
              <a
                className="btn-secondary btn-line"
                href="https://marianasantos.tech/#projects"
                target="_blank"
              >
                {t("resume.featured_project")}
              </a>
            </h3>

            <h4> {featured_project.title} </h4>
            {featured_project.summary_description}

            <a
              href={featured_project.github}
              className="btn btn-secondary"
              target="_blank"
            >
              <AiOutlineGithub />
              {t("more_info")}
            </a>
            <a
              href={featured_project.deploy}
              className="btn btn-secondary"
              target="_blank"
            >
              {t("test")}
              <BsFillPlayFill />
            </a>
          </section>
        </div>
      </main>
    </section>
  );
}

function WithIcon({ icon, link, label }) {
  return (
    <p className={link ? "highlight" : "with-icon"}>
      {link ? (
        <a className="with-icon" href={link} target="_blank">
          {icon}
          {label}
        </a>
      ) : (
        <Fragment>
          {icon}
          {label}
        </Fragment>
      )}
    </p>
  );
}

function DisplayList({ list, title }) {
  const { t } = useConfig();

  return (
    <Fragment>
      <h4>{title}</h4>
      {list.map((item, index) => {
        return (
          <span key={item.id}>
            <Fragment>{item.name}</Fragment>

            {index === list.length - 2 ? (
              <Fragment> {t("and")} </Fragment>
            ) : index !== list.length - 1 ? (
              <Fragment>, </Fragment>
            ) : (
              <Fragment></Fragment>
            )}
          </span>
        );
      })}
    </Fragment>
  );
}
