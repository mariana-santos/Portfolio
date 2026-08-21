import "./style.css";
import { useConfig } from "../../../contexts/config";
import { keys } from "../../../locales/keys";
import Timeline from "../../Timeline";
import pic from "../../../assets/about-picture.webp";

const MILESTONES = [
  { id: "milestone-1", year: "2014" },
  { id: "milestone-2", year: "2019" },
  { id: "milestone-3", year: "2022" },
  { id: "milestone-4", year: "2024" },
];

export default function EngineerView() {
  const { t } = useConfig();

  return (
    <div>
      <p className="milestones-intro">{t("home.about.milestones-intro")}</p>

      <div className="milestones-container">
        <Timeline
          className="milestones"
          items={MILESTONES}
          getCounter={(milestone) => milestone.year}
          renderItem={(milestone) => {
            const milestoneKeys = keys.milestone(milestone.id);

            return (
              <div className="milestone-content">
                <span className="milestone-tag">{t(milestoneKeys.tag)}</span>
                <h4 className="milestone-title">{t(milestoneKeys.title)}</h4>
                <p className="milestone-description">{t(milestoneKeys.description)}</p>
              </div>
            );
          }}
        />

        <div className="wrapper-pic" data-aos="fade-down">
          <div className="pic">
            <div className="line-element" />
            <img
              src={pic}
              alt={t("home.about.image-alt")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}