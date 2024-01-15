import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/CV.pdf";
import { HiDownload } from "react-icons/hi";
import Card from "../../components/Card";
import data from "./data";
import "./about.css";

const About = () => {
    return (
        <section id="about">
            <div className="container about_container">
                <div className="about_left">
                    <div className="about_portrait">
                        <img src={AboutImage} alt="About Image" />
                    </div>
                </div>
                <div className="about_right">
                    <h2>Sobre mim</h2>
                    <div className="about_cards">
                        {data.map((item) => (
                            <Card key={item.id} className="about_card">
                                <span className="about_card-icon">
                                    {item.icon}
                                </span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))}
                    </div>
                    <p>
                        Sou um Dev Full Stack que encaro qualquer linguagem de
                        programação. Sigo o lema de: "Não importa a stack, o
                        importante é pagar os boletos!" 😂
                    </p>
                    <p>
                        Apesar disso, minhas principais skills estão em:
                        <ul>
                            <li>C#;</li>
                            <li>Python;</li>
                            <li>JavaScript;</li>
                            <li>REACT;</li>
                            <li>Oracle SQL.</li>
                        </ul>
                    </p>
                    <p>
                        Em 2022 resolvi ingressar definitivamente na área da
                        tecnologia, onde iniciei o curso de Análise e
                        Desenvolvimento de Sistemas! Após analisar e
                        providenciar os aproveitamentos de disciplinas, efetuei
                        a transferência para Sistemas de Informação.
                    </p>
                    <p>
                        Estudo diariamente, pois na área da tecnologia, é
                        totalmente necessário que o aprendizado seja constante.
                    </p>
                    <a href={CV} download className="btn primary">
                        Baixe meu Currículo! <HiDownload />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
