import "./style.css";
import Card from "../Card";
import { useConfig } from "../../contexts/config";
import makeAnimated from "react-select/animated";
import ReactSelect from "react-select";
import { useState, useEffect } from "react";

import noresults from "../../assets/illustr-no-results.svg";
import { skills } from "../../data/skills";

export default function Projects({ setIsOpen, setSelected }) {
  const { t } = useConfig();

  const stacks = skills.map((skill) => ({
    value: skill.name,
    label: skill.name,
  }));

  const filterBy = [
    { value: "relevant", label: t("relevant") },
    { value: "all", label: t("all") },
  ];

  const [filterSelected, setFilterSelected] = useState([
    stacks[2],
    stacks[3],
    stacks[0],
    stacks[1],
  ]);
  const [filterBySelected, setFilterBySelected] = useState(filterBy[1]);

  useEffect(() => {
    filterProjects();
  }, [filterSelected, filterBySelected]);

  function filterProjects() {
    if (filterSelected.length === 0) {
      setFilteredProjects(t("projects"));
      return;
    }

    let filtered = t("projects").filter((project) => {
      const projectSkills = project.skills.map((skill) => skill.name);
      return filterSelected.some((selected) =>
        projectSkills.includes(selected.value)
      );
    });

    if (filterBySelected.value === "relevant")
      filtered = filtered.filter((project) => {
        return project.relevant;
      });

    setFilteredProjects(filtered);
  }

  const [filteredProjects, setFilteredProjects] = useState(
    t("projects").slice()
  );

  const animatedComponents = makeAnimated();

  const selectAllOption = {
    value: "<SELECT_ALL>",
    label: t("select_all"),
  };

  const isSelectAllSelected = () => filterSelected.length === stacks.length;

  const isOptionSelected = (option) =>
    filterSelected.some(({ value }) => value === option.value) ||
    isSelectAllSelected();

  const getOptions = () => [selectAllOption, ...stacks];

  const getValue = () => {
    if (isSelectAllSelected()) return [selectAllOption];
    else return filterSelected.length > 0 ? filterSelected : [];
  };

  const onChange = (newValue, actionMeta) => {
    const { action, option, removedValue } = actionMeta;

    if (action === "select-option" && option.value === selectAllOption.value) {
      setFilterSelected(stacks);
    } else if (
      (action === "deselect-option" &&
        option.value === selectAllOption.value) ||
      (action === "remove-value" &&
        removedValue.value === selectAllOption.value)
    ) {
      setFilterSelected([]);
    } else if (
      actionMeta.action === "deselect-option" &&
      isSelectAllSelected()
    ) {
      setFilterSelected(
        filterSelected.filter(({ value }) => value !== option.value)
      );
    } else {
      setFilterSelected(newValue || []);
    }
  };

  return (
    <section className="container" id="projects">
      <h2 className="code">{t("projects_title")}</h2>

      <div id="filter">
        {/* <div className="wrap-filter">
          <label>{t("filter_by")}</label>

          <ReactSelect
            options={filterBy}
            onChange={(filterBy) => setFilterBySelected(filterBy)}
            value={filterBySelected}
            className="basic-multi-select"
            classNamePrefix="select"
            components={animatedComponents}
            isSearchable={true}
          />
        </div> */}

        {/* <div className="wrap-filter">
          <label>{t("filter_by")}</label>

          <ReactSelect
            options={getOptions()}
            isOptionSelected={isOptionSelected}
            isMulti
            onChange={onChange}
            value={getValue()}
            className="select-skills"
            classNamePrefix="select"
            components={animatedComponents}
            placeholder={t("techs")}
            noOptionsMessage={() => t("no_options")}
          />
        </div> */}
      </div>

      <div className="wrap-projects">
        {t("projects").map((project) => (
          <Card
            setIsOpen={setIsOpen}
            project={project}
            setSelected={setSelected}
            key={project.id}
          />))}
      </div>

      <h2 className="code close">{t("projects_title")}</h2>
    </section>
  );
}
