import './style.css'

import Project from '../Project'

import useStrings from '../../assets/useStrings'

import { components } from "react-select";

import ReactSelect from 'react-select'

import { useState } from 'react';

export default function Projects({ setIsOpen, setSelected }) {

    const strings = useStrings()

    const [filterSelected, setFilterSelected] = useState([])

    return (
        <section className='container' id='projects'>

            <h2 className='code'>{strings.projects_title}</h2>

            {/* <div id="filter">
                Filtrar por:
                <ReactSelect
                    options={strings.skills}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    components={{ Option }}
                    onChange={(skill) => setFilterSelected(skill)}
                    allowSelectAll={true}
                    value={filterSelected}
                />
            </div> */}

            <div className="wrap-projects">
                {strings.projects.map((project) => {
                    return (
                        <Project
                            setIsOpen={setIsOpen}
                            project={project}
                            setSelected={setSelected}
                        />
                    )
                })}
            </div>

            <h2 className='code close'>{strings.projects_title}</h2>

        </section>
    )
}

const Option = (props) => {
    return (
        <div>
            <components.Option {...props}>
                <input
                    type="checkbox"
                    checked={props.isSelected}
                    onChange={() => null}
                />{" "}
                <label>{props.data.name}</label>
            </components.Option>
        </div>
    );
};