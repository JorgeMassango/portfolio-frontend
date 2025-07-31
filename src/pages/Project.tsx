import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaJsSquare, FaJava, FaLaptopCode } from 'react-icons/fa';
import { SiPostgresql, SiSupabase, SiNextdotjs, SiTypescript, SiPrisma, SiTailwindcss, SiJsonwebtokens, SiGoogle } from 'react-icons/si';
import {
  FcMenu,
  FcWorkflow,
} from 'react-icons/fc';
import styles from './Project.module.css';

interface ProjectData {
  id: number;
  title: string;
  description: string;
  technologies: string;
  image: string;
  category: string;
  url: string;
}

const Project: React.FC = () => {
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

  const projects: ProjectData[] = [
    {
      id: 1,
      title: "Machine Sales",
      description: "Plataforma moderna para venda de veículos com galeria interativa, ficha técnica detalhada, sistema de agendamento de visitas, login com autenticação JWT e painel administrativo completo.",
      technologies: "React, NestJS, TypeScript, PostgreSQL, Supabase, Prisma, Tailwind, JWT, reCAPTCHA",
      image: "/machine.png",
      category: "web",
      url: "https://machine-sales-frontend.vercel.app/"
    },
    {
      id: 2,
      title: "FastFood",
      description: "Aplicação desktop com interface gráfica para gerenciamento de pedidos em tempo real. Permite cálculo automático de subtotal, imposto e troco com base em itens fixos do menu. Ideal para operações rápidas em estabelecimentos de fast food.",
      technologies: "Java, Java Swing, MySQL, JDBC, NetBeans",
      image: "/fastfood.png",
      category: "desktop",
      url: "FastFoodInstaller.exe"
    },
    {
      id: 3,
      title: "Machine Sales",
      description: "Módulo completo para visualização e gestão de carros à venda. Possui sistema de agendamento de visitas, painel administrativo e galeria de veículos com ficha técnica",
      technologies: "React, NestJS, PostgreSQL, Supabase, JWT",
      image: "/projecto1.png",
      category: "web",
      url: "https://machine-sales-v3.example.com"
    },
    {
      id: 4,
      title: "Sistema Educacional",
      description: "Plataforma completa de gestão educacional com sistema de inscrições, painel de controle e acompanhamento de estudantes",
      technologies: "React, Node.js, MongoDB, Express",
      image: "/projecto3.ng",
      category: "education",
      url: "https://sistema-educacional.example.com"
    },
    {
      id: 5,
      title: "Blog Pessoal",
      description: "Blog pessoal com sistema de posts, comentários e gestão de conteúdo. Interface moderna e responsiva",
      technologies: "Next.js, TypeScript, Prisma, PostgreSQL",
      image: "/projecto3",
      category: "blog",
      url: "https://blog-pessoal.example.com"
    },
    {
      id: 6,
      title: "Dashboard Analytics",
      description: "Painel administrativo com gráficos interativos, relatórios em tempo real e sistema de usuários",
      technologies: "React, TypeScript, Chart.js, Firebase",
      image: "/projecto3.png",
      category: "dashboard",
      url: "https://dashboard-analytics.example.com"
    }
  ];

  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case 'react':
        return <FaReact />;
      case 'nestjs':
        return <FaNodeJs />;
      case 'postgresql':
        return <SiPostgresql />;
      case 'supabase':
        return <SiSupabase />;
      case 'nextjs':
      case 'next.js':
        return <SiNextdotjs />;
      case 'prisma':
        return <SiPrisma />;
      case 'tailwind':
      case 'tailwindcss':
        return <SiTailwindcss />;
      case 'java':
      case 'java swing':
        return <FaJava />;
      case 'jwt':
      case 'jsonwebtoken':
        return <SiJsonwebtokens />;
      case 'recaptcha':
      case 'google recaptcha':
        return <SiGoogle />;
      case 'typescript':
        return <SiTypescript />;
      case 'netbeans':
        return <FaLaptopCode />;
      case 'javascript':
        return <FaJsSquare />;
      default:
        return <FaDatabase />;
    }
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.0 }}
    >
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}

      <header className="top-menu">
        <div className="left">
          {!menuOpen && (
            <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
              <FcMenu size={28} />
            </button>
          )}
          <h2 className="section-title">
            <span className="highlight"><FcWorkflow /></span> Projetos
          </h2>
        </div>

        <nav className={`right ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">Sobre mim</a></li>
            <li><a href="/habilidades">Habilidades</a></li>
            <li><a href="/contact">Contacto</a></li>
            <li><a href="/JocaCv.pdf" download className="cv-btn">Download CV</a></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
              </div>

              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.techStack}>
                  <span className={styles.techLabel}>Tecnologias:</span>
                  <div className={styles.techList}>
                    {project.technologies.split(', ').map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techItem}>
                        {getTechIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewProjectBtn}
                >
                  Ver Projecto
                </a>

              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </motion.div>
  );
};

export default Project;
