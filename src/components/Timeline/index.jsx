import "./style.css";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline({
  items,
  renderItem,
  getKey,
  getCounter,
  className = "",
  showLine = true,
  scrollIndicator = true,
}) {
  const timelineRef = useRef(null);
  const drawLineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    if (!scrollIndicator) return;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        drawLineRef.current,
        { height: 0 },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      itemsRef.current.forEach((item) => {
        if (!item) return;

        ScrollTrigger.create({
          trigger: item,
          start: "top center+=70",
          onEnter: () => item.classList.add("in-view"),
          onLeaveBack: () => item.classList.remove("in-view"),
        });
      });
    }, timelineRef);

    return () => ctx.revert();
  }, [items]);

  return (
    <ul className={`timeline ${className}`.trim()} ref={timelineRef}>
      {showLine && (
        <>
          <span className="default-line"></span>
          <span className="draw-line" ref={drawLineRef}></span>
        </>
      )}

      {items.map((item, index) => {
        const key = getKey ? getKey(item, index) : item.id ?? index;
        const counter = getCounter ? getCounter(item, index) : undefined;

        return (
          <li
            className="timeline-item"
            key={key}
            style={
              counter !== undefined
                ? { "--timeline-counter": `"${counter}"` }
                : undefined
            }
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
          >
            {renderItem(item, index)}
          </li>
        );
      })}
    </ul>
  );
}
