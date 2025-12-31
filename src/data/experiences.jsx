import { getSkillByName } from '../utils/getSkillByName';
import { v4 as uuid } from 'uuid';

export const experiences_pt = [
  {
    id: uuid(),
    title: "Desenvolvedora Front-end",
    level: "Pleno",
    location: "Outliant",
    period: "12/2024 — presente",
    duration: "1 ano",
    type: "work",
    link: "https://www.outliant.com/",
    summary:
      "Desenvolvo aplicações robustas e escaláveis usando ferramentas como o Webflow, React e o Typescript para diversos clientes globais da empresa.",
    skills: [
      getSkillByName("React", "pt"),
      getSkillByName("Typescript", "pt"),
      getSkillByName("Webflow", "pt"),
      getSkillByName("Styled Components", "pt"),
      getSkillByName("Figma", "pt"),
    ],
    details: [
      'Participei da entrega de projetos para grandes empresas estadunidenses e globais',
      'Priorizei a performance e a otimização do SEO para aumentar a visibilidade e melhorar a experiência do usuário',
      'Documentei o processo técnico dos projetos para referência futura',
      'Colaborei com um time global, incluindo DevOps, QA e PMs, sempre priorizando a comunicação',
    ]
  },
  {
    id: uuid(),
    title: "Desenvolvedora Front-end",
    level: "Pleno",
    location: "FTD Educação",
    period: "10/2023 — 06/2025",
    duration: "2 anos",
    type: "work",
    link: "https://ftd.com.br/",
    summary:
      "Na editora FTD participei do desenvolvimento de objetos educacionais digitais para diversos editoriais e selos da editora, do ensino infantil ao ensino médio.",
    skills: [
      getSkillByName("React", "pt"),
      getSkillByName("Typescript", "pt"),
      getSkillByName("SCSS", "pt"),
      getSkillByName("Styled Components", "pt"),
      getSkillByName("Figma", "pt"),
    ],
    details: [
      'Gerenciei times de desenvolvedores externos dedicados a entregar os objetos digitais da editora',
      'Participei do desenvolvimento de diversas plataformas de clientes internos da editora: desde artigos educacionais até jogos e infográficos interativos',
      'Participei do desenvolvimento de uma variedade de componentes escaláveis e usados em diversos produtos da empresa',
      'Participei da automação do processo de desenvolvimento da empresa, tornando o trabalho ágil e rápido',
      'Assisti clientes internos da editora ao longo de todo o processo de desenvolvimento, colaborando para criar soluções digitais personalizadas e otimizadas, desde a concepção até a entrega final',
    ]
  },
  {
    id: uuid(),
    title: "Desenvolvedora Front-end",
    level: "Júnior",
    location: "Agência Choveu",
    period: "03/2022 — 03/2024",
    duration: "2 anos",
    type: "work",
    link: "https://choveu.com/",
    summary:
      "Na Agência Choveu participei da criação e manutenção de websites usando Wordpress e tecnologias como HTML, CSS, SCSS e PHP. Passei esse tempo aprimorando minhas habilidades em desenvolvimento web e buscando soluções inovadoras para atender às necessidades dos clientes",
    skills: [
      getSkillByName("Wordpress", "pt"),
      getSkillByName("JQuery", "pt"),
      getSkillByName("Bootstrap", "pt"),
      getSkillByName("SCSS", "pt"),
      getSkillByName("Figma", "pt"),
    ],
    details: [
      'Desenvolvimento de aplicações frontend para diversos clientes, com destaque para aplicações em Wordpress.',
      'Melhoria da acessibilidade, SEO e experiência geral das aplicações.',
      'Criação de Landing Pages para eventos, webinars, produtos e outros.',
      'Criação de campanhas de e-mail marketing utilizando plataformas como OCE e RD Station.'
    ]
  },
  {
    id: uuid(),
    abbreviatedTitle: "ADS",
    title: "Análise e Desenvolvimento de Sistemas",
    level: "Graduação",
    type: "academic",
    period: "08/2022 — 08/2024",
    duration: "2 anos",
    location: "FIAP",
    link: "https://www.fiap.com.br/",
    summary:
      "Durante minha graduação na FIAP, aprimorei minhas habilidades em desenvolvimento web, mobile, banco de dados e inteligência artificial. Além disso, tenho a chance de criar projetos práticos em parceria com empresas incríveis, como a B3 e a Level Group.",
    skills: [
      getSkillByName("Java", "pt"),
      getSkillByName("Python", "pt"),
      getSkillByName("Figma", "pt"),
      getSkillByName("Tailwind", "pt"),
      getSkillByName("Figma", "pt"),
      getSkillByName("SQL Server", "pt"),
      getSkillByName("Next JS", "pt"),
    ],
    details: [
      'Desenvolvimento de aplicações práticas full-stack a partir de desafios propostos por diversas empresas parceiras da FIAP.',
      'Entrega de projetos reais utilizando a metodologia SCRUM, garantindo uma gestão eficiente e conclusão dentro do prazo.',
      'Engajada ativamente em eventos de tecnologia, palestras e hackatons.',
    ]
  },
  {
    id: uuid(),
    title: "Desenvolvimento de Sistemas",
    level: "Técnico",
    type: "academic",
    period: "02/2019 — 11/2021",
    duration: "3 anos",
    location: "ETEC de Guaianazes",
    link: "https://www.etecguaianazes.com.br/",
    summary:
      "Na ETEC eu descobri a programação como profissão. Durante os 3 anos que estive lá construí uma base sólida em lógica de programação e desenvolvimento. Também tive experiências incríveis como as maratonas de programação e visitas técnicas em empresas de grande porte.",
    skills: [
      getSkillByName("Javascript"),
      getSkillByName("Typescript"),
      getSkillByName("React Native"),
      getSkillByName("Git"),
      getSkillByName("SQL Server"),
    ],
    details: [
      'Desenvolvimento de aplicações full-stack web e mobile proposta pelos professores.',
      'Participação em diversas aulas de robótica com Arduino e a linguagem C.',
      'Engajada ativamente em eventos de tecnologia, palestras e maratonas de programação.',
    ]
  },
];

