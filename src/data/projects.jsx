import { getSkillById } from "../utils/getSkillById";

import refinances from "../assets/projects/refinances.webp";
import dzero from "../assets/projects/DZERO.webp";
import investium from "../assets/projects/investium.webp";
import raizes from "../assets/projects/raízes solidárias.webp";
import valorant from "../assets/projects/valorant web.webp";
import aluraStudies from "../assets/projects/alura studies.webp";
import solar from "../assets/projects/solar.webp";
import bagify from "../assets/projects/bagify.webp";
import nutriTips from "../assets/projects/nutri tips.webp";

export const projects = [
  {
    id: "refinances",
    title: "Refinances",
    image: refinances,
    github: "https://github.com/mariana-santos/refinances",
    figma:
      "https://www.figma.com/file/l6NjNdvmTZ3H7ttO5mG8Pz/Evoke-team-library?node-id=0%3A1",
    video_id: "i9xEfPATjSk",
    params: "?start=681&autoplay=1",
    relevant: true,
    skills: [
      getSkillById("react-native"),
      getSkillById("typescript"),
      getSkillById("sql"),
      getSkillById("git"),
      getSkillById("figma"),
      getSkillById("node"),
    ],
  },
  {
    id: "dzero",
    title: "DZERO",
    image: dzero,
    video_id: "oI7Foi4lwig",
    deploy:
      "https://app.souionicahml.com/public-viewer/bb848de0-57bc-11f0-898f-91106d9a2d68",
    relevant: true,
    skills: [
      getSkillById("react"),
      getSkillById("typescript"),
      getSkillById("styled"),
      getSkillById("figma"),
      getSkillById("radix"),
    ],
  },
  {
    id: "investium",
    title: "Investium",
    image: investium,
    deploy: "https://investium-fiap.vercel.app/",
    github: "https://github.com/mariana-santos/repo_challenge",
    figma:
      "https://www.figma.com/design/UugKtNr32F4NW7UR14p5Ml/DEVZILLA?node-id=1-2&p=f&t=ReL7Qn4DE6Yp4J1D-0",
    video_id: "3nP4r-L_qqk",
    relevant: true,
    skills: [
      getSkillById("react"),
      getSkillById("javascript"),
      getSkillById("java"),
      getSkillById("figma"),
      getSkillById("sql"),
      getSkillById("git"),
    ],
  },
  {
    id: "raizes-solidarias",
    title: "Raízes Solidárias",
    image: raizes,
    github: "https://github.com/mariana-santos/GS2",
    video_id: "SJV4n5QrA_Y",
    relevant: true,
    skills: [
      getSkillById("next"),
      getSkillById("java"),
      getSkillById("sql"),
      getSkillById("git"),
      getSkillById("javascript"),
      getSkillById("python"),
    ],
  },
  {
    id: "valorant-web",
    title: "Valorant Web",
    image: valorant,
    github: "https://github.com/AlehSouza/Valorant-Web",
    deploy: "https://valorant-web.vercel.app/",
    video_id: "v7-2ZHXoqwM",
    skills: [
      getSkillById("next"),
      getSkillById("typescript"),
      getSkillById("chakra"),
      getSkillById("git"),
    ],
  },
  {
    id: "alura-studies",
    title: "Alura Studies",
    image: aluraStudies,
    github: "https://github.com/mariana-santos/alura-studies",
    deploy: "https://alura-studies-mariana-santos.vercel.app/",
    video_id: "9NvLtuW9PwA",
    skills: [
      getSkillById("react"),
      getSkillById("typescript"),
      getSkillById("scss"),
      getSkillById("git"),
    ],
  },
  {
    id: "solar",
    title: "Solar",
    image: solar,
    deploy: "https://solar-seven.vercel.app/",
    github: "https://github.com/mariana-santos/gs1",
    video_id: "nihtg3UWumg",
    skills: [
      getSkillById("javascript"),
      getSkillById("figma"),
      getSkillById("git"),
    ],
  },
  {
    id: "nutri-tips",
    title: "Nutri Tips",
    image: nutriTips,
    deploy: "https://nutri-tips.vercel.app/",
    github: "https://github.com/mariana-santos/Nutri-Tips",
    video_id: "yguCXU8AqJM",
    skills: [
      getSkillById("react"),
      getSkillById("javascript"),
      getSkillById("git"),
    ],
  },
  {
    id: "bagify",
    title: "Bagify",
    image: bagify,
    github: "https://github.com/mariana-santos/hackaton-copastur",
    figma:
      "https://www.figma.com/design/tyvf7T8X9Q4iEKbUC6Xqmy/Wireframe?node-id=23-2028&p=f&t=rzA5lfewKbvYaOYR-0",
    video_id: "nihtg3UWumg",
    skills: [
      getSkillById("react-native"),
      getSkillById("javascript"),
      getSkillById("figma"),
      getSkillById("react-native"),
      getSkillById("git"),
    ],
  },
];
