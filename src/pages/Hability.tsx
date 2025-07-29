import './Hability.css';
import {
  FcDoughnutChart,
  FcGraduationCap,
  FcIdea,
  FcCollaboration,
  FcApproval,
  FcCommandLine,
  FcMenu
} from "react-icons/fc";
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import JavaIcon from '../assets/skills/Java.png';
import CIcon from '../assets/skills/C.png';
import CppIcon from '../assets/skills/Cpp.png';
import CSharpIcon from '../assets/skills/CSharp.png';
import TypeScriptIcon from '../assets/skills/TypeScript.png';
import JavaScriptIcon from '../assets/skills/JavaScript.png';
import PHPIcon from '../assets/skills/PHP.png';
import JSONIcon from '../assets/skills/JSON.png';
import NextjsIcon from '../assets/skills/Next.js.png';
import NodejsIcon from '../assets/skills/Node.js.png';
import NestjsIcon from '../assets/skills/Nest.js.png';
import ReactIcon from '../assets/skills/React.png';
import PostmanIcon from '../assets/skills/Postman.png';
import GitIcon from '../assets/skills/Git.png';
import PostgreSQLIcon from '../assets/skills/PostgresSQL.png';
import SQLDevIcon from '../assets/skills/SQL_Developer.png';
import MySQLIcon from '../assets/skills/MySQL.png';
import MSSQLIcon from '../assets/skills/MicrosoftSQLServer.png';
import CSS3Icon from '../assets/skills/CSS3.png';
import HTML5Icon from '../assets/skills/HTML5.png';
import TailwindIcon from '../assets/skills/Tailwind.png';
import FigmaIcon from '../assets/skills/Figma.png';
import ViteIcon from '../assets/skills/Vite.js.png';
import CanvaIcon from '../assets/skills/Canva.png';

const skills = [
  { name: 'Java SE', icon: JavaIcon },
  { name: 'C', icon: CIcon },
  { name: 'C ++', icon: CppIcon },
  { name: 'C Sharp', icon: CSharpIcon },
  { name: 'TypeScript', icon: TypeScriptIcon },
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'Hypertext Preprocessor', icon: PHPIcon },
  { name: 'JSON', icon: JSONIcon },
  { name: 'Next.js', icon: NextjsIcon },
  { name: 'Node.js', icon: NodejsIcon },
  { name: 'Nest.js', icon: NestjsIcon },
  { name: 'React', icon: ReactIcon },
  { name: 'Postman', icon: PostmanIcon },
  { name: 'Git', icon: GitIcon },
  { name: 'PostgreSQL', icon: PostgreSQLIcon },
  { name: 'SLQ Developer', icon: SQLDevIcon },
  { name: 'MYSQL', icon: MySQLIcon },
  { name: 'Microsoft SQL Server', icon: MSSQLIcon },
  { name: 'CSS-3', icon: CSS3Icon },
  { name: 'HTML-5', icon: HTML5Icon },
  { name: 'Tailwind CSS', icon: TailwindIcon },
  { name: 'FIGMA', icon: FigmaIcon },
  { name: 'Vite.js', icon: ViteIcon },
  { name: 'Canva', icon: CanvaIcon },
];

export default function Hability() {
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
    <motion.section
      className="hability-page"
      id="habilidades"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
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
            <span className="highlight"><FcDoughnutChart /></span> Habilidades
          </h2>
        </div>

        <nav className={`right ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/project">Projetos</a></li>
            <li><a href="/sobre">Sobre mim</a></li>
            <li><a href="/contact">Contacto</a></li>
            <li><a href="/JocaCv.pdf" download className="cv-btn">Download CV</a></li>
          </ul>
        </nav>
      </header>


      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>

      <div className="additional-skills-section">
        <h3>Qualificações</h3>
        <div className="additional-content">
          <div className="qualification-grid">
            <div className="qualification-item">
              <FcGraduationCap className="qualification-icon" />
              <h4>Educação</h4>
              <p>Bachelor's Degree in Computer Science</p>
            </div>
            <div className="qualification-item">
              <FcIdea className="qualification-icon" />
              <h4>Problem Solving</h4>
              <p>Analytical thinking and creative solutions</p>
            </div>
            <div className="qualification-item">
              <FcCollaboration className="qualification-icon" />
              <h4>Team Collaboration</h4>
              <p>Effective communication and teamwork</p>
            </div>
            <div className="qualification-item">
              <FcApproval className="qualification-icon" />
              <h4>Certifications</h4>
              <p>AWS Certified Developer Associate</p>
            </div>
            <div className="qualification-item">
              <FcCommandLine className="qualification-icon" />
              <h4>DevOps</h4>
              <p>CI/CD pipelines and deployment automation</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}