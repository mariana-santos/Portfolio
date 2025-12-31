import { getSkillByName } from '../utils/getSkillByName';

export const experiences_pt = [
  {
    id: 5,
    title: "Desenvolvedora Front-end",
    level: "Pleno",
    location: "Outliant",
    period: "12/2024 — presente",
    type: "work",
    link: "https://www.outliant.com/",
    summary:
      "Na editora FTD participo e acompanho o desenvolvimento de objetos educacionais digitais para diversos editoriais e selos da editora, do ensino infantil ao ensino médio com o uso de tecnologias como React e Typescript.",
    skills: [
      getSkillByName("React", "pt"),
      getSkillByName("Typescript", "pt"),
      getSkillByName("SCSS", "pt"),
      getSkillByName("Styled Components", "pt"),
      getSkillByName("Figma", "pt"),
    ],
    details: [
      'Desenvolvimento de aplicações Frontend em React para clientes internos da editora.',
      'Acompanhamento de projetos com outros desenvolvedores, avaliando e melhorando código alheio.',
      'Criação de projetos educacionais, como artigos interativos e plataformas gamificadas.',
    ]
  },
  {
    id: 1,
    title: "Desenvolvedora Front-end",
    level: "Pleno",
    location: "FTD Educação",
    period: "10/2023 — 06/2025",
    type: "work",
    link: "https://ftd.com.br/",
    summary:
      "Na editora FTD participo e acompanho o desenvolvimento de objetos educacionais digitais para diversos editoriais e selos da editora, do ensino infantil ao ensino médio com o uso de tecnologias como React e Typescript.",
    skills: [
      getSkillByName("React", "pt"),
      getSkillByName("Typescript", "pt"),
      getSkillByName("SCSS", "pt"),
      getSkillByName("Styled Components", "pt"),
      getSkillByName("Figma", "pt"),
    ],
    details: [
      'Desenvolvimento de aplicações Frontend em React para clientes internos da editora.',
      'Acompanhamento de projetos com outros desenvolvedores, avaliando e melhorando código alheio.',
      'Criação de projetos educacionais, como artigos interativos e plataformas gamificadas.',
    ]
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    title: "Frontend Developer",
    level: "Mid-level",
    duration: "present",
    summary:
      "At FTD I participate and follow the development of digital educational objects to several editorials, from kindergarten all the way to highschool. Using technologies such as React and Typescript.",
    details: [
      "Built frontend applications for the publisher's internal clients.",
      "Followed projects with other developers, evaluating and improving other's code.",
      'Created educational projects, such as digital interactive articles and gamified platforms.',
    ]
  },
  {
    ...experiences_pt[1],
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
    ...experiences_pt[2],
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
    ...experiences_pt[3],
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
