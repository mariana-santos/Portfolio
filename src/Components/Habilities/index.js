import { useEffect, useState, React } from 'react'
import Hability from '../Hability'

import { IoIosArrowDown } from 'react-icons/io'

import './style.css'

import useStrings from '../../assets/useStrings'

export default function Habilities() {
    
    const strings = useStrings()

    const [selected, setSelected] = useState(strings.skills[0])
    const [seeAll, setSeeAll] = useState(false)
    const [animation, setAnimation] = useState(null)

    useEffect(() => {

        setAnimation('show-up')

        setTimeout(() => {
            setAnimation(null)
        }, 800)

    }, [selected])

    return (
        <section className='container' id="habilities" data-aos="fade-right">
            <h2 className='code'>Habilidades</h2>

            <div className={`column wrap-habilities ${seeAll ? 'hab-see-all' : 'hab-see-less'}`}>
                {
                    strings.skills.map((skill) => {
                        return (
                            <Hability
                                hability={skill}
                                key={skill.id}
                                className={selected.id === skill.id && 'selected'}
                                setSelected={setSelected}
                            />
                        )
                    })
                }
                <button
                    className='btn btn-secondary see-all'
                    onClick={() => setSeeAll(!seeAll)}
                > {seeAll ? 'ver menos' : 'ver mais'}
                    <IoIosArrowDown />
                </button>
            </div>

            <div className={`hability-info ${animation ? animation : ''}`}>
                <h3 className='line-after'>{selected.name}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p>Nullam vestibulum nulla sed tortor pellentesque, in scelerisque dui lacinia. In id lorem ipsum. Mauris id tincidunt justo. Vestibulum ut facilisis nisi. </p>

                <button className='btn'>Ver projetos com {selected.name} </button>
                {/* <p dangerouslySetInnerHTML={{ __html: selected.summary }} /> */}
            </div>

            <h2 className='code close'>Habilidades</h2>
        </section>
    )
}