import {FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube} from "react-icons/fa6";
import {FaMailBulk} from "react-icons/fa";
import imageURL from "../assets/2669099_14624.jpg";

const contactMedium = [
    {
        icon: <FaMailBulk/>,
        link: "mailto:techie.myil@gmail.com"
    },
    {
        icon: <FaWhatsapp/>,
        link: "https://wa.me/9489506513"
    },
    {
        icon: <FaLinkedinIn/>,
        link: "https://www.linkedin.com/in/myilvaganan/"
    },
    {
        icon: <FaYoutube/>,
        link: "https://www.youtube.com/@TechieMyil"
    },
    {
        icon: <FaInstagram/>,
        link: "https://www.instagram.com/techie_myil/"
    }
]

export const Contact = () => {
    return (
        <div id="contact" className="half-layout d-flex flex-column justify-content-center align-items-center bg-dark-green position-relative">
            <h1 className="pr-text fw-bolder display-4">Myil<span className="highlight">vaganan</span></h1>
            <p className="pr-text fw-light">Chamundeshwari Nagar, Devarachikkana Halli,</p>
            <p className="pr-text fw-light">Begur-Hobli Road, Bangalore - 560068</p>
            <div className="d-flex justify-content-center align-items-center">
                {
                    contactMedium.map((item, index) => (
                    <div key={index} className="pr-text display-5 p-2">
                        <a className="text-decoration-none pr-text" href={item.link} target="_blank">{item.icon}</a>
                    </div>
                ))
                }
            </div>
            <img
                src={imageURL}
                alt="Background"
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
            />
        </div>
    );
};
