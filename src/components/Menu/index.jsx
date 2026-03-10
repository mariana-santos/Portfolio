import { useEffect, useRef, useState } from 'react'
import './style.css'

export default function Menu({ options, name = "menu", handleOptionChange }) {

  const [selected, setSelected] = useState(null)
  const itemRef = useRef(null);
  const activeIndicatorRef = useRef(null);

  useEffect(() => {
    if (!itemRef.current) return;

    // Updating the active indicator position and sized based on the new selected item
    const actvItemWidth = itemRef.current.getBoundingClientRect().width;
    const actvItemOffset = itemRef.current.offsetLeft;

    activeIndicatorRef.current.style.width =  actvItemWidth;
    activeIndicatorRef.current.style.transform = `translateX(${actvItemOffset}px)`;

    handleOptionChange && handleOptionChange(selected)
  }, [selected])

  return (
    <div className="menu-holder">
      {options.map((option, index) => (
        <label 
          key={index} 
          className="menu-item" 
          ref={selected === option.value ? itemRef : null}
        >
          <input
            type="radio"
            name={name}
            value={option.value || option.label}
            className="menu-radio"
            onChange={() => setSelected(option.value)}
            defaultChecked={index === 0}
          />
          
          {option.icon && option.icon}
          {option.label}
        </label>
      ))}

      <span className="active-menu-indicator" ref={activeIndicatorRef} />
    </div>
  )
}