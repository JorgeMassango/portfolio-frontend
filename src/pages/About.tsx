import { motion } from 'framer-motion';
import './About.css';
import { useEffect, useRef, useState } from 'react';
import {
    FcMenu,
    FcAbout,
} from 'react-icons/fc';

const skills = [
    { name: 'React', value: 90 },
    { name: 'NestJS', value: 85 },
    { name: 'TypeScript', value: 88 },
    { name: 'JavaScript', value: 87 },
    { name: 'Node.js', value: 84 },
    { name: 'Next.js', value: 78 },
    { name: 'Java SE', value: 80 },
    { name: 'JavaFX', value: 70 },
    { name: 'C', value: 65 },
    { name: 'C++', value: 65 },
    { name: 'C#', value: 70 },
    { name: 'PHP', value: 60 },
    { name: 'PostgreSQL', value: 80 },
    { name: 'MySQL', value: 75 },
    { name: 'Microsoft SQL Server', value: 68 },
    { name: 'SQL Developer', value: 65 },
    { name: 'Docker', value: 70 },
    { name: 'HTML5', value: 92 },
    { name: 'CSS3', value: 85 },
    { name: 'Tailwind CSS', value: 83 },
    { name: 'Figma', value: 75 },
    { name: 'Postman', value: 80 },
    { name: 'Git', value: 88 },
    { name: 'JSON', value: 85 },
    { name: 'Vite.js', value: 75 },
    { name: 'Canva', value: 70 }
];


const languages = [
    { name: 'Português', value: 100 },
    { name: 'Changana', value: 100 },
    { name: 'Inglês', value: 80 },
    { name: 'Espanhol', value: 30 },
    { name: 'Frances', value: 25 },
];

const timeline = [
    {
        year: '2020',
        label: 'Início do curso de Engenharia de Gestão de Energias Renováveis e Recursos Petrolíferos – UDM',
    },
    {
        year: '2021',
        label: 'Transição para área de tecnologia – Curso de Informática (Desenvolvimento de Sistemas)',
    },
    {
        year: '2022',
        label: 'Primeiros projetos como freelancer – Desenvolvimento de sites institucionais e landing pages',
    },
    {
        year: '2023',
        label: 'Atuação como Fullstack Developer em startup local – Desenvolvimento de sistemas internos e APIs',
    },
    {
        year: '2024',
        label: 'Conclusão de curso profissional em Serralharia e Soldadura – Integração de habilidades técnicas e digitais',
    },
    {
        year: '2024',
        label: 'Criação de produtos próprios e consultorias para PMEs – Foco em soluções web personalizadas',
    },
    {
        year: '2025',
        label: 'Especialização autodidata em Inteligência Artificial e UI/UX – Projetos com React, NestJS e automações',
    },
];

