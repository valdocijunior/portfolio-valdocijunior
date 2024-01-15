import contacts from "./data";
import "./contact.css";

const Contact = () => {
    return (
        <section id="contact">
            <h2>Entre em contato!</h2>
            <p>Envie uma mensagem através de qualquer um dos Links.</p>
            <div className="container contact_container">
                {contacts.map((contact) => (
                    <a
                        key={contact.id}
                        href={contact.link}
                        target="_black"
                        rel="noreferrer noopener"
                    >
                        {contact.icon}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Contact;