export const experiences_en = [
  {
    ...experiences_pt[0],
    id: uuid(),
    title: "Frontend Software Engineer",
    level: "Mid-level",
    period: "12/2024 — present",
    duration: "1 year",
    summary:
      "Developed robust and scalable applications using tools such as Webflow, React and Typescript for several global clients.",
    details: [
      "Delivered projects for major US and global clients.",
      "Prioritized performance and SEO optimization to boost visibility and improve user experience.",
      'Documented the technical process of the projects for future reference.',
      'Collaborated with a global team, including DevOps, QA and Project Management, always prioritizing communication.'
    ]
  },
  {
    ...experiences_pt[1],
    id: uuid(),
    title: "Frontend Developer",
    level: "Mid-level",
    duration: "2 years",
    summary:
      "At FTD I participated in the development of digital educational objects for several editorials and imprints of the publisher, from kindergarten to high school.",
    details: [
      "Managed development teams dedicated to deliver the editor’s digital objects",
      "Participated in the development of several internal client’s platforms: from educational articles to games and interactive infographics",
      'Participated in the development of several scalable components used in several products of the company',
      'Participated in the automation of the team’s development process, making our work more valuable and agile',
      'Assisted internal clients through the development process, collaborating to create personalized and optimized digital solutions, from the concept to the final delivery',
    ]
  },
  {
    ...experiences_pt[2],
    id: uuid(),
    title: "Frontend Developer",
    level: "Junior",
    duration: "2 years",
    summary:
      "At Choveu I created and maintained websites using Wordpress and technologies such as HTML, CSS, SCSS, and PHP. I constantly improved my skills in web development and seeked innovative solutions to meet the projects needs.",
    details: [
      'Built frontend applications for multiple clients. Most especially Wordpress applications.',
      'Improved accessibility, SEO and overall experience of products.',
      'Built Landing Pages for events, webinars, products and others.',
      'Built e-mail marketing with several platforms, such as OCE and RD Station'
    ]
  },
  {
    ...experiences_pt[3],
    id: uuid(),
    title: "Systems Analysis and Development",
    level: "Bachelor's Degree",
    duration: "2 years",
    summary:
      "During my graduation at FIAP, I was able to enhance my skills in web development, mobile development, database management and artificial intelligence. Additionally, I get to be involved in practical projects in partnership with incredible companies, such as B3 and Level Group.",
    details: [
      'Developed practical full-stack applications through engaging challenges presented by various partner companies associated with FIAP.',
      'Successfully delivered real-world projects utilizing the SCRUM methodology, ensuring efficient project management and timely completion.',
      'Actively engaged in attending and contributing to technology events, including attending lectures, participating in hackathons and others.',
    ]
  },
  {
    ...experiences_pt[4],
    id: uuid(),
    title: "Systems Development",
    level: "Technician",
    duration: "3 years",
    summary:
      "ETEC is where I discovered programming as a career. During the 3 years I spent there, I built a solid foundation in programming logic and development. I also had incredible experiences such as programming marathons and technical visits.",
    details: [
      'Developed full-stack web and mobile applications proposed by the teachers.',
      'Participated in robotics classes with Arduino and C programming language.',
      'Actively engaged in technology events, lectures, and programming marathons.',
    ]
  },
];
