import { getSkillById } from "../utils/getSkillById";

import outliant from "../assets/experiences/outliant.jpg";
import choveu from "../assets/experiences/choveu.jpg";
import ftd from "../assets/experiences/ftd.jpg";
import fiap from "../assets/experiences/fiap.jpg";
import etec from "../assets/experiences/etec.jpg";

export const experiences = [
  {
    id: "outliant",
    icon: { lib: "img", src: outliant },
    type: "work",
    link: "https://www.outliant.com/",
    skills: [
      getSkillById("react"),
      getSkillById("typescript"),
      getSkillById("webflow"),
      getSkillById("styled-components"),
      getSkillById("figma"),
    ],
  },
  {
    id: "ftd",
    icon: { lib: "img", src: ftd },
    type: "work",
    link: "https://ftd.com.br/",
    skills: [
      getSkillById("react"),
      getSkillById("typescript"),
      getSkillById("scss"),
      getSkillById("styled-components"),
      getSkillById("figma"),
    ],
  },
  {
    id: "choveu",
    icon: { lib: "img", src: choveu },
    type: "work",
    link: "https://choveu.com/",
    skills: [
      getSkillById("wordpress"),
      getSkillById("jquery"),
      getSkillById("bootstrap"),
      getSkillById("scss"),
      getSkillById("figma"),
    ],
  },
  {
    id: "fiap",
    icon: { lib: "img", src: fiap },
    type: "academic",
    link: "https://www.fiap.com.br/",
    skills: [
      getSkillById("java"),
      getSkillById("python"),
      getSkillById("figma"),
      getSkillById("tailwind"),
      getSkillById("sql"),
      getSkillById("next"),
    ],
  },
  {
    id: "etec",
    icon: { lib: "img", src: etec },
    type: "academic",
    link: "https://www.etecguaianazes.com.br/",
    skills: [
      getSkillById("javascript"),
      getSkillById("typescript"),
      getSkillById("react-native"),
      getSkillById("git"),
      getSkillById("sql"),
    ],
  },
];