export default function About() {
    const [menuOpen, setMenuOpen] = useState(false);
    const touchStartX = useRef(0);

    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            touchStartX.current = e.touches[0].clientX;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            const touchEndX = e.changedTouches[0].clientX;
            const deltaX = touchStartX.current - touchEndX;

            if (menuOpen && deltaX < -50) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [menuOpen]);

    return (
        <motion.div
            className="about-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.0 }}
        >{menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}

            <header className="top-menu">
                <div className="left">
                    {!menuOpen && (
                        <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
                            <FcMenu size={28} />
                        </button>
                    )}
                    <h2 className="section-title">
                        <span className="highlight"><FcAbout /></span> Sobre Mim
                    </h2>
                </div>

                <nav className={`right ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/projects">Projetos</a></li>
                        <li><a href="/habilidades">Habilidades</a></li>
                        <li><a href="/contact">Contacto</a></li>
                        <li><a href="/JocaCv.pdf" download className="cv-btn">Download CV</a></li>
                    </ul>
                </nav>
            </header>
            <section className="sobre-section">
                <div className="sobre-text">
                    <p>
                        Sou um desenvolvedor fullstack apaixonado por transformar ideias em produtos digitais robustos,
                        modernos e escaláveis. Domino tanto o frontend quanto o backend, com uma visão estratégica que
                        vai além do código. Minhas entregas não são apenas linhas de programação: são soluções pensadas
                        para resolver problemas reais, com foco em performance, experiência do usuário e sustentabilidade
                        do produto a longo prazo.
                    </p>
                    <p>
                        Trabalho com tecnologias de ponta como React, NestJS, TypeScript e bancos de dados como PostgreSQL
                        e MySQL, construindo desde aplicações web responsivas até sistemas empresariais completos. Tenho
                        experiência com integrações complexas, autenticação segura, dashboards inteligentes e arquitetura
                        de software escalável. Meu foco é sempre adaptar a tecnologia às necessidades do negócio, e não o
                        contrário. Acredito que cada sistema deve ser funcional, personalizável e fácil de manter sem
                        abrir mão do design e da usabilidade.
                    </p>
                    <p>
                        Mas minha atuação vai além da engenharia de software. Penso como empreendedor e ajo como um parceiro
                        de produto. Entendo as dores de quem precisa tirar uma ideia do papel, captar clientes, otimizar
                        processos e crescer no digital. Por isso, atuo também como consultor estratégico, integrador de
                        sistemas e solucionador de problemas. Se você é fundador de startup, investidor ou gestor com uma
                        visão inovadora, posso ajudar a construir algo que realmente funcione com tecnologia confiável,
                        entrega profissional e visão de futuro.
                    </p>
                </div>
                <div className="sobre-img">
                    <img src="/joca-dark.jpg" alt="Jorge codando no escuro" />
                    <h3>Jorge Hermenegildo Massango</h3>
                    <p>Fullstack Developer | Product Builder | Tech Strategist</p>
                </div>
            </section>

            <section className="section">
                <h2>Idiomas</h2>
                {languages.map((lang) => (
                    <div key={lang.name} className="bar-wrapper">
                        <span>{lang.name}</span>
                        <div className="bar">
                            <div className="bar-fill" style={{ width: `${lang.value}%` }}>
                                {lang.value}%
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            <section className="section">
                <h2>Formação Acadêmica</h2>
                <ul>
                    <li>
                        Engenharia de Gestão de Energias Renováveis e Recursos Petrolíferos – Universidade Técnica de Moçambique (UDM) – 2020–2021
                        <br /><em>Curso não concluído. Foco em soluções energéticas sustentáveis e gestão de recursos.</em>
                    </li>
                    <li>
                        Informática (Desenvolvimento de Sistemas) – Universidade Técnica Diogo Eugenio Guilande (UTDEG) – 2021–2023
                        <br /><em>Curso não concluído. Conhecimentos adquiridos em desenvolvimento web e lógica de programação.</em>
                    </li>
                    <li>
                        Serralharia e Soldadura – Instituto de Formação Profissional e Estudos Laborais Alberto Cassimo (IFPELAC) – Fev. 2024–Ago. 2024
                        <br /><em>Curso profissional concluído com certificado. Ênfase em soldagem, estruturas metálicas e leitura de projetos.</em>
                    </li>
                </ul>
            </section>

            <section className="section">
                <h2>Soft Skills / Qualidades</h2>
                <ul className="bullets">
                    <li>Persistência</li>
                    <li>Visão sistêmica</li>
                    <li>Curiosidade técnica</li>
                    <li>Mentalidade de produto</li>
                    <li>Comunicação detalhada</li>
                    <li>Resolução de problemas</li>
                    <li>Pensamento estratégico</li>
                    <li>Capacidade de liderança</li>
                    <li>Autonomia e proatividade</li>
                    <li>Comunicação clara e objetiva</li>
                    <li>Atenção ao design e usabilidade</li>



                </ul>
            </section>
            <section className="section">
                <h2>Metodologias que aplico</h2>
                <ul className="bullets">
                    <li>Scrum (sprints, backlog, standups)</li>
                    <li>Extreme Programming (XP) — pair programming, TDD</li>
                </ul>
            </section>

            <section className="section">
                <h2>Minha Evolução</h2>
                <ul className="timeline">
                    {timeline.map((item, idx) => (
                        <li key={idx}>
                            <span className="year">{item.year}</span>
                            <span className="label">{item.label}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="section">
                <h2>Gráfico de Habilidades</h2>
                {skills.map((skill) => (
                    <div key={skill.name} className="bar-wrapper">
                        <span>{skill.name}</span>
                        <div className="bar">
                            <div className="bar-fill" style={{ width: `${skill.value}%` }}>
                                {skill.value}%
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            <section className="section">
                <h2>Disponibilidade</h2>
                <p>
                    Estou atualmente <strong>disponível</strong> para novos desafios profissionais, incluindo:
                </p>
                <ul>
                    <li>Oportunidades de emprego em tempo integral ou parcial</li>
                    <li>Projetos freelance ou consultorias tecnológicas</li>
                    <li>Trabalho remoto ou híbrido</li>
                    <li>Deslocações nacionais ou internacionais conforme necessário</li>
                    <li>Colaborações com equipas multidisciplinares em ambientes ágeis</li>
                </ul>
                <p>
                    Busco ambientes inovadores que valorizem <strong>crescimento contínuo</strong>, <strong>aprendizado técnico</strong> e <strong>impacto real em produtos digitais</strong>.
                </p>
            </section>
        </motion.div>
    );
}
