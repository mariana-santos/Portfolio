import { skills_en, skills_pt } from "../data/skills";

export const getSkillByName = (name, lang) => {
  if (lang === "pt")
    return skills_pt.find(skill => skill.name === name);

  return skills_en.find(skill => skill.name === name);
}