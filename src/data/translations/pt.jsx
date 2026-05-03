import { experiences } from "../experiences";
import { projects } from "../projects";
import { Fragment } from "react";

const experiencesContent = {
  outliant: {
    title: "Desenvolvedora de Software Front-end",
    level: "Pleno",
    company: "Outliant",
    location: "California, US",
    workLocationType: "remoto",
    period: "12/2024 — presente",
    duration: "1 ano",
    summary:
      "Desenvolvo aplicações robustas e escaláveis usando ferramentas como Webflow, React e Typescript para diversos clientes globais da empresa.",
    details: [
      "Participei da entrega de projetos para grandes empresas estadunidenses e globais.",
      "Priorizei performance e otimização de SEO para aumentar visibilidade e melhorar a experiência do usuário.",
      "Documentei o processo técnico dos projetos para referência futura.",
      "Colaborei com um time global, incluindo DevOps, QA e PMs, sempre priorizando a comunicação.",
    ],
  },
  ftd: {
    title: "Desenvolvedora Front-end",
    level: "Pleno",
    company: "FTD Educacao",
    location: "Sao Paulo, BR",
    workLocationType: "remoto",
    period: "10/2023 — 06/2025",
    duration: "2 anos",
    summary:
      "Na FTD participei do desenvolvimento de objetos educacionais digitais para diversos editoriais e selos da editora, do ensino infantil ao ensino médio.",
    details: [
      "Gerenciei times de desenvolvedores externos dedicados a entregar os objetos digitais da editora.",
      "Participei do desenvolvimento de diversas plataformas de clientes internos da editora, desde artigos educacionais até jogos e infográficos interativos.",
      "Participei do desenvolvimento de componentes escaláveis utilizados em diversos produtos da empresa.",
      "Participei da automação do processo de desenvolvimento da equipe, tornando o trabalho mais ágil.",
      "Assisti clientes internos ao longo de todo o processo de desenvolvimento, da concepção à entrega final.",
    ],
  },
  choveu: {
    title: "Desenvolvedora Front-end",
    level: "Junior",
    company: "Agencia Choveu",
    location: "Sao Paulo, BR",
    workLocationType: "remoto",
    period: "03/2022 — 03/2024",
    duration: "2 anos",
    summary:
      "Na Agencia Choveu participei da criação e manutenção de websites usando Wordpress e tecnologias como HTML, CSS, SCSS e PHP.",
    details: [
      "Desenvolvimento de aplicações frontend para diversos clientes, com destaque para Wordpress.",
      "Melhoria de acessibilidade, SEO e experiência geral das aplicações.",
      "Criação de landing pages para eventos, webinars, produtos e outros.",
      "Criação de campanhas de e-mail marketing com plataformas como OCE e RD Station.",
    ],
  },
  fiap: {
    abbreviatedTitle: "ADS",
    title: "Análise e Desenvolvimento de Sistemas",
    level: "Graduação",
    school: "FIAP",
    location: "Sao Paulo, BR",
    workLocationType: "presencial",
    period: "08/2022 — 08/2024",
    duration: "2 anos",
    summary:
      "Durante minha graduacao na FIAP, aprimorei habilidades em desenvolvimento web, mobile, banco de dados e inteligencia artificial. Tambem participei de projetos praticos com empresas como B3 e Level Group.",
    details: [
      "Desenvolvimento de aplicacoes praticas full-stack a partir de desafios propostos por empresas parceiras da FIAP.",
      "Entrega de projetos reais utilizando SCRUM, com gestao eficiente e conclusao dentro do prazo.",
      "Engajamento ativo em eventos de tecnologia, palestras e hackathons.",
    ],
  },
  etec: {
    title: "Desenvolvimento de Sistemas",
    level: "Tecnico",
    school: "ETEC de Guaianazes",
    location: "Sao Paulo, BR",
    workLocationType: "presencial",
    period: "02/2019 — 11/2021",
    duration: "3 anos",
    summary:
      "Na ETEC descobri a programacao como profissao. Durante os 3 anos, construi base solida em logica de programacao e desenvolvimento.",
    details: [
      "Desenvolvimento de aplicacoes full-stack web e mobile propostas pelos professores.",
      "Participacao em aulas de robotica com Arduino e linguagem C.",
      "Engajamento ativo em eventos de tecnologia, palestras e maratonas de programacao.",
    ],
  },
};

