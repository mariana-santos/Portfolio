import { React } from "react";
import Skill from "../Skill";

import "./style.css";

import useStrings from "../../hooks/useStrings";

export default function Skills() {
  const strings = useStrings();

  const skills = strings.skills.filter((skill) => !skill.hide);

  const cards = [
    {
      title: "Desenvolvimento Web",
      key: "dev-web",
      description: "Me especializo no desenvolvimento de aplicações web modernas com React e outras tecnologias do ecossistema JavaScript. Também trabalho com CMS como Webflow e Wordpress, criando plataformas completas com foco em escalabilidade, performance, responsividade e acessibilidade.",
    },
    {
      title: "Arquitetura Frontend",
      key: "arq-frontend",
      description: "Experiência na criação de arquiteturas frontend escaláveis, organização de design tokens, bibliotecas de componentes e padronização de código em projetos de grande porte.",
    },
    {
      title: "Desenvolvimento Mobile",
      key: "dev-mobile",
      description: "Experiência no desenvolvimento de aplicativos móveis utilizando React Native, Expo e Android Studio. Já participei da criação de aplicações robustas, focadas em performance e experiência do usuário.",
    },
    {
      title: "Design UI/UX",
      key: "ux-ui",
      description: "Experiência na criação de interfaces e protótipos, desde wireframes de baixa fidelidade até interfaces navegáveis. Mesmo não sendo meu foco principal, gosto de contribuir com decisões de UX e estrutura de interface.",
    },
    {
      title: "Comunicação e Colaboração",
      key: "colab-comunicacao",
      description: "Valorizo comunicação clara e documentação bem estruturada durante todo o desenvolvimento. Trabalho em parceria com designers, QAs, PMs e desenvolvedores, além de contribuir com revisão de código e apoio técnico ao time.",
    },
    {
      title: "Testes e Qualidade de Código",
      key: "test-quality",
      description: "Prezo por código confiável, testável, limpo e fácil de manter. Tenho experiência em debugging, análise de problemas e implementação cuidadosa de interfaces, garantindo fidelidade ao design e comportamento consistente da aplicação.",
    }
  ]

  return (
    <section className="container" id="skills" data-aos="fade-up">
      <h2 className="code">{strings.skills_title}</h2>

      <div className="card-skills">
        {cards.map(card => (
          <div className="skill-card" key={card.key} style={{ gridArea: card.key }}>
            <h3 className="skill-card-title">{card.title}</h3>
            <p>{card.description}</p>
            <div className="skills-icons">
              {[...skills, ...skills].map((skill) => (
                <span className="skill-tag">{skill.name}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="code close">{strings.skills_title}</h2>
    </section>
  );
}
