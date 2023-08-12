import { BiLogoJavascript, BiLogoTypescript, BiLogoReact, BiLogoGit, BiLogoTailwindCss } from 'react-icons/bi'

import { SiNextdotjs, SiPhp, SiMui, SiBootstrap } from 'react-icons/si'

import { BsFillDatabaseFill, BsWordpress } from 'react-icons/bs'

import { DiSass } from 'react-icons/di'

export const skills_pt = [
  {
    id: 1,
    name: "Javascript",
    percentage: 80,
    type: 'language',
    icon: <BiLogoJavascript color='F4CB0B'/>,
    summary: (
      <>
        <p>
          Javascript é utilizado no desenvolvimento web e mobile com ferramentas como React e Next JS</p>
      </>
    ),
  },
  {
    id: 2,
    name: "Typescript",
    percentage: 70,
    type: 'language',
    icon: <BiLogoTypescript color='007BCD' />,
    summary: (
      <>
        <p>
          Typescript é uma extensão do Javascript que permite criar aplicações ainda mais robustas</p>
      </>
    ),
  },
  {
    id: 3,
    name: "React",
    percentage: 80,
    type: 'library',
    icon: <BiLogoReact color='#61DBFB' />,
    summary: (
      <>
        <p>
          React é uma biblioteca JavaScript popular para construir <strong>interfaces de
            usuário.</strong> </p>
      </>
    ),
  },
  {
    id: 4,
    name: "React Native",
    percentage: 70,
    type: 'library',
    icon: <BiLogoReact color='#61DBFB' />,
    summary: (
      <>
        <p>
          React Native é um framework para construir <strong>aplicativos móveis</strong> usando
          React.
        </p>
      </>
    ),
  },
  {
    id: 11,
    name: "Git",
    percentage: 80,
    type: 'tool',
    icon: <BiLogoGit color='#F05033' />,
    summary: (
      <>
        <p>
          Git é um sistema de controle de versão <strong>amplamente utilizado
            no desenvolvimento de software</strong>. </p>
      </>
    ),
  },
  {
    id: 5,
    name: "Next JS",
    percentage: 70,
    type: 'library',
    icon: <SiNextdotjs color='#000' />,
    summary: (
      <>
        <p>
          Next.js é um framework popular que permite
          renderização do lado do servidor e outros recursos avançados. </p>
      </>
    ),
  },
  {
    id: 8,
    name: "Scrum",
    percentage: 60,
    type: 'tool',
    icon: <img src={require(`./skills-logos/scrum.webp`)} alt="Logotipo da metodologia Scrum" />,
    summary: (
      <>

        <p>
          Scrum é uma metodologia ágil que valoriza a comunicação, a entrega contínua e a melhoria do processo de desenvolvimento.</p>
      </>
    ),
  },
  {
    id: 7,
    name: "SQL Server",
    percentage: 85,
    type: 'other',
    icon: <BsFillDatabaseFill color='#0088D3' />,
    summary: (
      <>
        <p>
          SQL Server é um sistema de gerenciamento de banco de dados relacional </p>
      </>
    ),
  },
  {
    id: 6,
    name: "SCSS",
    type: 'other',
    percentage: 75,
    icon: <DiSass color='#e9639b' />,
    summary: (
      <>
        <p>
          SCSS é um pré-processador CSS que estende a funcionalidade do CSS, ajudando a melhorar a manutenção e escalabilidade
        </p>
      </>
    ),
  },
  {
    id: 18,
    name: "Wordpress",
    percentage: 85,
    type: 'platform',
    icon: <BsWordpress color='444140'/>,
    summary: (
      <>
        <p>
          WordPress é um sistema de gerenciamento de conteúdo que permite
          aos usuários comuns gerenciar sites
        </p>
      </>
    ),
  },
  {
    id: 9,
    name: "Java",
    percentage: 70,
    type: 'language',
    icon: <img src={require(`./skills-logos/java.webp`)} alt="Logotipo da linguagem de programação Java" />,
    summary: (
      <>
        <p>
          Java é conhecido por sua <strong>portabilidade, segurança e
          capacidade de construir aplicativos escaláveis e robustos.</strong>
        </p>
      </>
    ),
  },
  {
    id: 10,
    name: "Python",
    percentage: 80,
    type: 'language',
    icon: <img src={require(`./skills-logos/python.webp`)} alt="Logotipo da linguagem de programação Python" />,
    summary: (
      <>
        <p>
          Python é amplamente utilizado em diversas áreas, como <strong>desenvolvimento web,
            ciência de dados e automação de tarefas.</strong>
        </p>
      </>
    ),
  },
  {
    id: 13,
    name: "Figma",
    percentage: 70,
    type: 'platform',
    icon: <img src={require(`./skills-logos/figma.webp`)} alt="Logotipo da ferramenta de prototipação Figma" />,
    summary: (
      <>
        <p>
          Figma é uma ferramenta de design e prototipação colaborativa baseada na web.
        </p>
      </>
    ),
  },
  {
    id: 14,
    name: "Material UI",
    type: 'library',
    percentage: 70,
    icon: <SiMui color='007FFF'/>,
    summary: (
      <>
        <p>
          Material UI é uma biblioteca de componentes de interface do usuário para
          React
        </p>
      </>
    ),
  },
  {
    id: 16,
    name: "Bootstrap",
    percentage: 90,
    type: 'library',
    icon: <SiBootstrap color='#7809F7' />,
    summary: (
      <>
        <p>
          Bootstrap é um framework para desenvolvimento
          de sites e aplicativos web responsivos
        </p>
      </>
    ),
  },
  {
    id: 17,
    name: "Tailwind",
    percentage: 90,
    type: 'library',
    icon: <BiLogoTailwindCss color='#38BDF8' />,
    summary: (
      <>
        <p>
          Tailwind é um framework utilitário para CSS. Ele otimiza e facilita a estilização de componentes
        </p>
      </>
    ),
  },
  // {
  //   id: 19,
  //   name: "PHP",
  //   type: 'language',
  //   percentage: 70,
  //   icon: <SiPhp color='#787CB4'/>,
  //   summary: (
  //     <>
  //       <p>
  //         PHP é uma linguagem de programação amplamente utilizada especialmente para
  //         o desenvolvimento de aplicativos web.</p><p>Ele oferece uma sintaxe simples e
  //           flexível, além de uma ampla gama de recursos e frameworks para criar <strong>sites dinâmicos e interativos</strong>.
  //       </p>
  //     </>
  //   ),
  // },
];

