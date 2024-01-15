import Card from "../../components/Card";

const Project = ({ project }) => {
    return (
        <Card className="portfolio_project">
            <div className="portfolio_project-image">
                <img src={project.image} alt="Project Image Portfolio" />
            </div>
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
            <div className="portfolio_project-cta">
                <a
                    href={project.demo}
                    className="btn sm"
                    target="_blank"
                    rel="noopener nooreferrer"
                >
                    Link
                </a>
                <a
                    href={project.github}
                    className="btn sm primary"
                    target="_blank"
                    rel="noopener nooreferrer"
                >
                    GitHub
                </a>
            </div>
        </Card>
    );
};

export default Project;
