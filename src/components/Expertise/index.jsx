import { 
  HiOutlineChatBubbleLeftRight, 
  HiOutlineDevicePhoneMobile, 
  HiOutlineSquares2X2, 
  HiOutlinePaintBrush, 
  HiOutlineShieldCheck,
  HiOutlineCodeBracket  
} from "react-icons/hi2";

import "./style.css";

import { useConfig } from "../../contexts/config";
import { keys } from "../../locales/keys";
import ExpertiseCard from "../ExpertiseCard";

import { skills } from "../../data/skills";

export default function Expertise() {
  const { t } = useConfig();

  const filteredSkills = skills.filter((skill) => !skill.hide);

  const cards = [
    { key: "dev-web", Icon: HiOutlineCodeBracket, highlighted: true },
    { key: "arq-frontend", Icon: HiOutlineSquares2X2 },
    { key: "dev-mobile", Icon: HiOutlineDevicePhoneMobile },
    { key: "ux-ui", Icon: HiOutlinePaintBrush },
    { key: "test-quality", Icon: HiOutlineShieldCheck },
    { key: "communication-collaboration", Icon: HiOutlineChatBubbleLeftRight },
  ].map((card) => {
    const expertiseKeys = keys.expertise(card.key);

    return {
      ...card,
      title: t(expertiseKeys.title),
      description: t(expertiseKeys.description),
      impact: t(expertiseKeys.impact),
    };
  });

  return (
    <section className="container" id="expertise" data-aos="fade-up">
      <h2 className="code">{t("expertise.title")}</h2>

      <div className="expertise-cards">
        {cards.map((card) => (
          <ExpertiseCard key={card.key} card={card} skills={filteredSkills} />
        ))}
      </div>

      <h2 className="code close">{t("expertise.title")}</h2>
    </section>
  );
}
