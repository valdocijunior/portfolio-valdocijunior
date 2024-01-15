import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineDribbble } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";

export const links = [
    { id: 1, link: "#", title: "Home" },
    { id: 2, link: "#about", title: "Sobre Mim" },
    { id: 3, link: "#services", title: "Serviços" },
    { id: 4, link: "#portfolio", title: "Portfolio" },
    { id: 5, link: "#contact", title: "Contato" },
];

export const socials = [
    {
        id: 1,
        icon: <RiLinkedinBoxFill />,
        link: "https://www.linkedin.com/in/valdocijunior",
    },
    { id: 2, link: "https://github.com/valdocijunior", icon: <AiFillGithub /> },
];
