import { 
  HiOutlineChatBubbleLeftRight, 
  HiOutlineDevicePhoneMobile, 
  HiOutlineSquares2X2, 
  HiOutlinePaintBrush, 
  HiOutlineShieldCheck,
  HiOutlineCodeBracket  
} from "react-icons/hi2";

import "./style.css";

import useStrings from "../../hooks/useStrings";
import SkillCard from "../ExpertiseCard";

export default function Expertise() {
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
      Icon: HiOutlineCodeBracket,
      highlighted: true,
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
      Icon: HiOutlineSquares2X2,
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
      Icon: HiOutlineDevicePhoneMobile,
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
      Icon: HiOutlinePaintBrush,
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
        "Pixel perfect UI",
      ],
      Icon: HiOutlineShieldCheck,
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
      Icon: HiOutlineChatBubbleLeftRight,
    }
  ];

  return (
    <section className="container" id="expertise" data-aos="fade-up">
      <h2 className="code">{strings.skills_title}</h2>

      <div className="expertise-cards">
        {cards.map((card) => (
          <SkillCard key={card.key} card={card} skills={skills} />
        ))}
      </div>

      <h2 className="code close">{strings.skills_title}</h2>
    </section>
  );
}
