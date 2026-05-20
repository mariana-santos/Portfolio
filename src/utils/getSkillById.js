import { skills } from "../data/skills";

export const getSkillById = (id) => {
  return skills.find(skill => skill.id === id);
}