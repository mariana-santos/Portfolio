import './style.css'

import Project from '../Project'
import Modal from '../Modal';

import projects from '../../assets/projects.json'

import { useState } from 'react';

export default function Projects(){

    const [modalIsOpen, setIsOpen] = useState(false);

    return(
        <section className='container' id='projects' data-aos="fade-left">
            
            <Modal
                show={modalIsOpen}
                contentLabel="Example Modal"
            >
                <h2>Hello</h2>
                <button onClick={() => setIsOpen(false)}>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
            
            <h2 className='code'>Projetos</h2>

            <div id="filter">
                Filtrar por:
            </div>

            <div className="wrap-projects">
                {projects.map((project) => {
                    return(
                        <Project 
                            project={project}
                        />
                    )
                })}
            </div>

            <h2 className='code close'>Projetos</h2>

        </section>
    )
}