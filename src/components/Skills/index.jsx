import { React } from "react";
import Skill from "../Skill";

import "./style.css";

import useStrings from "../../hooks/useStrings";

export default function Skills() {
  const strings = useStrings();

  const skills = strings.skills.filter((skill) => !skill.hide);

  const cards = [
    {
      title: "Desenvolvimento Frontend",
      key: "dev-web",
      description: [
        "Crio aplicações web modernas e de alta performance com ferramentas baseadas no ecossistema Javascript, como o React e o Next.js.",
        "Gerencio plataformas CMS completas com foco em escalabilidade, performance, responsividade e acessibilidade.",
      ],
      impact: [
        "-40% no tempo de carregamento com otimizações de performance",
        "Milhares de usuários impactados",
      ],
    },
    {
      title: "Arquitetura",
      key: "arq-frontend",
      description: [
        "Desenvolvo arquiteturas frontend escaláveis, design tokens, UI kits e padronização em projetos de grande porte.",
      ],
      impact: [
        "Redução no tempo de desenvolvimento",
        "Bibliotecas UI reutilizáveis",
        "Redução de technical debt",
      ],
    },
    {
      title: "Mobile",
      key: "dev-mobile",
      description: [
        "Desenvolvo aplicações móveis cross-platform com ênfase na experiência do usuário.",
      ],
      impact: [
        "Apps com alta performance",
        "Projetos responsivos e acessíveis",
      ],
    },
    {
      title: "Design UI/UX",
      key: "ux-ui",
      description: [
        "Implemento interfaces e protótipos, desde wireframes de baixa fidelidade até interfaces completas e navegáveis.",
        "Contribuo com decisões de UX e estrutura de interface, garantindo comunicação eficaz entre design e desenvolvimento.",
      ],
      impact: [
        "Melhora na usabilidade e satisfação do usuário",
        "Projetos completos, do design à implementação",
      ],
    },
    {
      title: "Testes e Qualidade",
      key: "test-quality",
      description: [
        "Prezo por código confiável, testável, limpo e fácil de manter.",
        "Sou confiante debugando e analisando problemas. Desenvolvo testes automatizados para garantir a qualidade do produto final.",
      ],
      impact: [
        "Redução de bugs",
        "Código de alta qualidade",
      ],
    },
    {
      title: "Comunicação",
      key: "communication-collaboration",
      description: [
        "Reconheço a comunicação eficaz como um pilar fundamental para o sucesso de qualquer projeto. ",
        "Valorizo a transparência, a clareza e a colaboração em todas as etapas do desenvolvimento.",
      ],
      impact: [
        "Comunicação eficaz",
        "Colaboração fluida entre equipes",
      ],
    }
  ];

  return (
    <section className="container" id="skills" data-aos="fade-up">
      <h2 className="code">{strings.skills_title}</h2>

      <div className="card-skills">
        {cards.map((card) => (
          <div
            className="skill-card"
            key={card.key}
            style={{ gridArea: card.key }}
          >
            <h3 className="skill-card-title">{card.title}</h3>
            <div className="skill-card-description">
              {card.description.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
            <div className="impact-badges">
              {card.impact.map((impact, index) => (
                <span key={index}>{impact}</span>
              ))}
            </div>
            <div className="skills-icons">
              {[...skills, ...skills].map((skill) => (
                <span className="skill-tag" key={skill.name}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="code close">{strings.skills_title}</h2>
    </section>
  );
}
