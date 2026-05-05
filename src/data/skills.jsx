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

import figmaLogo from "../assets/skills-logos/figma.webp";
import javaLogo from "../assets/skills-logos/java.webp";
import pythonLogo from "../assets/skills-logos/python.webp";
import scrumLogo from "../assets/skills-logos/scrum.webp";
import chackraUILogo from "../assets/skills-logos/chackra-ui.webp";
import webflowLogo from "../assets/skills-logos/webflow.png";

export const skills = [
  {
    id: "javascript",
    type: "language",
    icon: { lib: "bi", name: "BiLogoJavascript", color: "#F4CB0B" },
    nameKey: "skills.javascript.name",
    summaryKey: "skills.javascript.summary",
  },
  {
    id: "typescript",
    type: "language",
    icon: { lib: "bi", name: "BiLogoTypescript", color: "#007BCD" },
    nameKey: "skills.typescript.name",
    summaryKey: "skills.typescript.summary",
  },
  {
    id: "react",
    type: "library",
    icon: { lib: "bi", name: "BiLogoReact", color: "#61DBFB" },
    nameKey: "skills.react.name",
    summaryKey: "skills.react.summary",
  },
  {
    id: "react-native",
    type: "library",
    icon: { lib: "bi", name: "BiLogoReact", color: "#61DBFB" },
    nameKey: "skills.react_native.name",
    summaryKey: "skills.react_native.summary",
  },
  {
    id: "git",
    type: "tool",
    icon: { lib: "bi", name: "BiLogoGit", color: "#F05033" },
    nameKey: "skills.git.name",
    summaryKey: "skills.git.summary",
  },
  {
    id: "next",
    type: "library",
    icon: { lib: "si", name: "SiNextdotjs", color: "#000" },
    nameKey: "skills.next.name",
    summaryKey: "skills.next.summary",
  },
  {
    id: "scrum",
    type: "tool",
    icon: { lib: "img", src: scrumLogo, alt: "Scrum" },
    nameKey: "skills.scrum.name",
    summaryKey: "skills.scrum.summary",
  },
  {
    id: "sql",
    type: "other",
    icon: { lib: "bs", name: "BsFillDatabaseFill", color: "#0088D3" },
    nameKey: "skills.sql.name",
    summaryKey: "skills.sql.summary",
  },
  {
    id: "scss",
    type: "other",
    icon: { lib: "di", name: "DiSass", color: "#e9639b" },
    nameKey: "skills.scss.name",
    summaryKey: "skills.scss.summary",
    hide: true,
  },
  {
    id: "wordpress",
    type: "platform",
    icon: { lib: "bs", name: "BsWordpress", color: "#444140" },
    nameKey: "skills.wordpress.name",
    summaryKey: "skills.wordpress.summary",
  },
  {
    id: "java",
    type: "language",
    icon: { lib: "img", src: javaLogo, alt: "Java" },
    nameKey: "skills.java.name",
    summaryKey: "skills.java.summary",
  },
  {
    id: "python",
    type: "language",
    icon: { lib: "img", src: pythonLogo, alt: "Python" },
    nameKey: "skills.python.name",
    summaryKey: "skills.python.summary",
  },
  {
    id: "figma",
    type: "platform",
    icon: { lib: "img", src: figmaLogo, alt: "Figma" },
    nameKey: "skills.figma.name",
    summaryKey: "skills.figma.summary",
  },
  {
    id: "mui",
    type: "library",
    icon: { lib: "si", name: "SiMui", color: "#007FFF" },
    nameKey: "skills.mui.name",
    summaryKey: "skills.mui.summary",
  },
  {
    id: "radix",
    type: "library",
    icon: { lib: "si", name: "SiRadixui", color: "#007FFF" },
    nameKey: "skills.radix.name",
    summaryKey: "skills.radix.summary",
  },
  {
    id: "bootstrap",
    type: "library",
    icon: { lib: "si", name: "SiBootstrap", color: "#7809F7" },
    nameKey: "skills.bootstrap.name",
    summaryKey: "skills.bootstrap.summary",
  },
  {
    id: "tailwind",
    type: "library",
    icon: { lib: "bi", name: "BiLogoTailwindCss", color: "#38BDF8" },
    nameKey: "skills.tailwind.name",
    summaryKey: "skills.tailwind.summary",
  },
  {
    id: "jquery",
    type: "library",
    icon: { lib: "bi", name: "BiLogoJquery", color: "#202124" },
    nameKey: "skills.jquery.name",
    hide: true,
  },
  {
    id: "chakra",
    type: "library",
    icon: { lib: "img", src: chackraUILogo, alt: "Chakra UI" },
    nameKey: "skills.chakra.name",
    hide: true,
  },
  {
    id: "node",
    type: "other",
    icon: { lib: "bi", name: "BiLogoJavascript", color: "#F4CB0B" },
    nameKey: "skills.node.name",
    hide: true,
  },
  {
    id: "styled",
    type: "other",
    icon: { lib: "si", name: "SiStyledcomponents", color: "#FFCF48" },
    nameKey: "skills.styled.name",
    hide: true,
  },
  {
    id: "webflow",
    type: "platform",
    icon: { lib: "img", src: webflowLogo, alt: "Webflow" },
    nameKey: "skills.webflow.name",
    summaryKey: "skills.webflow.summary",
  },
];
