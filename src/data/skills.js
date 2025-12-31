import { 
  BiLogoJavascript, 
  BiLogoTypescript, 
  BiLogoReact, 
  BiLogoGit, 
  BiLogoTailwindCss,
  BiLogoJquery,
} from 'react-icons/bi'

import { SiNextdotjs, SiMui, SiBootstrap, SiStyledcomponents } from 'react-icons/si'
import { BsFillDatabaseFill, BsWordpress } from 'react-icons/bs'
import { DiSass } from 'react-icons/di'

import figmaLogo from "../assets/skills-logos/figma.webp";
import javaLogo from "../assets/skills-logos/java.webp";
import pythonLogo from "../assets/skills-logos/python.webp";
import scrumLogo from "../assets/skills-logos/scrum.webp";
import chackraUILogo from "../assets/skills-logos/chackra-ui.webp";
import webflowLogo from "../assets/skills-logos/webflow.png";
import { Fragment } from 'react';

export const skills_pt = [
  {
    id: 1,
    name: "Javascript",
    type: 'language',
    icon: <BiLogoJavascript color='F4CB0B'/>,
    summary: (
      <Fragment>
        <p>
          Javascript é utilizado no desenvolvimento web e mobile com ferramentas como React e Next JS</p>
      </Fragment>
    ),
  },
  {
    id: 2,
    name: "Typescript",
    type: 'language',
    icon: <BiLogoTypescript color='007BCD' />,
    summary: (
      <Fragment>
        <p>
          Typescript é uma extensão do Javascript que permite criar aplicações ainda mais robustas</p>
      </Fragment>
    ),
  },
  {
    id: 3,
    name: "React",
    type: 'library',
    icon: <BiLogoReact color='#61DBFB' />,
    summary: (
      <Fragment>
        <p>
          React é uma biblioteca JavaScript popular para construir <strong>interfaces de
            usuário.</strong> </p>
      </Fragment>
    ),
  },
  {
    id: 4,
    name: "React Native",
    type: 'library',
    icon: <BiLogoReact color='#61DBFB' />,
    summary: (
      <Fragment>
        <p>
          React Native é um framework para construir <strong>aplicativos móveis</strong> usando
          React.
        </p>
      </Fragment>
    ),
  },
  {
    id: 11,
    name: "Git",
    type: 'tool',
    icon: <BiLogoGit color='#F05033' />,
    summary: (
      <Fragment>
        <p>
          Git é um sistema de controle de versão <strong>amplamente utilizado
            no desenvolvimento de software</strong>. </p>
      </Fragment>
    ),
  },
  {
    id: 5,
    name: "Next JS",
    type: 'library',
    icon: <SiNextdotjs color='#000' />,
    summary: (
      <Fragment>
        <p>
          Next.js é um framework popular que permite
          renderização do lado do servidor e outros recursos avançados. </p>
      </Fragment>
    ),
  },
  {
    id: 8,
    name: "Scrum",
    type: 'tool',
    icon: <img src={scrumLogo} alt="Logotipo da metodologia Scrum" />,
    summary: (
      <Fragment>

        <p>
          Scrum é uma metodologia ágil que valoriza a comunicação, a entrega contínua e a melhoria do processo de desenvolvimento.</p>
      </Fragment>
    ),
  },
  {
    id: 7,
    name: "SQL Server",
    type: 'other',
    icon: <BsFillDatabaseFill color='#0088D3' />,
    summary: (
      <Fragment>
        <p>
          SQL Server é um sistema de gerenciamento de banco de dados relacional </p>
      </Fragment>
    ),
  },
  {
    id: 6,
    name: "SCSS",
    type: 'other',
    icon: <DiSass color='#e9639b' />,
    summary: (
      <Fragment>
        <p>
          SCSS é um pré-processador CSS que estende a funcionalidade do CSS, ajudando a melhorar a manutenção e escalabilidade
        </p>
      </Fragment>
    ),
    hide: true
  },
  {
    id: 18,
    name: "Wordpress",
    type: 'platform',
    icon: <BsWordpress color='444140'/>,
    summary: (
      <Fragment>
        <p>
          WordPress é um sistema de gerenciamento de conteúdo que permite
          aos usuários comuns gerenciar sites
        </p>
      </Fragment>
    ),
  },
  {
    id: 9,
    name: "Java",
    type: 'language',
    icon: <img src={javaLogo} alt="Logotipo da linguagem de programação Java" />,
    summary: (
      <Fragment>
        <p>
          Java é conhecido por sua <strong>portabilidade, segurança e
          capacidade de construir aplicativos escaláveis e robustos.</strong>
        </p>
      </Fragment>
    ),
  },
  {
    id: 10,
    name: "Python",
    type: 'language',
    icon: <img src={pythonLogo} alt="Logotipo da linguagem de programação Python" />,
    summary: (
      <Fragment>
        <p>
          Python é amplamente utilizado em diversas áreas, como <strong>desenvolvimento web,
            ciência de dados e automação de tarefas.</strong>
        </p>
      </Fragment>
    ),
  },
  {
    id: 13,
    name: "Figma",
    type: 'platform',
    icon: <img src={figmaLogo} alt="Logotipo da ferramenta de prototipação Figma" />,
    summary: (
      <Fragment>
        <p>
          Figma é uma ferramenta de design e prototipação colaborativa baseada na web.
        </p>
      </Fragment>
    ),
  },
  {
    id: 14,
    name: "Material UI",
    type: 'library',
    icon: <SiMui color='007FFF'/>,
    summary: (
      <Fragment>
        <p>
          Material UI é uma biblioteca de componentes de interface do usuário para
          React
        </p>
      </Fragment>
    ),
  },
  {
    id: 16,
    name: "Bootstrap",
    type: 'library',
    icon: <SiBootstrap color='#7809F7' />,
    summary: (
      <Fragment>
        <p>
          Bootstrap é um framework para desenvolvimento
          de sites e aplicativos web responsivos
        </p>
      </Fragment>
    ),
  },
  {
    id: 17,
    name: "Tailwind",
    type: 'library',
    icon: <BiLogoTailwindCss color='#38BDF8' />,
    summary: (
      <Fragment>
        <p>
          Tailwind é um framework utilitário para CSS. Ele otimiza e facilita a estilização de componentes
        </p>
      </Fragment>
    ),
  },
  {
    id: 18,
    name: "JQuery",
    type: "library",
    icon: <BiLogoJquery color='#202124'/>,
    hide: true
  },
  {
    id: 19,
    name: "Chakra UI",
    type: "library",
    icon: <img src={chackraUILogo} alt="Logotipo da biblioteca Chackra UI" />,
    hide: true
  },
  {
    id: 20,
    name: "Node JS",
    type: "other",
    icon: <BiLogoJavascript color='F4CB0B' />,
    hide: true
  },
  {
    id: 21,
    name: "Styled Components",
    type: "other",
    icon: <SiStyledcomponents color='FFCF48' />,
    hide: true
  },
  {
    id: 22,
    name: "Webflow",
    type: 'platform',
    icon: <img src={webflowLogo} alt="Logotipo da plataforma Webflow" />,
    summary: (
      <Fragment>
        <p>
          Webflow é uma plataforma de desenvolvimento visual que integra design, CMS e hospedagem
        </p>
      </Fragment>
    ),
  },
];

