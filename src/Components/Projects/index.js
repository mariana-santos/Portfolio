import './style.css'
import Project from '../Project'
import useStrings from '../../assets/useStrings'
import makeAnimated from 'react-select/animated';
import ReactSelect from 'react-select'
import { useState, useEffect } from 'react';

export default function Projects({ setIsOpen, setSelected }) {
    const strings = useStrings();

    const stacks = strings.skills.map((skill) => ({
        value: skill.name,
        label: skill.name,
    }));

    const filterBy = [
        { value: 'relevant', label: strings.relevant },
        { value: 'all', label: strings.all }
    ]

    const [filterSelected, setFilterSelected] = useState([stacks[2], stacks[0], stacks[3]]);
    const [filterBySelected, setFilterBySelected] = useState(filterBy[0]);

    useEffect(() => {
        filterProjects();
    }, [filterSelected, filterBySelected]);

    function filterProjects() {
        let filtered = strings.projects.filter((project) => {
            const projectSkills = project.skills.map((skill) => skill.name);
            return filterSelected.some((selected) =>
                projectSkills.includes(selected.value)
            );
        });

        if (filterBySelected.value === 'relevant')
            filtered = filtered.filter(project => { return project.relevant })

        setFilteredProjects(filtered);
    }

    const [filteredProjects, setFilteredProjects] = useState(
        strings.projects.slice()
    );

    const animatedComponents = makeAnimated();

    return (
        <section className="container" id="projects">
            <h2 className="code">{strings.projects_title}</h2>

            <div id="filter">

                <div className='wrap-filter'>
                    <label>{strings.filter_by}</label>

                    <ReactSelect
                        options={filterBy}
                        onChange={(filterBy) => setFilterBySelected(filterBy)}
                        value={filterBySelected}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        components={animatedComponents}
                        isSearchable={false}
                    />
                </div>

                <div className='wrap-filter'>
                    <label>{strings.techs}</label>

                    <ReactSelect
                        options={stacks}
                        isMulti
                        onChange={(skill) => setFilterSelected(skill)}
                        value={filterSelected}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        components={animatedComponents}
                    />
                </div>
            </div>

            <div className="wrap-projects">
                {filteredProjects.map((project) => (
                    <Project
                        setIsOpen={setIsOpen}
                        project={project}
                        setSelected={setSelected}
                        key={project.id}
                    />
                ))}
            </div>

            <h2 className="code close">{strings.projects_title}</h2>
        </section>
    );
}
