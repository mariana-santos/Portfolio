import { BiLogoJavascript, BiLogoTypescript, BiLogoReact, BiLogoGit, BiLogoTailwindCss, BiLogoJquery } from 'react-icons/bi'

import { SiNextdotjs, SiPhp, SiMui, SiBootstrap } from 'react-icons/si'

import { BsFillDatabaseFill, BsWordpress } from 'react-icons/bs'

import { DiSass } from 'react-icons/di'

export const experiences_pt = [
  {
    id: 1,
    title: "Desenvolvedora Web Jr.",
    location: "Agência Choveu",
    period: "03/2022 — presente",
    duration: "1 ano",
    type: "work",
    link: "https://choveu.com/",
    summary:
      "Na Agência Choveu, crio e mantenho websites usando Wordpress e outras tecnologias como HTML, CSS, SCSS e PHP. Estou sempre aprimorando minhas habilidades em desenvolvimento web e buscando soluções inovadoras para atender às necessidades dos projetos",
    skills: [
      {
        id: 18,
        name: "Wordpress",
        icon: <BsWordpress color='444140'/>,
      },
      {
        id: 17,
        name: "JQuery",
        icon: <BiLogoJquery color='#202124'/>,
      },
      {
        id: 16,
        name: "Bootstrap",
        icon: <SiBootstrap color='#7809F7' />,
      },
      {
        id: 6,
        name: "SCSS",
        icon: <DiSass color='#e9639b' />,
      },
      {
        id: 13,
        name: "Figma",
        icon: <img src={require(`./skills-logos/figma.webp`)} alt="Logotipo da ferramenta de prototipação Figma" />
      },
    ],
    details: [
      'Desenvolvimento de aplicações frontend para diversos clientes, com destaque para aplicações em Wordpress.',
      'Melhoria da acessibilidade, SEO e experiência geral das aplicações.',
      'Criação de Landing Pages para eventos, webinars, produtos e outros.',
      'Criação de campanhas de e-mail marketing utilizando plataformas como OCE e RD Station.'
    ]
  },
  {
    id: 2,
    title: "Graduação em Análise e Desenvolvimento de Sistemas",
    type: "academic",
    period: "08/2022 a 08/2024 — presente",
    duration: "2 anos",
    location: "FIAP",
    link: "https://www.fiap.com.br/",
    summary:
      "Durante minha graduação na FIAP, sigo aprimorando minhas habilidades em desenvolvimento web, mobile, banco de dados, inteligência artificial e chatbot. Além disso, tenho a chance de criar projetos práticos em parceria com empresas incríveis, como a B3.",
    skills: [
      {
        id: 9,
        name: "Java",
        icon: <img src={require(`./skills-logos/java.webp`)} alt="Logotipo da linguagem de programação Java" />
      },
      {
        id: 10,
        name: "Python",
        icon: <img src={require(`./skills-logos/python.webp`)} alt="Logotipo da linguagem de programação Python" />,
      },
      {
        id: 4,
        name: "React Native",
        icon: <BiLogoReact color='#61DBFB' />,
      },
      {
        id: 13,
        name: "Figma",
        icon: <img src={require(`./skills-logos/figma.webp`)} alt="Logotipo da ferramenta de prototipação Figma" />
      },
      {
        id: 14,
        name: "Material UI",
        icon: <SiMui color='007FFF'/>,
      },
      {
        id: 7,
        name: "SQL Server",
        icon: <BsFillDatabaseFill color='#0088D3' />,
      },
      {
        id: 5,
        name: "Next Js",
        icon: <SiNextdotjs color='#000' />,
      },
    ],
    details: [
      'Desenvolvimento de aplicações práticas full-stack a partir de desafios propostos por diversas empresas parceiras da FIAP.',
      'Entrega de projetos reais utilizando a metodologia SCRUM, garantindo uma gestão eficiente e conclusão dentro do prazo.',
      'Engajada ativamente em eventos de tecnologia, palestras e hackatons.',
    ]
  },
  {
    id: 3,
    title: "Técnico em Desenvolvimento de Sistemas",
    type: "academic",
    period: "02/2019 — 11/2021",
    duration: "3 anos",
    location: "ETEC de Guaianazes",
    link: "https://www.etecguaianazes.com.br/",
    summary:
      "A ETEC foi onde eu descobri a programação como profissão. Durante os 3 anos que estive lá, construí uma base sólida em lógica de programação e desenvolvimento. Também tive experiências incríveis como as maratonas de programação e visitas técnicas.",
    skills: [
      {
        id: 1,
        name: "Javascript",
        icon: <BiLogoJavascript color='F4CB0B'/>,
      },
      {
        id: 2,
        name: "Typescript",
        icon: <BiLogoTypescript color='007BCD' />,
      },
      {
        id: 4,
        name: "React Native",
        icon: <BiLogoReact color='#61DBFB' />,
      },
      {
        id: 11,
        name: "Git",
        icon: <BiLogoGit color='#F05033' />,
      },
      {
        id: 7,
        name: "SQL Server",
        icon: <BsFillDatabaseFill color='#0088D3' />,
      },
      {
        id: 19,
        name: "PHP",
        icon: <SiPhp color='#787CB4'/>,
      },
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
    id: 1,
    title: "Junior Web Developer",
    location: "Choveu Agency",
    period: "03/2022 — present",
    duration: "1 year",
    type: "work",
    link: "https://choveu.com/",
    summary:
      "At Choveu, I create and maintain websites using Wordpress and technologies such as HTML, CSS, SCSS, and PHP. I am constantly improving my skills in web development and seeking innovative solutions to meet the projects needs.",
    skills: experiences_pt[0].skills,
    details: [
      'Built frontend applications for multiple clients. Most especially Wordpress applications.',
      'Improved accessibility, SEO and overall experience of products.',
      'Built Landing Pages for events, webinars, products and others.',
      'Built e-mail marketing with several platforms, such as OCE and RD Station'
    ]
  },
  {
    id: 2,
    title: "Bachelor's Degree in Analysis and Systems Development",
    type: "academic",
    period: "08/2022 to 08/2024 — present",
    duration: "2 years",
    location: "FIAP",
    link: "https://www.fiap.com.br/",
    summary:
      "During my graduation at FIAP, I am enhancing my skills in web development, mobile development, database management, artificial intelligence, and chatbot development. Additionally, I get to be involved in practical projects in partnership with incredible companies, such as B3.",
    skills: experiences_pt[1].skills,
    details: [
      'Developed practical full-stack applications through engaging challenges presented by various partner companies associated with FIAP.',
      'Successfully delivered real-world projects utilizing the SCRUM methodology, ensuring efficient project management and timely completion.',
      'Actively engaged in attending and contributing to technology events, including attending lectures, participating in hackathons and others.',
    ]
  },
  {
    id: 3,
    title: "Systems Development Technician",
    type: "academic",
    period: "02/2019 — 11/2021",
    duration: "3 years",
    location: "ETEC de Guaianazes",
    link: "https://www.etecguaianazes.com.br/",
    summary:
      "ETEC is where I discovered programming as a career. During the 3 years I spent there, I built a solid foundation in programming logic and development. I also had incredible experiences such as programming marathons and technical visits.",
    skills: experiences_pt[2].skills,
    details: [
      'Developed full-stack web and mobile applications proposed by the teachers.',
      'Participated in robotics classes with Arduino and C programming language.',
      'Actively engaged in technology events, lectures, and programming marathons.',
    ]
  },
];