export const skills_en = [
  { 
    ...skills_pt[0],
    summary: (
      <Fragment>
        <p>
          Javascript is used for <strong> developing Web and Mobile applications</strong> using
          frameworks like React and Next JS.
        </p>
      </Fragment>
    ),
  },
  {
    ...skills_pt[1],
    summary: (
      <Fragment>
        <p>
          Typescript is an extension of Javascript that provides enhanced development tools
        </p>
      </Fragment>
    ),
  },
  {
    ...skills_pt[2],
    summary: (
      <Fragment>
        <p>
          React is a popular JavaScript library for building <strong>user interfaces</strong>.
        </p>
      </Fragment>
    ),
  },
  {
    ...skills_pt[3],
    summary: (
      <Fragment>
        <p>
          React Native is a framework for building <strong>mobile applications</strong> using
          React.
        </p>
      </Fragment>
    ),
  },
  {
    ...skills_pt[4],
    summary: (
      <Fragment>
        <p>
          Git is a distributed version control system in software development.
        </p>
      </Fragment>
    ),
  },
  {
    ...skills_pt[5],
    summary: (
      <Fragment>
        <p>
          Next.js is a popular framework that enables
          server-side rendering and other advanced
          features.
        </p>
      </Fragment>
    ),
  },
  {
    ...skills_pt[6],
    summary: (
      <Fragment>
        <p>
          Scrum is an agile methodology. It allows teams to deliver value more efficiently.</p>
      </Fragment>
    ),
  },
  {
    ...skills_pt[7],
    summary: (
      <Fragment>
        <p>
          SQL Server is a relational database management system. It provides a solution for storing and retrieving
          data
        </p>
      </Fragment>
    ),
  },
  {
    ...skills_pt[8],
    summary: (
      <Fragment>
        <p>
          SCSS is a CSS preprocessor that extends CSS functionality with advanced features.
        </p>
      </Fragment>
    ),
  },
  {
    ...skills_pt[9],
    summary: (
      <Fragment>
        <p>
          WordPress is a content management system that allows users to manage websites without programming knowledge.
        </p>
      </Fragment>
    ),
  },
  {
    ...skills_pt[10],
    summary: (
      <Fragment>
        <p>
          Java is known for its <strong>portability, security, and ability to build scalable and robust applications.</strong>
        </p>
      </Fragment>
    ),
  },
  {
    ...skills_pt[11],
    summary: (
      <Fragment>
        <p>
          Python is widely used in
          various areas such as <strong>web development, data science, and task automation.</strong>
        </p>
      </Fragment>
    ),
  },
  {
    ...skills_pt[12],
    summary: (
      <Fragment>
        <p>
          Figma is a web-based collaborative design and prototype tool.
        </p>
      </Fragment>
    ),
  },
  {
    ...skills_pt[13],
    summary: (
      <Fragment>
        <p>
          Material UI is a user interface component library for React.
        </p>
      </Fragment>
    ),
  },
  {
    ...skills_pt[14],
    summary: (
      <Fragment>
        <p>
          Bootstrap is a framework for responsive web
          development.
        </p>
      </Fragment>
    ),
  },
  {
    ...skills_pt[15],
    summary: (
      <Fragment>
        <p>
         Tailwind is a utility-first CSS framework to improve development
        </p>
      </Fragment>
    ),
  },
  { ...skills_pt[16] },
  { ...skills_pt[17] },
  { ...skills_pt[18] },
  { ...skills_pt[19] },
  {
    ...skills_pt[20],
    summary: (
      <Fragment>
        <p>
          Webflow is a visual development platform that integrates design, CMS, and hosting for building and managing websites.
        </p>
      </Fragment>
    ),
  },
];