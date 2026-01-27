import "./style.css";
import useStrings from "../../hooks/useStrings";
import Experience from "../Experience";
import { useEffect, useState } from "react";

export default function Experiences() {
  const { experiences, experience_title } = useStrings();

  const [activeExperience, setActiveExperience] = useState(experiences[0]);
  const [activeExperienceIndex, setActiveExperienceIndex] = useState(0);

  useEffect(() => {
    const loop = setInterval(() => {
      setActiveExperience(prev => {
        const currentIndex = experiences.indexOf(prev);
        const nextIndex =
          currentIndex + 1 < experiences.length ? currentIndex + 1 : 0;
        return experiences[nextIndex];
      });
    }, 20000);

    return () => clearInterval(loop);
  }, [experiences]);

  return (
    <section className="container" id="experience" data-aos="fade-up">
      <h2 className="code">{experience_title}</h2>
      
      <ul className="timeline column">
        {experiences.map((experience) => (
          <Experience 
            key={experience.id} 
            experience={experience} 
            active={experience.id === activeExperience.id}
          />
        ))}
      </ul>

      <div className="timeline-content column">
        <small>{activeExperience.summary}</small>
        <div className='tags'>
          {activeExperience.skills.map(stack => {
            return (
              <span className='tag' key={stack.id}>
                { stack.icon ? stack.icon : 
                    (<img src={require(`../../assets/skills-logos/${stack.name.toLowerCase()}.png`)} alt={stack.name} />) }
                    {stack.name}
              </span>
            )
          })}
        </div>

          { activeExperience.details && 
            <ul>
              { activeExperience.details.map((detail) => <li>{detail}</li> )}
            </ul> 
          }
      </div>

      <h2 className="code close">{experience_title}</h2>
    </section>
  );
}
