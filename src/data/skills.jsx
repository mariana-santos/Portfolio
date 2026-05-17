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
  },
  {
    id: "typescript",
    type: "language",
    icon: { lib: "bi", name: "BiLogoTypescript", color: "#007BCD" },
  },
  {
    id: "react",
    type: "library",
    icon: { lib: "bi", name: "BiLogoReact", color: "#61DBFB" },
  },
  {
    id: "react-native",
    type: "library",
    icon: { lib: "bi", name: "BiLogoReact", color: "#61DBFB" },
  },
  {
    id: "git",
    type: "tool",
    icon: { lib: "bi", name: "BiLogoGit", color: "#F05033" },
  },
  {
    id: "next",
    type: "library",
    icon: { lib: "si", name: "SiNextdotjs", color: "#000" },
  },
  {
    id: "scrum",
    type: "tool",
    icon: { lib: "img", src: scrumLogo, alt: "Scrum" },
  },
  {
    id: "sql",
    type: "other",
    icon: { lib: "bs", name: "BsFillDatabaseFill", color: "#0088D3" },
  },
  {
    id: "scss",
    type: "other",
    icon: { lib: "di", name: "DiSass", color: "#e9639b" },
    hide: true,
  },
  {
    id: "wordpress",
    type: "platform",
    icon: { lib: "bs", name: "BsWordpress", color: "#444140" },
  },
  {
    id: "java",
    type: "language",
    icon: { lib: "img", src: javaLogo, alt: "Java" },
  },
  {
    id: "python",
    type: "language",
    icon: { lib: "img", src: pythonLogo, alt: "Python" },
  },
  {
    id: "figma",
    type: "platform",
    icon: { lib: "img", src: figmaLogo, alt: "Figma" },
  },
  {
    id: "material-ui",
    type: "library",
    icon: { lib: "si", name: "SiMui", color: "#007FFF" },
  },
  {
    id: "radix-ui",
    type: "library",
    icon: { lib: "si", name: "SiRadixui", color: "#007FFF" },
  },
  {
    id: "bootstrap",
    type: "library",
    icon: { lib: "si", name: "SiBootstrap", color: "#7809F7" },
  },
  {
    id: "tailwind",
    type: "library",
    icon: { lib: "bi", name: "BiLogoTailwindCss", color: "#38BDF8" },
  },
  {
    id: "jquery",
    type: "library",
    icon: { lib: "bi", name: "BiLogoJquery", color: "#202124" },
    hide: true,
  },
  {
    id: "chakra",
    type: "library",
    icon: { lib: "img", src: chackraUILogo, alt: "Chakra UI" },
    hide: true,
  },
  {
    id: "node",
    type: "other",
    icon: { lib: "bi", name: "BiLogoJavascript", color: "#F4CB0B" },
    hide: true,
  },
  {
    id: "styled-components",
    type: "other",
    icon: { lib: "si", name: "SiStyledcomponents", color: "#FFCF48" },
    hide: true,
  },
  {
    id: "webflow",
    type: "platform",
    icon: { lib: "img", src: webflowLogo, alt: "Webflow" },
  },
];
