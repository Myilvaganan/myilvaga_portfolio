import {useState} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";

const navLists = [
    {
        name: "Home",
        link: "#home"
    },
    {
        name: "About",
        link: "#about"
    },
    {
        name: "Skills",
        link: "#skills"
    },
    {
        name: "Services",
        link: "#services"
    },
];

function Header() {
    const [isShining, setIsShining] = useState(false);

    const handleClick = () => {
        setIsShining(true);
        setTimeout(() => setIsShining(false), 600); // Reset after animation
    };

    return (
        <Navbar expand="lg" style={{padding: "10px" }}>
            <Container>
                <Navbar.Brand href="#" style={{ color: "aliceblue", fontWeight: "bold" }}>
                    TECHIE <span style={{ color: "#00bf63" }}>MYIL</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="highlight bg-highlight"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-center w-100">
                        {
                            navLists.map((navList) => (
                                <Nav.Link className="hover-underline-animation center" key={navList.link} href={navList.link} style={{ color: "aliceblue", marginRight: "15px", fontWeight: "300" }}>{navList.name}</Nav.Link>
                            ))
                        }
                    </Nav>
                    <Button id="contact-button"     className={`contact-button ${isShining ? "shine" : ""}`}
                            onClick={handleClick}>
                        <strong>Contact</strong>
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;