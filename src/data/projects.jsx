import { getSkillByName } from '../utils/getSkillByName'
import { Fragment } from 'react'

import refinances from '../assets/projects/refinances.webp'
import investium from '../assets/projects/investium.webp'
import raizes from '../assets/projects/raízes solidárias.webp'
import valorant from '../assets/projects/valorant web.webp'
import aluraStudies from '../assets/projects/alura studies.webp'
import solar from '../assets/projects/solar.webp'
import bagify from '../assets/projects/bagify.webp'
import nutriTips from '../assets/projects/nutri tips.webp'

export const projects_pt = [
    {
        id: 1,
        title: 'Refinances',
        image: refinances,
        subtitle: 'Aplicativo de gerenciamento financeiro',
        github: 'https://github.com/mariana-santos/refinances',
        figma: 'https://www.figma.com/file/l6NjNdvmTZ3H7ttO5mG8Pz/Evoke-team-library?node-id=0%3A1',
        video_id: 'i9xEfPATjSk',
        params: '?start=681&autoplay=1',
        relevant: true,
        skills: [
            getSkillByName("React Native"),
            getSkillByName("Typescript"),
            getSkillByName("SQL Server"),
            getSkillByName("Git"),
            getSkillByName("Figma"),
            getSkillByName("Node JS"),
          ],
      
        description: 
            <Fragment>
                <p>O <strong>Refinances</strong> nasceu de uma necessidade observada pelo grupo: a organização financeira. O projeto foi desenvolvido como nosso <strong>Trabalho de Conclusão de Curso</strong> na <a href='https://www.fiap.com.br/' target='_blank' rel="noreferrer">ETEC de Guaianazes</a>.</p>

                <p>O app conta com o gerenciamento completo das finanças: entradas, saídas, contas, metas financeiras e possui uma dashboard para acompanhar os gastos por categoria!</p>
            </Fragment>,
        team: [
            {
                id: 1,
                name: 'David Almeida',
                link: 'https://www.linkedin.com/in/almeida154'
            },
            {
                id: 2,
                name: 'Isabela Saori',
                link: 'https://www.linkedin.com/in/isabela-saori-nakano-2137b119b'
            },
            {
                id: 3,
                name: 'Italo Cabral',
                link: 'https://www.linkedin.com/in/bruno-italo-cabral'
            },
            {
                id: 4,
                name: 'Samuel Guerra',
                link: 'https://www.linkedin.com/in/samuel-guerra-aquino'
            },
            {
                id: 5,
                name: 'Phillip Anselmo',
            },
            {
                id: 6,
                name: 'Wallace Moura',
                link: 'https://www.linkedin.com/in/wallace-moura-2b15811a3'
            },
        ]
    },
    {
        id: 2,
        title: 'Investium',
        image: investium,
        subtitle: 'Website criado para facilitar e incentivar o investimento em IPO',
        deploy: 'https://investium-fiap.vercel.app/',
        github: 'https://github.com/mariana-santos/repo_challenge',
        figma: 'https://www.figma.com/design/UugKtNr32F4NW7UR14p5Ml/DEVZILLA?node-id=1-2&p=f&t=ReL7Qn4DE6Yp4J1D-0',
        video_id: '3nP4r-L_qqk',
        relevant: true,
        skills: [
            getSkillByName("React"),
            getSkillByName("Javascript"),
            getSkillByName("Java"),
            getSkillByName("Figma"),
            getSkillByName("SQL Server"),
            getSkillByName("Git"),
        ],
        description: 
            <Fragment>
                <p>A <a href='https://www.fiap.com.br/' target='_blank' rel="noreferrer">FIAP</a> em parceria com a <a href='https://www.b3.com.br/pt_br/' target='_blank' rel="noreferrer">B3</a> nos desafiou a usar a tecnologia para desmistificar o investimento em <strong>IPO</strong> no Brasil. </p>

                <p>Pensando nisso, a <strong>Investium</strong> foi criada! Uma solução para investidores iniciantes que não possuem acesso fácil às informações das IPOs, com funcionalidades como comparação de IPOs e gráficos detalhados sobre as informações financeiras das empresas.</p>
            </Fragment>,
        summary_description:
            <p>A <strong>Investium</strong> foi criada desmistificar o investimento em <strong>IPO</strong> no Brasil, com funcionalidades como comparação de IPOs e gráficos detalhados sobre as informações financeiras das empresas. O projeto foi desenvolvido com <strong>React</strong> e <strong>Javascript</strong>.</p>
        ,
        team: [
            {
                id: 1,
                name: 'Alunos da FIAP',
            },
        ]
    },
    {
        id: 3,
        title: 'Raízes Solidárias',
        image: raizes,
        subtitle: 'Website criado para gerenciar uma fictícia horta solidária contra a fome',
        github: 'https://github.com/mariana-santos/GS2',
        video_id: 'SJV4n5QrA_Y',
        relevant: true,
        skills: [
            getSkillByName("Next JS"),
            getSkillByName("Java"),
            getSkillByName("SQL Server"),
            getSkillByName("Git"),
            getSkillByName("Javascript"),
            getSkillByName("Python"),
        ],
        description:
            <Fragment>
                <p>A <a href='https://www.fiap.com.br/' target='_blank' rel="noreferrer">FIAP</a> nos propôs encontrar uma forma de utilizar a tecnologia e inovação no problema da <strong>fome</strong>. Com isso em mente, nós desenvolvemos a <strong>Raízes Solidárias</strong> como um projeto de horta urbana comunitária.</p>

                <p>Os usuários podem ser voluntários diretos e também podem doar e gerenciar a horta de uma forma <strong>gamificada</strong>. O valor doado é convertido em moedas virtuais para que sejam utilizadas na compra de sementes, adubo, fertilizantes, etc...</p>

            </Fragment>,
        team: [
            {
                id: 1,
                name: 'Kaue Caponero',
                link: 'https://www.linkedin.com/in/kauecaponero/'
            },
            {
                id: 2,
                name: 'Bruna Menegatti',
                link: 'https://www.linkedin.com/in/brunamvienna'
            },
        ]
    },
    {
        id: 4,
        title: 'Valorant Web',
        image: valorant,
        subtitle: 'Website com informações do jogo Valorant',
        github: 'https://github.com/AlehSouza/Valorant-Web',
        deploy: 'https://valorant-web.vercel.app/',
        video_id: 'v7-2ZHXoqwM',
        skills: [
            getSkillByName("Next JS"),
            getSkillByName("Typescript"),
            getSkillByName("Chakra UI"),
            getSkillByName("Git"),
        ],
        description:
            <Fragment>
                <p>O projeto foi criado em parceria com o <strong>Alexandre</strong>, que é um grande fã do jogo e me chamou pra ajudá-lo a utilizar a <a href="https://valorant-api.com/">API da Riot Games</a> para criar um sistema Web com informações sobre o <i>game</i>.</p>

                <p>Além de um gerador de banner personalizável e compartilhável, no site é possível encontrar as principais informações do jogo, como os agentes, mapas, armas...</p>

            </Fragment>,
        team: [
            {
                id: 1,
                name: 'Alexandre Souza',
                link: 'https://www.linkedin.com/in/alehsouza'
            }
        ]
    },
    {
        id: 5,
        title: 'Alura Studies',
        image: aluraStudies,
        subtitle: 'Website para gerenciamento de estudos',
        github: 'https://github.com/mariana-santos/alura-studies',
        deploy: 'https://alura-studies-mariana-santos.vercel.app/',
        video_id: '9NvLtuW9PwA',
        skills: [
            getSkillByName("React"),
            getSkillByName("Typescript"),
            getSkillByName("SCSS"),
            getSkillByName("Git"),
        ],
        description:
            <Fragment>
                <p>O projeto foi criado junto ao curso <strong>"React: escrevendo com Typescript"</strong> da <a href="https://www.alura.com.br/" target="_blank" rel="noreferrer">Alura</a>, uma plataforma de cursos de tecnologia. </p>

                <p>Com ele aprendi mais sobre a linguagem Typescript, CSS modules, Hooks no React, e boas práticas como boas práticas como <strong>DRY (Don't repeat yourself) e SRP (Single Responsibility Principle).</strong></p>
            </Fragment>,
    },
    {
        id: 6,
        title: 'Solar',
        image: solar,
        subtitle: 'Website de aluguel de carros elétricos',
        deploy: 'https://solar-seven.vercel.app/',
        github: 'https://github.com/mariana-santos/gs1',
        video_id: 'nihtg3UWumg',
        skills: [
            getSkillByName("Javascript"),
            getSkillByName("Figma"),
            getSkillByName("Git"),
        ],
        description: <Fragment>
            <p>A <a href='https://www.fiap.com.br/' target='_blank' rel="noreferrer">FIAP</a> nos desafiou a usar a tecnologia para melhorar a mobilidade urbana no Brasil. </p>

            <p>Pensando nisso, criamos o Solar, uma solução para baseada no desenvolvimento de um website de <strong>aluguel de carros elétricos movidos a energia solar</strong>, visando a popularização do carro elétrico, sustentabilidade, otimização do trânsito, preservação da fauna e flora e otimização da quantidade de carros parados.  </p>
        </Fragment>,
        team: [
            {
                id: 1,
                name: 'Alunos da FIAP',
            },
        ]
    },
    {
        id: 8,
        title: 'Nutri Tips',
        image: nutriTips,
        subtitle: 'Blog de nutrição consumindo uma API externa',
        deploy: 'https://nutri-tips.vercel.app/',
        github: 'https://github.com/mariana-santos/Nutri-Tips',
        video_id: 'yguCXU8AqJM',
        skills: [
            getSkillByName("React"),
            getSkillByName("Javascript"),
            getSkillByName("Git"),
        ],
        description: 
            <Fragment>
                <p>Durante o início dos meus estudos com <strong>React</strong>, construí esse projeto simples de um blog sobre nutrição com filtros. </p>

                <p>Os dados são consumidos da API disponibilizada gratuitamente pelo <a href="https://sujeitoprogramador.com/rn-api/?api=posts" target="_blank" rel="noreferrer">Sujeito Programador</a>.</p>
            </Fragment>,
    },
    {
        id: 7,
        title: 'Bagify',
        image: bagify,
        subtitle: 'Aplicativo de gerenciamento de bagagens',
        github: 'https://github.com/mariana-santos/hackaton-copastur',
        figma: 'https://www.figma.com/design/tyvf7T8X9Q4iEKbUC6Xqmy/Wireframe?node-id=23-2028&p=f&t=rzA5lfewKbvYaOYR-0',
        video_id: 'nihtg3UWumg',
        skills: [
            getSkillByName("React Native"),
            getSkillByName("Javascript"),
            getSkillByName("Figma"),
            getSkillByName("React Native"),
            getSkillByName("Git"),
        ],
        description: <Fragment>
            <p>Durante o <strong>Hackaton</strong> promovido pela <a href="https://www.copastur.com.br/" target="_blank" rel="noreferrer">Copastur</a> e a <a href='https://www.fiap.com.br/' target='_blank' rel="noreferrer">FIAP</a>, nós fomos desafiados a encontrar uma forma de humanizar a experiência dos viajantes de companhias aéreas.</p>

            <p>Desse problema surgiu o <strong>Bagify</strong>: um app de gerenciamento para o usuário ter controle de suas bagagens enquanto viaja, e assim viajar sem preocupações com a segurança de seus pertences.</p>
        </Fragment>,
        team: [
            {
                id: 1,
                name: 'David Almeida',
                link: 'https://www.linkedin.com/in/almeida154'
            },
            {
                id: 2,
                name: 'Juliana Gonzales',
                link: 'https://www.linkedin.com/in/julianagonzalesbispo'
            },
            {
                id: 3,
                name: 'Max Fernandes',
                link: 'https://www.linkedin.com/in/max-fernandes-de-souza-18b12616a'
            },
            {
                id: 4,
                name: 'Rafael Dibe',
                link: 'https://www.linkedin.com/in/rafael-dibe-5aba5847'
            },
        ]
    },
];

export const projects_en = [
    {
        ...projects_pt[0],
        subtitle: 'Financial management app built with React Native',
        description: 
        <Fragment>
            <p>
                <strong>Refinances</strong> was born out of a need observed by the group: financial organization. The project was developed as our <strong>Final Course Project</strong> at <a href='https://www.etecdeguaianazes.com.br/' target='_blank' rel="noreferrer">ETEC de Guaianazes</a>.
            </p>
            <p>The app features full financial management: income, expenses, accounts, financial goals, and a dashboard to track expenses by category!</p>
        </Fragment>,
    },
    {
        ...projects_pt[1],
        subtitle: 'Website created to facilitate and encourage investment in IPO',
        description: <Fragment>
            <p><a href='https://www.fiap.com.br/' target='_blank' rel="noreferrer">FIAP University</a> in partnership with <a href='https://www.b3.com.br/pt_br/' target='_blank' rel="noreferrer">B3</a> challenged us to use technology to demystify <strong>IPO investments</strong> in Brazil. </p>

            <p>With that in mind, <strong>Investium</strong> was created! A website for novice investor who don't have easy acces to IPOs relevant informations, containing features such as IPO comparison and detailed graphics about the companies financial information.</p>
        </Fragment>,
        summary_description: 
            <p>
                <strong>Investium</strong> was created to demystify <strong>IPO investments</strong> in Brazil, containing features such as IPO comparison and detailed graphics about the companies financial information. The project was developed with <strong>React</strong> and <strong>Javascript</strong>.
            </p>,
        team: [
            {
                id: 1,
                name: 'FIAP students',
            },
        ]
    },
    {
        ...projects_pt[2],
        subtitle: 'Website created to manage a fictional solidarity garden against hunger',
        description:
            <Fragment>
                <p>
                    <a href='https://www.fiap.com.br/' target='_blank' rel="noreferrer">FIAP</a> challenged us to find a way to use technology and innovation to address the issue of <strong>hunger</strong>. With that in mind, we developed <strong>Raízes Solidárias</strong> as a community urban garden project.
                </p>
                <p>
                    Users can participate as direct volunteers and also donate to and manage the garden in a <strong>gamified</strong> way. The donated amount is converted into virtual coins that can be used to purchase seeds, fertilizer, and other gardening supplies.
                </p>
            </Fragment>,
    },
    {
        ...projects_pt[3],
        subtitle: 'Website with information about the game Valorant',
        description:
            <Fragment>
                <p>
                    The project was created in partnership with <strong>Alexandre</strong>, who is a big fan of the game and invited me to help him utilize the <a href="https://valorant-api.com/">Riot Games API</a> to create a web system with information about the game.
                </p>
                <p>In addition to a customizable and shareable banner generator, the website provides the main game information, such as agents, maps, weapons, and more.</p>
            </Fragment>,
    },
    {
        ...projects_pt[4],
        subtitle: 'Website for study management',
        description:
            <Fragment>
                <p>
                    The project was created along with the course <strong>"React: Writing with Typescript"</strong> from <a href="https://www.alura.com.br/" target="_blank" rel="noreferrer">Alura</a>, a technology course platform.
                </p>

                <p>
                    Through this course, I learned more about the Typescript language, CSS modules, React Hooks, and best practices such as <strong>DRY (Don't repeat yourself) and SRP (Single Responsibility Principle).</strong>
                </p>
            </Fragment>

    },
    {
        ...projects_pt[5],
        subtitle: 'Electric car rental website',
        description:
            <Fragment>
                <p>
                    <a href='https://www.fiap.com.br/' target='_blank' rel="noreferrer">FIAP</a> challenged us to use technology to improve urban mobility in Brazil. 
                </p>
                <p>
                    With that in mind, we created Solar, a website for <strong>renting solar-powered electric cars</strong>, aiming to popularize electric vehicles, promote sustainability, optimize traffic flow, preserve wildlife, and reduce the number of parked cars.
                </p>
            </Fragment>,
        team: [
            {
                id: 1,
                name: 'FIAP students',
            },
        ]
    },
    {
        ...projects_pt[6],
        subtitle: 'Nutrition blog consuming an external API',
        description: 
            <Fragment>
                <p>During the early stages of my studies with React, I built this simple project of a nutrition blog with filters.</p>

                <p>The data is consumed from the API provided for free by <a href="https://sujeitoprogramador.com/rn-api/?api=posts" target="_blank" rel="noreferrer">Sujeito Programador</a>.</p>
            </Fragment>,
    },
    {
        ...projects_pt[7],
        subtitle: 'Luggage management app',
        description: <Fragment>
            <p>
                During the <strong>Hackathon</strong> promoted by <a href="https://www.copastur.com.br/" target="_blank" rel="noreferrer">Copastur</a> and <a href='https://www.fiap.com.br/' target='_blank' rel="noreferrer">FIAP</a>, we were challenged to find a way to humanize the experience of airline travelers.
            </p>
            <p>
                From this problem, <strong>Bagify</strong> was born: a baggage management app that allows users to have control over their belongings while traveling, ensuring a worry-free journey and the security of their belongings.
            </p>
        </Fragment>,
    },
];