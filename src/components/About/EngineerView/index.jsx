import { useConfig } from "../../../contexts/config";
import pic from "../../../assets/about-picture.webp";


export default function EngineerView() {
  const { t } = useConfig();
  return (
    <div>
      ENGINEER VIEW
      <div className="column text-about">{t("home.about.body")}</div>
      
      <div className="column wrapper-pic" data-aos="fade-down">
        <div className="pic">
          <div className="line-element" />
          <img
            src={pic}
            alt={t("home.about.image-alt")}
          />
        </div>
      </div>
    </div>
  );
}