import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoGit,
  BiLogoTailwindCss,
  BiLogoJquery,
} from "react-icons/bi";

import {
  SiNextdotjs,
  SiMui,
  SiBootstrap,
  SiStyledcomponents,
  SiRadixui,
} from "react-icons/si";

import { BsFillDatabaseFill, BsWordpress } from "react-icons/bs";
import { DiSass } from "react-icons/di";

import './style.css'

const iconLibraries = {
  bi: {
    BiLogoJavascript,
    BiLogoTypescript,
    BiLogoReact,
    BiLogoGit,
    BiLogoTailwindCss,
    BiLogoJquery,
  },
  si: {
    SiNextdotjs,
    SiMui,
    SiBootstrap,
    SiStyledcomponents,
    SiRadixui,
  },
  bs: {
    BsFillDatabaseFill,
    BsWordpress,
  },
  di: {
    DiSass,
  },
};

export default function SkillIcon({ icon, size = 24, rounded = false }) {
  if (!icon) return null;

  if (icon.lib === "img") {
    return (
      <img
        src={icon.src}
        alt={icon.alt || "Skill"}
        width={size}
        height={size}
        loading="lazy"
        className={`icon ${rounded ? "rounded" : ""}`}
      />
    );
  }

  const IconComponent = iconLibraries[icon.lib]?.[icon.name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent color={icon.color} size={size} className={`icon ${rounded ? "rounded" : ""}`} aria-hidden="true" />;
}