import "./portfolio.css";
import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import data from "./data";
import { useState } from "react";

const Portfolio = () => {
    const [projects, setProjects] = useState(data);

    const categories = data.map((item) => item.category);
    const uniqueCategories = ["all", ...new Set(categories)];

    const filterProjectsHandler = (category) => {
        if (category === "all") {
            setProjects(data);
            return;
        }
        const filterProjects = data.filter(
            (project) => project.category === category
        );
        setProjects(filterProjects);
    };

    return (
        <section id="portfolio">
            <h2>Projetos Recentes</h2>
            <p>
                Aqui você encontrará a lista com meus últimos projetos,
                independente da complexidade. <br />
                <i>
                    <small className="portfolio_small">
                        WIP: Integração da API pública do GitHub para mapear de
                        forma dinâmica os projetos "commitados" no Git!
                    </small>
                </i>
            </p>
            <div className="container portfolio_container">
                <ProjectsCategories
                    categories={uniqueCategories}
                    onFilterProjects={filterProjectsHandler}
                />
                <Projects projects={projects} />
            </div>
        </section>
    );
};

export default Portfolio;
