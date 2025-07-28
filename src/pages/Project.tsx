import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaJsSquare } from 'react-icons/fa';
import { SiPostgresql, SiSupabase, SiNextdotjs, SiTypescript } from 'react-icons/si';
import styles from './Project.module.css';

interface ProjectData {
  id: number;
  title: string;
  description: string;
  technologies: string;
  image: string;
  category: string;
}

const Project: React.FC = () => {
  const projects: ProjectData[] = [
    {
      id: 1,
      title: "Machine Sales",
      description: "Módulo completo para visualização e gestão de carros à venda. Possui sistema de agendamento de visitas, painel administrativo e galeria de veículos com ficha técnica",
      technologies: "React, NestJS, PostgreSQL, Supabase, JWT",
      image: "/api/placeholder/400/250",
      category: "web"
    },
    {
      id: 2,
      title: "Machine Sales",
      description: "Módulo completo para visualização e gestão de carros à venda. Possui sistema de agendamento de visitas, painel administrativo e galeria de veículos com ficha técnica",
      technologies: "React, NestJS, PostgreSQL, Supabase, JWT",
      image: "/api/placeholder/400/250",
      category: "web"
    },
    {
      id: 3,
      title: "Machine Sales",
      description: "Módulo completo para visualização e gestão de carros à venda. Possui sistema de agendamento de visitas, painel administrativo e galeria de veículos com ficha técnica",
      technologies: "React, NestJS, PostgreSQL, Supabase, JWT",
      image: "/api/placeholder/400/250",
      category: "web"
    },
    {
      id: 4,
      title: "Sistema Educacional",
      description: "Plataforma completa de gestão educacional com sistema de inscrições, painel de controle e acompanhamento de estudantes",
      technologies: "React, Node.js, MongoDB, Express",
      image: "/api/placeholder/400/250",
      category: "education"
    },
    {
      id: 5,
      title: "Blog Pessoal",
      description: "Blog pessoal com sistema de posts, comentários e gestão de conteúdo. Interface moderna e responsiva",
      technologies: "Next.js, TypeScript, Prisma, PostgreSQL",
      image: "/api/placeholder/400/250",
      category: "blog"
    },
    {
      id: 6,
      title: "Dashboard Analytics",
      description: "Painel administrativo com gráficos interativos, relatórios em tempo real e sistema de usuários",
      technologies: "React, TypeScript, Chart.js, Firebase",
      image: "/api/placeholder/400/250",
      category: "dashboard"
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
      case 'typescript':
        return <SiTypescript />;
      case 'javascript':
        return <FaJsSquare />;
      default:
        return <FaDatabase />;
    }
  };

  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>C</div>
          <span>Projectos</span>
        </div>
        <div className={styles.navLinks}>
          <a href="/">Home</a>
          <a href="/habilidades">Habilidades</a>
          <a href="/sobre">Sobre mim</a>
          <a href="/contact">Contacto</a>
        </div>
        <button className={styles.downloadBtn}>Download CV</button>
      </nav>

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
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayContent}>
                    {project.category === 'web' && (
                      <div className={styles.carGrid}>
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className={styles.carItem}>
                            <div className={styles.carImage}></div>
                            <div className={styles.carInfo}>
                              <div className={styles.carName}></div>
                              <div className={styles.carPrice}></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {project.category === 'education' && (
                      <div className={styles.educationContent}>
                        <div className={styles.educationHeader}>
                          <h3>As inscrições para 2035 estão abertas</h3>
                        </div>
                        <div className={styles.studentImages}>
                          <div className={styles.studentGroup}></div>
                        </div>
                      </div>
                    )}
                    {project.category === 'blog' && (
                      <div className={styles.blogContent}>
                        <div className={styles.blogHeader}>
                          <span>TUDO É PESSOAL, INCLUSIVE ESTE BLOG</span>
                        </div>
                        <h2 className={styles.blogTitle}>Trem do Pensar</h2>
                        <div className={styles.blogMeta}>
                          <div className={styles.blogDate}></div>
                          <div className={styles.blogAuthor}></div>
                        </div>
                      </div>
                    )}
                    {project.category === 'dashboard' && (
                      <div className={styles.dashboardContent}>
                        <div className={styles.dashboardHeader}>
                          <h3>Painel Administrativo</h3>
                        </div>
                        <div className={styles.dashboardCharts}>
                          <div className={styles.chart}></div>
                          <div className={styles.statsGrid}>
                            <div className={styles.stat}></div>
                            <div className={styles.stat}></div>
                            <div className={styles.stat}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
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
                
                <button className={styles.viewProjectBtn}>Ver Projecto</button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </motion.div>
  );
};

export default Project;