const localizedExperiences = experiences.map((experience) => ({
  ...experience,
  ...experiencesContent[experience.id],
}));

const projectsContent = {
  refinances: {
    subtitle: "Aplicativo de gerenciamento financeiro",
    description: (
      <Fragment>
        <p>
          O <strong>Refinances</strong> nasceu de uma necessidade observada pelo
          grupo: a organizacao financeira. O projeto foi desenvolvido como nosso{" "}
          <strong>Trabalho de Conclusao de Curso</strong> na{" "}
          <a href="https://www.fiap.com.br/" target="_blank" rel="noreferrer">
            ETEC de Guaianazes
          </a>
          .
        </p>
        <p>
          O app conta com o gerenciamento completo das financas: entradas,
          saidas, contas, metas financeiras e possui uma dashboard para
          acompanhar os gastos por categoria.
        </p>
      </Fragment>
    ),
    team: [
      { id: 1, name: "David Almeida", link: "https://www.linkedin.com/in/almeida154" },
      { id: 2, name: "Isabela Saori", link: "https://www.linkedin.com/in/isabela-saori-nakano-2137b119b" },
      { id: 3, name: "Italo Cabral", link: "https://www.linkedin.com/in/bruno-italo-cabral" },
      { id: 4, name: "Samuel Guerra", link: "https://www.linkedin.com/in/samuel-guerra-aquino" },
      { id: 5, name: "Phillip Anselmo" },
      { id: 6, name: "Wallace Moura", link: "https://www.linkedin.com/in/wallace-moura-2b15811a3" },
    ],
  },
  dzero: {
    subtitle: "Biblioteca de componentes internos",
    description: (
      <Fragment>
        <p>
          Um grande problema em diversos times de desenvolvimento e a falta de
          padronizacao no codigo e no design em diferentes projetos. O DZERO e
          uma <strong>biblioteca de componentes</strong> internos desenvolvida
          para padronizar a interface do usuario em projetos da empresa.
        </p>
        <p>
          Nele estruturamos um template para cada projeto futuro da empresa,
          criando padroes de dados e opcoes de interfaces
          <strong> robustas e customizaveis.</strong> Utilizamos a metodologia
          <a
            href="https://atomicdesign.bradfrost.com/chapter-2/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}Atomic Design
          </a>{" "}
          como base de estrutura da biblioteca.
        </p>
      </Fragment>
    ),
    team: [{ id: 1, name: "Time digital FTD Educacao" }],
  },
  investium: {
    subtitle: "Website criado para facilitar e incentivar o investimento em IPO",
    description: (
      <Fragment>
        <p>
          A{" "}
          <a href="https://www.fiap.com.br/" target="_blank" rel="noreferrer">
            FIAP
          </a>{" "}
          em parceria com a{" "}
          <a
            href="https://www.b3.com.br/pt_br/"
            target="_blank"
            rel="noreferrer"
          >
            B3
          </a>{" "}
          nos desafiou a usar a tecnologia para desmistificar o investimento em{" "}
          <strong>IPO</strong> no Brasil.
        </p>
        <p>
          Pensando nisso, a <strong>Investium</strong> foi criada. Uma solucao
          para investidores iniciantes que nao possuem acesso facil as
          informacoes das IPOs, com funcionalidades como comparacao de IPOs e
          graficos detalhados sobre as informacoes financeiras das empresas.
        </p>
      </Fragment>
    ),
    summary_description: (
      <p>
        A <strong>Investium</strong> foi criada para desmistificar o
        investimento em <strong>IPO</strong> no Brasil, com funcionalidades
        como comparacao de IPOs e graficos detalhados sobre as informacoes
        financeiras das empresas. O projeto foi desenvolvido com
        <strong> React</strong> e <strong>Javascript</strong>.
      </p>
    ),
    team: [{ id: 1, name: "Alunos da FIAP" }],
  },
  "raizes-solidarias": {
    subtitle:
      "Website criado para gerenciar uma ficticia horta solidaria contra a fome",
    description: (
      <Fragment>
        <p>
          A{" "}
          <a href="https://www.fiap.com.br/" target="_blank" rel="noreferrer">
            FIAP
          </a>{" "}
          nos propos encontrar uma forma de utilizar tecnologia e inovacao no
          problema da <strong>fome</strong>. Com isso em mente, desenvolvemos a
          <strong> Raizes Solidarias</strong> como um projeto de horta urbana
          comunitaria.
        </p>
        <p>
          Os usuarios podem ser voluntarios diretos e tambem podem doar e
          gerenciar a horta de forma <strong>gamificada</strong>. O valor doado
          e convertido em moedas virtuais para serem utilizadas na compra de
          sementes, adubo e fertilizantes.
        </p>
      </Fragment>
    ),
    team: [
      { id: 1, name: "Kaue Caponero", link: "https://www.linkedin.com/in/kauecaponero/" },
      { id: 2, name: "Bruna Menegatti", link: "https://www.linkedin.com/in/brunamvienna" },
    ],
  },
  "valorant-web": {
    subtitle: "Website com informacoes do jogo Valorant",
    description: (
      <Fragment>
        <p>
          O projeto foi criado em parceria com o <strong>Alexandre</strong>,
          que e um grande fa do jogo e me chamou para ajuda-lo a utilizar a{" "}
          <a href="https://valorant-api.com/">API da Riot Games</a> para criar
          um sistema web com informacoes sobre o game.
        </p>
        <p>
          Alem de um gerador de banner personalizavel e compartilhavel, no site
          e possivel encontrar as principais informacoes do jogo, como agentes,
          mapas e armas.
        </p>
      </Fragment>
    ),
    team: [
      { id: 1, name: "Alexandre Souza", link: "https://www.linkedin.com/in/alehsouza" },
    ],
  },
  "alura-studies": {
    subtitle: "Website para gerenciamento de estudos",
    description: (
      <Fragment>
        <p>
          O projeto foi criado junto ao curso
          <strong> \"React: escrevendo com Typescript\"</strong> da{" "}
          <a href="https://www.alura.com.br/" target="_blank" rel="noreferrer">
            Alura
          </a>
          , uma plataforma de cursos de tecnologia.
        </p>
        <p>
          Com ele aprendi mais sobre Typescript, CSS modules, Hooks no React e
          boas praticas como
          <strong>
            {" "}DRY (Don't repeat yourself) e SRP (Single Responsibility
            Principle).
          </strong>
        </p>
      </Fragment>
    ),
  },
  solar: {
    subtitle: "Website de aluguel de carros eletricos",
    description: (
      <Fragment>
        <p>
          A{" "}
          <a href="https://www.fiap.com.br/" target="_blank" rel="noreferrer">
            FIAP
          </a>{" "}
          nos desafiou a usar a tecnologia para melhorar a mobilidade urbana no
          Brasil.
        </p>
        <p>
          Pensando nisso, criamos o Solar, uma solucao baseada no
          desenvolvimento de um website de
          <strong> aluguel de carros eletricos movidos a energia solar</strong>,
          visando a popularizacao do carro eletrico, sustentabilidade,
          otimizacao do transito, preservacao da fauna e flora e reducao da
          quantidade de carros parados.
        </p>
      </Fragment>
    ),
    team: [{ id: 1, name: "Alunos da FIAP" }],
  },
  "nutri-tips": {
    subtitle: "Blog de nutricao consumindo uma API externa",
    description: (
      <Fragment>
        <p>
          Durante o inicio dos meus estudos com <strong>React</strong>, construi
          esse projeto simples de um blog sobre nutricao com filtros.
        </p>
        <p>
          Os dados sao consumidos da API disponibilizada gratuitamente pelo{" "}
          <a
            href="https://sujeitoprogramador.com/rn-api/?api=posts"
            target="_blank"
            rel="noreferrer"
          >
            Sujeito Programador
          </a>
          .
        </p>
      </Fragment>
    ),
  },
  bagify: {
    subtitle: "Aplicativo de gerenciamento de bagagens",
    description: (
      <Fragment>
        <p>
          Durante o <strong>Hackaton</strong> promovido pela{" "}
          <a
            href="https://www.copastur.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            Copastur
          </a>{" "}
          e a{" "}
          <a href="https://www.fiap.com.br/" target="_blank" rel="noreferrer">
            FIAP
          </a>
          , fomos desafiados a encontrar uma forma de humanizar a experiencia
          dos viajantes de companhias aereas.
        </p>
        <p>
          Desse problema surgiu o <strong>Bagify</strong>: um app de
          gerenciamento para o usuario ter controle de suas bagagens enquanto
          viaja, e assim viajar sem preocupacoes com a seguranca de seus
          pertences.
        </p>
      </Fragment>
    ),
    team: [
      { id: 1, name: "David Almeida", link: "https://www.linkedin.com/in/almeida154" },
      { id: 2, name: "Juliana Gonzales", link: "https://www.linkedin.com/in/julianagonzalesbispo" },
      { id: 3, name: "Max Fernandes", link: "https://www.linkedin.com/in/max-fernandes-de-souza-18b12616a" },
      { id: 4, name: "Rafael Dibe", link: "https://www.linkedin.com/in/rafael-dibe-5aba5847" },
    ],
  },
};

