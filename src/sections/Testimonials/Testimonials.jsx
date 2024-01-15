import Card from "../../components/Card";
import data from "./data";
import "./testimonials.css";

const Testimonials = () => {
    return (
        <section id="services">
            <h2>O que meus clientes dizem sobre mim?</h2>
            <p>Work in progress...</p>
            <div className="container services__container">
                {data.map((item) => (
                    <Card key={item.id} className="service light">
                        <div className="service__icon">WIP</div>
                        <div className="service__details">
                            <h4>WIP</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Et sit vitae eligendi possimus
                                harum officia obcaecati consequuntur accusamus
                                provident, reprehenderit ipsam eaque corrupti
                                nulla ipsum cumque eum molestias ducimus fugiat?
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
