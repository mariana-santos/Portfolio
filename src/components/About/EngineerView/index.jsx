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

import { useEffect, useRef, useState } from "react";

const HOVER_ACTIVATE_DELAY = 350;

const MILESTONES = [
  { id: "milestone-1",
    year: "2014",
    images: [
      { id: "spelling-bee", src: childhood1 },
      { id: "toddler", src: childhood3 },
      { id: "school-graduation", src: childhood2 },
    ] },
  {
    id: "milestone-2",
    year: "2019",
    images: [
      { id: "final-project", src: etec4 },
      { id: "badge", src: etec1 },
      { id: "classmates", src: etec3 },
    ],
  },
  {
    id: "milestone-3",
    year: "2022",
    images: [
      { id: "award", src: fiapAward, featured: true },
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
    ],
  },
];

export default function EngineerView() {
  const { t } = useConfig();

  const [activeMilestone, setActiveMilestone] = useState(MILESTONES[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [touched, setTouched] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const activeMilestoneKeys = keys.milestone(activeMilestone.id);

  useEffect(() => {
    const featuredIndex = activeMilestone.images.findIndex((image) => image.featured);
    setActiveImageIndex(featuredIndex >= 0 ? featuredIndex : 0);
  }, [activeMilestone]);

  useEffect(() => () => clearTimeout(hoverTimeoutRef.current), []);

  const openMilestone = (milestone, index) => {
    clearTimeout(hoverTimeoutRef.current);
    setActiveMilestone(milestone);
    if (index !== 0) setTouched(true);
  };

  const scheduleMilestone = (milestone, index) => {
    clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => openMilestone(milestone, index), HOVER_ACTIVATE_DELAY);
  };

  const cancelScheduledMilestone = () => clearTimeout(hoverTimeoutRef.current);

  const activeIndex = MILESTONES.findIndex((milestone) => milestone.id === activeMilestone.id);

  const images = activeMilestone.images;
  const activeImage = images[activeImageIndex] ?? images[0];

  const galleryRows = images[2]
    ? (activeImageIndex === 2 ? "1fr 1.6fr" : "1.6fr 1fr")
    : undefined;
  const galleryTopColumns = images.length > 1
    ? (activeImageIndex === 0 ? "1.8fr 1fr" : activeImageIndex === 1 ? "1fr 1.8fr" : "1fr 1fr")
    : undefined;

  const renderGallery = (variant) => (
    <div className={`milestone-gallery milestone-gallery--${variant}`} key={`${variant}-${activeMilestone.id}`}>
      {images.length > 0 ? (
        <>
          <div className="milestone-gallery-grid" style={{ gridTemplateRows: galleryRows }}>
            <div className="milestone-gallery-top" style={{ gridTemplateColumns: galleryTopColumns }}>
              {images.slice(0, 2).map((image, index) => (
                <button
                  type="button"
                  key={image.id}
                  className={`milestone-gallery-photo ${index === activeImageIndex ? "active" : ""}`.trim()}
                  onMouseEnter={() => setActiveImageIndex(index)}
                  onFocus={() => setActiveImageIndex(index)}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img src={image.src} alt={t(activeMilestoneKeys.image(image.id))} loading="lazy" />
                </button>
              ))}
            </div>

            {images[2] && (
              <button
                type="button"
                className={`milestone-gallery-photo milestone-gallery-photo--wide ${activeImageIndex === 2 ? "active" : ""}`.trim()}
                onMouseEnter={() => setActiveImageIndex(2)}
                onFocus={() => setActiveImageIndex(2)}
                onClick={() => setActiveImageIndex(2)}
              >
                <img src={images[2].src} alt={t(activeMilestoneKeys.image(images[2].id))} loading="lazy" />
              </button>
            )}
          </div>

          <div className="milestone-gallery-caption">
            <p>{t(activeMilestoneKeys.image(activeImage.id))}</p>
          </div>
        </>
      ) : (
        <div className="milestone-images-empty">
          {t("home.about.milestones-empty-gallery")}
        </div>
      )}
    </div>
  );

  return (
    <div className="about engineer-view">
      {!touched && (
        <div className="milestones-hint">
          <span className="milestones-hint-cta">
            <span>// {t("home.about.milestones-hint")}</span>
            <span className="milestones-hint-arrow" aria-hidden="true">↓</span>
          </span>
        </div>
      )}

      <div className="milestones-container">
        <Timeline
          className="milestones"
          items={MILESTONES}
          showLine={false}
          scrollIndicator={false}
          renderItem={(milestone, index) => {
            const milestoneKeys = keys.milestone(milestone.id);
            const isActive = milestone.id === activeMilestone.id;
            const isLast = index === MILESTONES.length - 1;
            const dotState = isActive ? "pulse" : "idle";

            return (
              <>
                <div
                  className={`milestone-row ${isActive ? "active" : "idle"}`.trim()}
                  tabIndex={0}
                  onMouseEnter={() => scheduleMilestone(milestone, index)}
                  onMouseLeave={cancelScheduledMilestone}
                  onFocus={() => openMilestone(milestone, index)}
                  onClick={() => openMilestone(milestone, index)}
                >
                  <span className="milestone-year">{milestone.year}</span>

                  <span className="milestone-dot-rail" aria-hidden="true">
                    <span className={`milestone-dot ${dotState}`.trim()} />
                  </span>

                  <span className="milestone-copy">
                    {isActive ? (
                      <>
                        <span className="milestone-tag">{t(milestoneKeys.tag)}</span>
                        <h4 className="milestone-title">{t(milestoneKeys.title)}</h4>
                        <p className="milestone-description">{t(milestoneKeys.description)}</p>
                      </>
                    ) : (
                      <>
                        <span className="milestone-tag milestone-tag--idle">{t(milestoneKeys.tag)}</span>
                        <span className="milestone-title-row">
                          <h4 className="milestone-title milestone-title--idle">{t(milestoneKeys.title)}</h4>
                          <span className="milestone-thumbs" aria-hidden="true">
                            {milestone.images.slice(0, 3).map((image) => (
                              <img key={image.id} className="milestone-thumb" src={image.src} alt="" loading="lazy" />
                            ))}
                          </span>
                        </span>
                      </>
                    )}
                    {!isLast && <span className="milestone-divider" aria-hidden="true" />}
                  </span>
                </div>

                {isActive && renderGallery("inline")}
              </>
            );
          }}
        />

        {renderGallery("desktop")}
      </div>
    </div>
  );
}
