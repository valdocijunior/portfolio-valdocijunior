import { HiOutlineMail } from "react-icons/hi";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

const data = [
    { id: 1, icon: <HiOutlineMail />, link: "mailto:valdoci.jr@gmail.com" },
    {
        id: 2,
        icon: <RiLinkedinBoxFill />,
        link: "https://www.linkedin.com/in/valdocijunior",
    },
    { id: 3, icon: <FaWhatsapp />, link: "https://wa.me/+5551981262877" },
];

// alternative whatsApp link
// https://wa.me/yournumber
// https://api.whatsapp.com/send/?phone=%2B233557097546

export default data;
