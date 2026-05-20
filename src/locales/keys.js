const experience = (id) => ({
  title: `experiences.list.${id}.title`,
  abbreviatedTitle: `experiences.list.${id}.abbreviated-title`,
  level: `experiences.list.${id}.level`,
  company: `experiences.list.${id}.company`,
  school: `experiences.list.${id}.school`,
  location: `experiences.list.${id}.location`,
  workLocationType: `experiences.list.${id}.work-location-type`,
  period: `experiences.list.${id}.period`,
  duration: `experiences.list.${id}.duration`,
  summary: `experiences.list.${id}.summary`,
  details: `experiences.list.${id}.details`,
  logoAlt: `experiences.list.${id}.logo-alt`,
});

const skill = (id) => ({
  name: `skills.list.${id}.name`,
  summary: `skills.list.${id}.summary`,
});

const project = (id) => ({
  subtitle: `projects.list.${id}.subtitle`,
  description: `projects.list.${id}.description`,
  summaryDescription: `projects.list.${id}.summary-description`,
});

const expertise = (key) => ({
  title: `expertise.list.${key}.title`,
  description: `expertise.list.${key}.description`,
  impact: `expertise.list.${key}.impact`,
});

export const keys = { experience, skill, project, expertise };