const localizedProjects = projects.map((project) => ({
  ...project,
  ...projectsContent[project.id],
}));

export const pt = {
  navbar: {
    about: "Sobre mim",
    experience: "Experiência",
    skills: "Habilidades",
    projects: "Projetos",
    contact: "Contato",
    resume: "Currículo",
  },

  title: "Desenvolvedora Frontend",

  subtitle:
    "Apaixonada por criação e tecnologia.<br/>Ampla experiência em desenvolvimento de <strong>aplicações web e mobile responsivas e acessíveis.</strong>",

  experience_title: "Experiência",
  experiences: localizedExperiences,

  journey_title: "Sobre mim",
  journey:
    "A tecnologia está presente na minha vida de diversas formas desde a infância. O início se deu com um curso de informática aos 10 anos, onde aprendi os básicos de <strong>Software, Hardware e Pacote Office</strong>.<br/><br/>" +
    "No entanto, a mágica começou quando fiz o curso técnico de <strong>Desenvolvimento de Sistemas na ETEC de Guaianazes</strong>. Lá, cercada de professores e alunos talentosos, me apaixonei pelo desenvolvimento frontend e percebi havia encontrado minha vocação.<br/><br/>" +
    "Decidi então cursar o ensino superior na <strong>FIAP</strong>, considerada a melhor faculdade de tecnologia do país. Com muito esforço e dedicação consegui uma bolsa de estudos 100% para cursar <strong>Análise e Desenvolvimento de Sistemas</strong>.<br/><br/>" +
    "Em paralelo, já trabalho profissionalmente como <strong>Desenvolvedora Frontend</strong> desde os meus 18 anos. (Literalmente. Minha carteira de trabalho foi assinada no exato dia em que completei 18 anos.) Desenvolvo minhas habilidades em empresas de muito prestígio, como a Agência Choveu (marketing) e a FTD educação.",

  skills_title: "Habilidades",
  skills: {
    javascript: {
      name: "Javascript",
      summary:
        "Javascript é utilizado no desenvolvimento web e mobile com ferramentas como React e Next JS.",
    },
    typescript: {
      name: "Typescript",
      summary:
        "Typescript é uma extensão do Javascript que permite criar aplicações ainda mais robustas.",
    },
    react: {
      name: "React",
      summary:
        "React é uma biblioteca JavaScript popular para construir interfaces de usuário.",
    },
    "react-native": {
      name: "React Native",
      summary:
        "React Native é um framework para construir aplicativos móveis usando React.",
    },
    git: {
      name: "Git",
      summary:
        "Git é um sistema de controle de versão amplamente utilizado no desenvolvimento de software.",
    },
    next: {
      name: "Next JS",
      summary:
        "Next.js é um framework popular que permite renderização do lado do servidor e outros recursos avançados.",
    },
    scrum: {
      name: "Scrum",
      summary:
        "Scrum é uma metodologia ágil que valoriza a comunicação, a entrega contínua e a melhoria do processo de desenvolvimento.",
    },
    sql: {
      name: "SQL Server",
      summary:
        "SQL Server é um sistema de gerenciamento de banco de dados relacional.",
    },
    scss: {
      name: "SCSS",
      summary:
        "SCSS é um pré-processador CSS que estende a funcionalidade do CSS, ajudando a melhorar a manutenção e escalabilidade.",
    },
    wordpress: {
      name: "Wordpress",
      summary:
        "WordPress é um sistema de gerenciamento de conteúdo que permite aos usuários comuns gerenciar sites.",
    },
    java: {
      name: "Java",
      summary:
        "Java é conhecido por sua portabilidade, segurança e capacidade de construir aplicativos escaláveis e robustos.",
    },
    python: {
      name: "Python",
      summary:
        "Python é amplamente utilizado em diversas áreas, como desenvolvimento web, ciência de dados e automação de tarefas.",
    },
    figma: {
      name: "Figma",
      summary:
        "Figma é uma ferramenta de design e prototipação colaborativa baseada na web.",
    },
    mui: {
      name: "Material UI",
      summary:
        "Material UI é uma biblioteca de componentes de interface do usuário para React.",
    },
    radix: {
      name: "Radix UI",
      summary:
        "Radix UI é uma biblioteca de componentes de interface do usuário para React.",
    },
    bootstrap: {
      name: "Bootstrap",
      summary:
        "Bootstrap é um framework para desenvolvimento de sites e aplicativos web responsivos.",
    },
    tailwind: {
      name: "Tailwind",
      summary:
        "Tailwind é um framework utilitário para CSS. Ele otimiza e facilita a estilização de componentes.",
    },
    jquery: {
      name: "JQuery",
    },
    chakra: {
      name: "Chakra UI",
    },
    node: {
      name: "Node JS",
    },
    styled: {
      name: "Styled Components",
    },
    webflow: {
      name: "Webflow",
      summary:
        "Webflow é uma plataforma de desenvolvimento visual que integra design, CMS e hospedagem.",
    },
  },

  projects_title: "Projetos",
  projects: localizedProjects,

  know_more: "Saiba mais",
  filter_by: "Filtrar por habilidade",
  techs: "Tecnologias",
  relevant: "Mais relevantes",
  all: "Todos",
  select_all: "Todas as tecnologias",
  no_options: "Desculpa, nenhuma escolha restante.",
  no_results: "Desculpa, nenhum projeto foi encontrado.",
  and: "e",
  more_info: "Mais informações",
  test: "Testar",

  other_involved: "Outras pessoas envolvidas no projeto:",

  contact_title: "Fale comigo!",
  contact_subtitle:
    "Se tiver alguma pergunta ou algo a me dizer, não hesite em falar comigo! Prometo responder assim que possível 💜",

  contact_success: "Mensagem enviada com sucesso! Em breve te retorno 💜",

  contact_error: "Eita, algo deu errado 😕. Por favor, me envie um email",

  name_label: "Nome",
  name_placeholder: "Qual seu nome?",
  email_placeholder: "Qual seu principal email?",
  message_label: "Sua mensagem",
  message_placeholder: "O que você tem a dizer?",
  send: "Enviar",

  resume: {
    contact_title: "Contato",
    location: "Zona Leste de São Paulo - SP",
    experience_title: "Experiências",
    education_title: "Formação",
    featured_project: "Projeto Destacado",
    programming_languages: "Linguagens de Programação",
    libs_frameworks: "Bibliotecas & Frameworks",
    tools_platf_others: "Ferramentas, Plataformas & outras tecnologias",

    soft_skills: [
      "Determinação",
      "Proatividade",
      "Colaboração em grupo",
      "Aprendizado ativo",
      "Resolução de problemas",
      "Gestão do tempo",
    ],

    languages_title: "Idiomas",
    languages: [{ name: "Inglês", level: "Avançado" }],

    download_portuguese: "Download (português)",
    or: "ou",
    download_english: "Download (inglês)",
  },
};
