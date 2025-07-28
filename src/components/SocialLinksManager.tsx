import "./SocialLinksManager.css";
import whatsappIcon from "./icon/whatsapp.png";
import facebookIcon from "./icon/facebook.png";
import instagramIcon from "./icon/instagram.png";
import githubIcon from "./icon/github.png";
import linkedinIcon from "./icon/linkedin.png";

type SocialLink = {
    name: string;
    url: string;
    icon: string;
};

const links: SocialLink[] = [
    {
        name: "WhatsApp",
        url: "https://wa.me/qr/CNGJMTSMDYD2K1",
        icon: whatsappIcon,
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/gjocafaizal.assane",
        icon: facebookIcon,
    },
    {
        name: "Instagram",
        url: "https://instagram.com/mr_joca",
        icon: instagramIcon,
    },
    {
        name: "Linkedin",
        url: "www.linkedin.com/in/jorge-hermenegildo-massango-0659b9313",
        icon: linkedinIcon,
    },
    {
        name: "GitHub",
        url: "github.com/JorgeMassango",
        icon: githubIcon,
    },
];

const SocialLinksManager = () => {
    return (
        <div className="social-links-container">
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                >
                    <img
                        src={link.icon}
                        alt={link.name}
                        className="social-link-icon"
                    />
                </a>
            ))}
        </div>
    );
};

export default SocialLinksManager;
