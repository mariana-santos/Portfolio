import './style.css'

import React from 'react'

export default function Hability({ hability, className, setSelected }) {
    return (
        <div 
            className={`hability ${className ? className : ''}`}
            onClick={() => setSelected(hability)}
        >
            <div className='wrap-img-hab'>
                <img src={require(`../../assets/habilities-logos/${hability.name.toLowerCase()}.png`)} />
            </div>
            <p>{hability.name}</p>

            <div className='wrap-percentage'>
                <div 
                    className='percentage' 
                    style={{width: `${hability.percentage}%`}}
                    percentage={hability.percentage}
                >
                    <span className='value-percentage'>{hability.percentage}%</span>
                </div>
            </div>
        </div>
    )
}