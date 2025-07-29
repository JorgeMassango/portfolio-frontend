import "./Contact.css";
import { useState, useEffect, useRef } from "react";
import {
    FcMenu,
    FcDoughnutChart,
} from "react-icons/fc";
import { motion } from 'framer-motion';

import whatsappIcon from "../components/icon/whatsapp.png";
import facebookIcon from "../components/icon/facebook.png";
import instagramIcon from "../components/icon/instagram.png";
import githubIcon from "../components/icon/github.png";
import linkedinIcon from "../components/icon/linkedin.png";

const links = [
    {
        name: "WhatsApp",
        url: "https://wa.me/qr/CNGJMTSMDYD2K1",
        icon: whatsappIcon,
    },
    {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/jorge-hermenegildo-massango-0659b9313",
        icon: linkedinIcon,
    },
    {
        name: "Instagram",
        url: "https://instagram.com/mr_joca",
        icon: instagramIcon,
    },
    {
        name: "GitHub",
        url: "https://github.com/JorgeMassango",
        icon: githubIcon,
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/gjocafaizal.assane",
        icon: facebookIcon,
    },
];

export default function Contact() {
    const [menuOpen, setMenuOpen] = useState(false);
    const touchStartX = useRef(0);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !message) {
            alert("Por favor preencha todos os campos.");
            return;
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                alert("Mensagem enviada com sucesso!");
                setName("");
                setEmail("");
                setMessage("");
            } else {
                alert("Erro ao enviar a mensagem. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro:", error);
            alert("Erro na comunicação com o servidor.");
        }
    };

    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            touchStartX.current = e.touches[0].clientX;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            const touchEndX = e.changedTouches[0].clientX;
            const deltaX = touchStartX.current - touchEndX;
            if (menuOpen && deltaX < -50) setMenuOpen(false);
        };

        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchend", handleTouchEnd);
        return () => {
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [menuOpen]);

    return (
        <motion.div
            className="contact-page"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
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
                        <span className="highlight"><FcDoughnutChart /></span> Contacto
                    </h2>
                </div>

                <nav className={`right ${menuOpen ? "open" : ""}`}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/project">Projetos</a></li>
                        <li><a href="/habilidades">Habilidades</a></li>
                        <li><a href="/sobre">Sobre mim</a></li>
                        <li><a href="/JocaCv.pdf" download className="cv-btn">Download CV</a></li>
                    </ul>
                </nav>
            </header>

            <main className="contact-content">
                <div className="left-side">
                    <h1>Contacte-Me</h1>
                    <h3>Telefone</h3>
                    <p>+258 84 533 46 98</p>
                    <p>+258 87 688 66 21</p>

                    <div className="social-links">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={link.icon} alt={link.name} />
                                <span>{link.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <form className="right-side" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label>Nome</label>
                        <input
                            type="text"
                            placeholder="Nome Completo"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label>Mensagem</label>
                        <textarea
                            placeholder="Escrever a mensagem"
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="input-group">
                        <button type="submit" className="submit-button">Enviar</button>
                    </div>
                </form>
            </main>
        </motion.div>
    );
}
