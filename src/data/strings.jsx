import { skills_en, skills_pt } from "./skills";
import { experiences_en, experiences_pt } from "./experiences";
import { projects_en, projects_pt } from "./projects";

import { Fragment } from "react";

export const pt = {
  navbar: {
    about: 'Sobre mim',
    experience: 'Experiência',
    skills: 'Habilidades',
    projects: 'Projetos',
    contact: 'Contato',
    resume: 'Currículo'
  },
  title: 'Desenvolvedora Frontend',
  subtitle:
    <Fragment>
      <p>Apaixonada por criação e tecnologia.</p>
      <p>Ampla experiência em desenvolvimento de <strong>aplicações web e mobile responsivas e acessíveis.</strong></p>
    </Fragment>,
  experience_title: 'Experiência',
  experiences: experiences_pt,
  journey_title: 'Sobre mim',
  journey:
    <Fragment>
      <p>A tecnologia está presente na minha vida de diversas formas desde a infância. O início se deu com um curso de informática aos 10 anos, onde aprendi os básicos de <strong>Software, Hardware e Pacote Office</strong>.</p>
      <p>No entanto, a mágica começou quando fiz o curso técnico de <strong>Desenvolvimento de Sistemas na ETEC de Guaianazes</strong>. Lá, cercada de professores e alunos talentosos, me apaixonei pelo desenvolvimento frontend e percebi havia encontrado minha vocação.</p>
      <p>Decidi então cursar o ensino superior na <strong>FIAP</strong>, considerada a melhor faculdade de tecnologia do país. Com muito esforço e dedicação consegui uma bolsa de estudos 100% para cursar <strong>Análise e Desenvolvimento de Sistemas</strong>. </p>
      <p>Em paralelo, já trabalho profissionalmente como <strong>Desenvolvedora Frontend</strong> desde os meus 18 anos. (Literalmente. Minha carteira de trabalho foi assinada no exato dia em que completei 18 anos.) Desenvolvo minhas habilidades em empresas de muito prestígio, como a Agência Choveu (marketing) e a FTD educação.</p>
    </Fragment>,
  skills_title: 'Habilidades',
  skills: skills_pt,
  projects_title: 'Projetos',
  know_more: 'Saiba mais',
  projects: projects_pt,
  filter_by: 'Filtrar por habilidade',
  techs: 'Tecnologias',
  relevant: 'Mais relevantes',
  all: 'Todos',
  select_all: 'Todas as tecnologias',
  no_options: 'Desculpa, nenhuma escolha restante.',
  no_results: 'Desculpa, nenhum projeto foi encontrado.',
  and: 'e',
  more_info: 'Mais informações',
  test: 'Testar',
  other_involved: 'Outras pessoas envolvidas no projeto:',
  contact_title: 'Fale comigo!',
  contact_subtitle: 'Se tiver alguma pergunta ou algo a me dizer, não hesite em falar comigo! Prometo responder assim que possível 💜',
  contact_success: 'Mensagem enviada com sucesso! Em breve te retorno 💜',
  contact_error: 'Eita, algo deu errado 😕. Por favor, me envie um email',
  name_label: 'Nome',
  name_placeholder: 'Qual seu nome?',
  email_placeholder: 'Qual seu principal email?',
  message_label: 'Sua mensagem',
  message_placeholder: 'O que você tem a dizer?',
  send: 'Enviar',
  resume: {
    contact_title: 'Contato',
    location: 'Zona Leste de São Paulo - SP',
    experience_title: 'Experiências',
    education_title: 'Formação',
    featured_project: 'Projeto Destacado',
    programming_languages: 'Linguagens de Programação',
    libs_frameworks: 'Libraries & Frameworks',
    tools_platf_others: 'Ferramentas, Plataformas & outras tecnologias',
    soft_skills: [
      'Determinação',
      'Proatividade',
      'Colaboração em grupo',
      'Aprendizado ativo',
      'Resolução de problemas',
      'Gestão do tempo'
    ],
    languages_title: 'Idiomas',
    languages: [
      {
        name: 'Inglês',
        level: 'Avançado'
      }
    ],
    download_portuguese: 'Download (português)',
    or: 'ou',
    download_english: 'Download (inglês)'
  }
};

export const en = {
  navbar: {
    about: 'About me',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    resume: 'Resumé'
  },
  title: "Frontend Developer",
  subtitle:
    <Fragment>
      <p>Passionate about creation and technology.</p> 
      <p>Wide experience developing <strong>acessible and responsive web and mobile applications.</strong></p>
    </Fragment>,
  experience_title: 'Experience',
  experiences: experiences_en,
  journey_title: 'About me',
  journey:
    <Fragment>
      <p>Technology has been in my life in several ways since I was a kid. It all began when I took a basic computer course at the age of 10. There I learned the fundamentals of <strong>Software, Hardware, and the programs in the Office Suite</strong>.</p>
      <p>However, the magic occurred when I pursued the technical course in <strong>Systems Development at ETEC de Guaianazes</strong>. There, surrounded by talented teachers and students, I fell in love with Frontend Development and realized that I had found my profession.</p>
      <p>Then I decided to study at <strong>FIAP</strong>, considered the top technology college in Brazil. With a lot of effort I got a full scholarship to pursue a degree in <strong>Analysis and Systems Development.</strong></p>
      <p>In addition, I have been working professionaly as a <strong>Frontend Developer</strong> since I was 18. (Literally. I signed  the contract the exact day I turned 18.) Ever since then I have been enhancing my skills in prestigious companies, such as Agência Choveu (Marketing) and FTD Educação.</p>
    </Fragment>,
  skills_title: 'Skills',
  skills: skills_en,
  projects_title: 'Projects',
  know_more: 'See details',
  projects: projects_en,
  filter_by: 'Filter by skill',
  techs: 'Skills',
  relevant: 'Most relevant',
  all: 'All',
  select_all: 'All the skills',
  no_options: 'Sorry, no options left.',
  no_results: 'Sorry, no project was found in the selected options :(',
  and: 'and',
  test: 'Try it out',
  other_involved: 'Other people involved in this project:',
  contact_title: 'Contact me',
  contact_subtitle: 'If you have any questions or something to say, feel free to reach out! I promise to get back at you as soon as possible 💜',
  contact_success: `Message sent succesfully! I'll get back at you soon 💜`,
  contact_error: 'Oops, something went wrong 😕. Please, send me an email',
  name_label: 'Name',
  name_placeholder: 'What is your name?',
  email_placeholder: 'What is your main email?',
  message_label: 'Your message',
  message_placeholder: 'What do you have to say?',
  send: 'Send',
  resume: {
    contact_title: 'Contact',
    location: 'São Paulo, SP - Brazil',
    experience_title: 'Experiences',
    education_title: 'Education',
    featured_project: 'Featured Project',
    programming_languages: 'Programming Languages',
    libs_frameworks: 'Libraries & Frameworks',
    tools_platf_others: 'Tools, Platforms & Others',
    soft_skills: [
      'Determination',
      'Proactivity',
      'Collaboration',
      'Active Learning',
      'Problem Solving',
      'Time Management'
    ],
    languages_title: 'Languages',
    languages: [
      {
        name: 'English',
        level: 'Advanced'
      }
    ],
    download_portuguese: 'Download (portuguese)',
    or: 'or',
    download_english: 'Download (english)'
  }
}