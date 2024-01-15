import faqs from "./data";
import FAQ from "./FAQ";
import "./faqs.css";

const FAQs = () => {
    return (
        <section id="faqs">
            <h2>FAQ</h2>
            <p>
                Aqui você encontra alguma das perguntas mais frequentes que eu
                recebo! Click para aparecer a resposta, e se você tiver mais
                alguma dúvida, sinta-se livre para me enviar uma mensagem
                através da seção de contato!
            </p>
            <div className="container faqs_container">
                {faqs.map((faq) => (
                    <FAQ key={faq.id} faq={faq} />
                ))}
            </div>
        </section>
    );
};

export default FAQs;
