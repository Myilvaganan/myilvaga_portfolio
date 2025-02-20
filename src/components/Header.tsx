import { Container, Nav, Navbar } from "react-bootstrap";
import { ButtonWrapper } from "./ButtonWrapper.tsx";
import logo from "../assets/MYILLOGO.svg";
import { motion } from "framer-motion";

const navLists = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Services",
    link: "#services",
  },
];

function Header() {
  return (
    <Navbar expand="lg" style={{ padding: "10px" }}>
      <Container>
        <Navbar.Brand
          className="d-flex justify-content-center align-items-center"
          href="#"
          style={{ color: "aliceblue", fontWeight: "bold" }}
        >
          <motion.img
            src={logo}
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-top bg-light rounded-5 p-2 m-2"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ boxShadow: "0px 0px 20px #c1ff72" }}
            transition={{ type: "spring", stiffness: 120, duration: 0.3 }}
          />{" "}
          TECHIE <span style={{ color: "#00bf63" }}>MYIL</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="highlight bg-highlight"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center w-100">
            {navLists.map((navList) => (
              <Nav.Link
                className="hover-underline-animation center"
                key={navList.link}
                href={navList.link}
                style={{
                  color: "aliceblue",
                  marginRight: "15px",
                  fontWeight: "300",
                }}
              >
                {navList.name}
              </Nav.Link>
            ))}
          </Nav>
          <a href="#contact" style={{ textDecoration: "none" }}>
            <ButtonWrapper text="Contact" onClickHandler={() => {}} />
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