export const skills_en = [
  {
    id: 1,
    name: "Javascript",
    type: 'language',
    percentage: 80,
    icon: skills_pt[0].icon,
    summary: (
      <>
        <p>
          Javascript is used for <strong> developing Web and Mobile applications</strong> using
          frameworks like React and Next JS.
        </p>
      </>
    ),
  },
  {
    id: 2,
    name: "Typescript",
    type: 'language',
    percentage: 70,
    icon: skills_pt[1].icon,
    summary: (
      <>
        <p>
          Typescript is an extension of Javascript that provides enhanced development tools
        </p>
      </>
    ),
  },
  {
    id: 3,
    name: "React",
    type: 'library',
    icon: skills_pt[2].icon,
    percentage: 80,
    summary: (
      <>
        <p>
          React is a popular JavaScript library for building <strong>user interfaces</strong>.
        </p>
      </>
    ),
  },
  {
    id: 4,
    name: "React Native",
    type: 'library',
    icon: skills_pt[3].icon,
    percentage: 70,
    summary: (
      <>
        <p>
          React Native is a framework for building <strong>mobile applications</strong> using
          React.
        </p>
      </>
    ),
  },
  {
    id: 11,
    name: "Git",
    percentage: 80,
    type: 'tool',
    icon: skills_pt[4].icon,
    summary: (
      <>
        <p>
          Git is a distributed version control system in software development.
        </p>
      </>
    ),
  },
  {
    id: 5,
    type: 'library',
    name: "Next JS",
    percentage: 70,
    icon: skills_pt[5].icon,
    summary: (
      <>
        <p>
          Next.js is a popular framework that enables
          server-side rendering and other advanced
          features.
        </p>
      </>
    ),
  },
  {
    id: 8,
    name: "Scrum",
    percentage: 60,
    type: 'tool',
    icon: skills_pt[6].icon,
    summary: (
      <>
        <p>
          Scrum is an agile methodology. It allows teams to deliver value more efficiently.</p>
      </>
    ),
  },
  {
    id: 7,
    name: "SQL Server",
    type: 'other',
    percentage: 85,
    icon: skills_pt[7].icon,
    summary: (
      <>
        <p>
          SQL Server is a relational database management system. It provides a solution for storing and retrieving
          data
        </p>
      </>
    ),
  },
  {
    id: 6,
    name: "SCSS",
    type: 'other',
    percentage: 75,
    icon: skills_pt[8].icon,
    summary: (
      <>
        <p>
          SCSS is a CSS preprocessor that extends CSS functionality with advanced features.
        </p>
      </>
    ),
  },
  {
    id: 18,
    name: "Wordpress",
    type: 'platform',
    percentage: 85,
    icon: skills_pt[9].icon,
    summary: (
      <>
        <p>
          WordPress is a content management system that allows users to manage websites without programming knowledge.
        </p>
      </>
    ),
  },
  {
    id: 9,
    name: "Java",
    percentage: 70,
    type: 'language',
    icon: skills_pt[10].icon,
    summary: (
      <>
        <p>
          Java is known for its <strong>portability, security, and ability to build scalable and robust applications.</strong>
        </p>
      </>
    ),
  },
  {
    id: 10,
    name: "Python",
    type: 'language',
    percentage: 80,
    icon: skills_pt[11].icon,
    summary: (
      <>
        <p>
          Python is widely used in
          various areas such as <strong>web development, data science, and task automation.</strong>
        </p>
      </>
    ),
  },
  {
    id: 13,
    name: "Figma",
    type: 'platform',
    percentage: 70,
    icon: skills_pt[12].icon,
    summary: (
      <>
        <p>
          Figma is a web-based collaborative design and prototype tool.
        </p>
      </>
    ),
  },
  {
    id: 14,
    name: "Material UI",
    type: 'library',
    percentage: 70,
    icon: skills_pt[13].icon,
    summary: (
      <>
        <p>
          Material UI is a user interface component library for React.
        </p>
      </>
    ),
  },
  {
    id: 16,
    name: "Bootstrap",
    type: 'library',
    percentage: 90,
    icon: skills_pt[14].icon,
    summary: (
      <>
        <p>
          Bootstrap is a framework for responsive web
          development.
        </p>
      </>
    ),
  },
  {
    id: 17,
    name: "Tailwind",
    type: 'library',
    percentage: 90,
    icon: skills_pt[15].icon,
    summary: (
      <>
        <p>
         Tailwind is a utility-first CSS framework to improve development
        </p>
      </>
    ),
  },
  // {
  //   id: 19,
  //   name: "PHP",
  //   percentage: 70,
  //   type: 'language',
  //   summary: (
  //     <>
  //       <p>
  //         PHP is a widely used programming language, especially for web
  //         development.
  //       </p>
  //       <p>
  //         It offers a simple and flexible syntax, along with a wide range of
  //         features and frameworks to create <strong>dynamic and interactive websites</strong>.
  //       </p>
  //     </>
  //   ),
  // },
];