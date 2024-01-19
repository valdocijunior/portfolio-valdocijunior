import React from "react";
import { Navbar } from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import FAQs from "./sections/faqs/FAQs";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import Testimonials from "./sections/Testimonials/Testimonials";
import Modal from "./components/Modal";
import Theme from "./theme/Theme";

const App = () => {
    return (
        <main>
            <Navbar />
            <Header />
            <About />
            <Services />
            <Portfolio />
            <Testimonials />
            <FAQs />
            <Contact />
            <Footer />
            <Theme />
            {/* <FloatingNav /> */}
        </main>
    );
};

export default App;
