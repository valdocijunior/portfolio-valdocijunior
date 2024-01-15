import HeaderImage from "../../assets/header.jpg";
import data from "./data.js";
import "./header.css";

const Header = () => {
    return (
        <header id="header">
            <div className="container header_container">
                <div className="header_profile">
                    <img src={HeaderImage} alt="Header Portrait" />
                </div>
                <h3>Valdoci Moraes Junior</h3>
                <p>
                    Desenvolvedor Full Stack que encara qualquer linguagem de
                    programação. Atualmente cursando Sistemas de Informação e
                    possuo + de 500 horas de cursos realizadas na área da
                    tecnologia!
                </p>
                <div className="header_cta">
                    <a href="#contact" className="btn primary">
                        Fale comigo!
                    </a>
                    <a href="#portfolio" className="btn light">
                        Meus projetos
                    </a>
                </div>
                <div className="header_socials">
                    {data.map((item) => (
                        <a
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
