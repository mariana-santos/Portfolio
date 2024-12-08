import "./style.css";
import Project from "../Card";
import useStrings from "../../hooks/useStrings";
import makeAnimated from "react-select/animated";
import ReactSelect from "react-select";
import { useState, useEffect } from "react";

import noresults from "../../assets/illustr-no-results.svg";

export default function Projects({ setIsOpen, setSelected }) {
  const strings = useStrings();

  const stacks = strings.skills.map((skill) => ({
    value: skill.name,
    label: skill.name,
  }));

  const filterBy = [
    { value: "relevant", label: strings.relevant },
    { value: "all", label: strings.all },
  ];

  const [filterSelected, setFilterSelected] = useState([
    stacks[2],
    stacks[3],
    stacks[0],
    stacks[1],
  ]);
  const [filterBySelected, setFilterBySelected] = useState(filterBy[0]);

  useEffect(() => {
    filterProjects();
  }, [filterSelected, filterBySelected]);

  function filterProjects() {
    if (filterSelected.length === 0) {
      setFilteredProjects(strings.projects);
      return;
    }

    let filtered = strings.projects.filter((project) => {
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
    strings.projects.slice()
  );

  const animatedComponents = makeAnimated();

  const selectAllOption = {
    value: "<SELECT_ALL>",
    label: strings.select_all,
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
      <h2 className="code">{strings.projects_title}</h2>

      <div id="filter">
        <div className="wrap-filter">
          <label>{strings.filter_by}</label>

          <ReactSelect
            options={filterBy}
            onChange={(filterBy) => setFilterBySelected(filterBy)}
            value={filterBySelected}
            className="basic-multi-select"
            classNamePrefix="select"
            components={animatedComponents}
            isSearchable={true}
          />
        </div>

        <div className="wrap-filter">
          <label>{strings.techs}</label>

          <ReactSelect
            options={getOptions()}
            isOptionSelected={isOptionSelected}
            isMulti
            onChange={onChange}
            value={getValue()}
            className="select-skills"
            classNamePrefix="select"
            components={animatedComponents}
            placeholder={strings.techs}
            noOptionsMessage={() => strings.no_options}
          />
        </div>
      </div>

      <div className="wrap-projects">
        {filteredProjects.length >= 1 ? (
          filteredProjects.map((project) => (
            <Project
              setIsOpen={setIsOpen}
              project={project}
              setSelected={setSelected}
              key={project.id}
            />
          ))
        ) : (
          <div className="no-results">
            <img
              src={noresults}
              alt="Ilustração de uma mulher buscando por algo com uma lupa"
            />
            <p>{strings.no_results}</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setFilterSelected(stacks);
                setFilterBySelected(filterBy[1]);
              }}
            >
              Ver todos os projetos
            </button>
          </div>
        )}
      </div>

      <h2 className="code close">{strings.projects_title}</h2>
    </section>
  );
}
