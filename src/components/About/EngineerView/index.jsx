import "./style.css";
import { useConfig } from "../../../contexts/config";
import { keys } from "../../../locales/keys";
import Timeline from "../../Timeline";

// Childhood images
import childhood1 from "../../../assets/about/soletrados.jpg";
import childhood2 from "../../../assets/about/graduating.jpg";
import childhood3 from "../../../assets/about/kid-me.JPG";

// ETEC images
import etec1 from "../../../assets/about/selfie-etec.png";
import etec2 from "../../../assets/about/print-etec.png";
import etec4 from "../../../assets/about/tcc-etec.png";
import etec3 from "../../../assets/about/etec-team.jpg";

// FIAP images
import fiapAward from "../../../assets/about/award.jpeg";
import fiapGraduation from "../../../assets/about/fiap-graduation.jpeg";
import fiapB3Presentation from "../../../assets/about/b3-presentation.png";
import coding from "../../../assets/main-picture.jpg";

// Global experience images
import greece from "../../../assets/about/greece.jpeg";
import colosseum from "../../../assets/about/colosseum.jpeg";
import kudos from "../../../assets/about/kudos.svg";
import graduation from "../../../assets/about/graduation.jpeg";

import { useState } from "react";

const MILESTONES = [
  { id: "milestone-1",
    year: "2014",
    images: [
      { id: "school-graduation", src: childhood2 },
      { id: "toddler", src: childhood3 },
      { id: "spelling-bee", src: childhood1 },
    ] },
  {
    id: "milestone-2",
    year: "2019",
    images: [
      // { id: "exam-result", src: etec2 },
      { id: "classmates", src: etec3 },
      { id: "badge", src: etec1, featured: true },
      { id: "final-project", src: etec4 },
    ],
  },
  {
    id: "milestone-3",
    year: "2022",
    images: [
      { id: "award", src: fiapAward, featured: true },
      // { id: "graduation", src: fiapGraduation },
      { id: "hackathon", src: coding },
      { id: "b3-presentation", src: fiapB3Presentation },
    ],
  },
  {
    id: "milestone-4",
    year: "2024-25",
    images: [
      { id: "greece", src: greece },
      { id: "colosseum", src: colosseum },
      { id: "malta-certificate", src: graduation },
      // { id: "kudos", src: kudos, featured: true },
    ],
  },
];

export default function EngineerView() {
  const { t } = useConfig();

  const [activeMilestone, setActiveMilestone] = useState(MILESTONES[0]);

  const activeMilestoneKeys = keys.milestone(activeMilestone.id);

  return (
    <div className="about engineer-view">
      <div className="milestones-container">
        <Timeline
          className="milestones"
          items={MILESTONES}
          getCounter={(milestone) => milestone.year}
          showLine={false}
          scrollIndicator={false}
          renderItem={(milestone) => {
            const milestoneKeys = keys.milestone(milestone.id);
            const isActive = milestone.id === activeMilestone.id;

            return (
              <div
                className={`milestone-content ${isActive ? "active" : ""}`.trim()}
                tabIndex={0}
                onMouseEnter={() => setActiveMilestone(milestone)}
                onFocus={() => setActiveMilestone(milestone)}
              >
                <span className="milestone-tag">{t(milestoneKeys.tag)}</span>
                <h4 className="milestone-title">{t(milestoneKeys.title)}</h4>
                <p className="milestone-description">{t(milestoneKeys.description)}</p>
              </div>
            );
          }}
        />

        <div className="milestone-images" key={activeMilestone.id}>
          {activeMilestone.images.length > 0 ? (
            activeMilestone.images.map((image) => (
              <figure
                className={`milestone-image ${image.featured ? "milestone-image--highlight" : ""}`.trim()}
                tabIndex={0}
                key={image.id}
              >
                <img
                  src={image.src}
                  alt={t(activeMilestoneKeys.image(image.id))}
                  loading="lazy"
                />
                <figcaption>{t(activeMilestoneKeys.image(image.id))}</figcaption>
              </figure>
            ))
          ) : (
            <div className="milestone-images-empty">
              {t("home.about.milestones-empty-gallery")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
