import {Container, Nav, Navbar} from "react-bootstrap";
import {ButtonWrapper} from "./ButtonWrapper.tsx";

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
    return (
        <Navbar expand="lg" style={{padding: "10px"}}>
            <Container>
                <Navbar.Brand href="#" style={{color: "aliceblue", fontWeight: "bold"}}>
                    TECHIE <span style={{color: "#00bf63"}}>MYIL</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="highlight bg-highlight"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-center w-100">
                        {
                            navLists.map((navList) => (
                                <Nav.Link className="hover-underline-animation center" key={navList.link}
                                          href={navList.link} style={{
                                    color: "aliceblue",
                                    marginRight: "15px",
                                    fontWeight: "300"
                                }}>{navList.name}</Nav.Link>
                            ))
                        }
                    </Nav>
                    <a href="#contact" style={{textDecoration: "none"}}><ButtonWrapper text="Contact"/></a>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;