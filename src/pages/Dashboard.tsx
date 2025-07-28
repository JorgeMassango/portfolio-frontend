import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Dashboard.css';
import SocialLinksManager from '../components/SocialLinksManager';

const originalCarouselImages = [
    '/projecto1.png',
    '/projecto2.png',
    '/projecto3.png',
    '/projecto4.png',
    '/projecto5.png',
];

function shuffleArray(array: string[]) {
    return array
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

const Dashboard = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [carouselImages, setCarouselImages] = useState<string[]>([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        setCarouselImages(shuffleArray(originalCarouselImages));
    }, []);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        let scrollAmount = 0;

        const step = () => {
            if (!carousel) return;

            carousel.scrollLeft += 1;
            scrollAmount += 1;

            if (scrollAmount >= carousel.scrollWidth / 2) {
                carousel.scrollLeft = 0;
                scrollAmount = 0;
            }

            requestAnimationFrame(step);
        };

        const animation = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animation);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (
                isSidebarOpen &&
                !target.closest('.mobile-sidebar') &&
                !target.closest('.hamburger-btn')
            ) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isSidebarOpen]);

    const handleLinkClick = () => setIsSidebarOpen(false);

    return (
        <motion.div
            className="dashboard-container"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 2.0 }}
        >
            {!isSidebarOpen && (
                <button className="hamburger-btn" onClick={() => setIsSidebarOpen(true)}>
                    ☰
                </button>
            )}

            <div className="dashboard-left">
                <img src="/joca.png" alt="Perfil" className="profile-img" />
                <h1 className="profile-name">Jorge Hermenegildo Massango</h1>
                <p className="profile-desc">
                    Fullstack Developer | Product Builder | Tech Strategist
                </p>
                <p className="profile-des">
                    Fullstack Developer focado em performance, escalabilidade e experiência do usuário.
                    Product Builder com mentalidade de MVP, dados e entregas reais.
                    Tech Strategist que conecta visão de negócio à arquitetura de software moderna.
                </p>
                <p className="profile-de">
                    "Não entrego só código. Entrego soluções pensadas, produtos reais e visão de futuro."
                    <span className="profile-d"> Joca Massango</span>
                </p>
                <button className="contact-btn">Entrar em contacto</button>
            </div>

            <div className="dashboard-center" id="projetos">
            </div>

            <div className="dashboard-right">
                {isSidebarOpen && (
                    <div className="mobile-sidebar">
                        <a href="/project" onClick={handleLinkClick}>Projetos</a>
                        <a href="/habilidades" onClick={handleLinkClick}>Habilidades</a>
                        <a href="/sobre" onClick={handleLinkClick}>Sobre Mim</a>
                        <a href="/contact" onClick={handleLinkClick}>Contacto</a>
                        <a href="/cv.pdf" download className="cv-btn" onClick={handleLinkClick}>
                            Download CV
                        </a>
                    </div>
                )}

                <div className="top-menu">
                    <nav className="menu">
                        <a href="/project">Projetos</a>
                        <a href="/habilidades" onClick={handleLinkClick}>Habilidades</a>
                        <a href="/sobre">Sobre Mim</a>
                        <a href="/contact">Contacto</a>
                    </nav>
                    <a href="/cv.pdf" download className="cv-btn">
                        Download CV
                    </a>
                </div>

                <div className="carousel" ref={carouselRef}>
                    {carouselImages.map((img, idx) => (
                        <img
                            src={img}
                            alt={`Projecto ${idx + 1}`}
                            key={idx}
                            className="carousel-img"
                        />
                    ))}
                </div>

                <div className="social-links">
                    <SocialLinksManager />
                </div>
            </div>
        </motion.div>
    );
};

export default Dashboard;
