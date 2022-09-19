import {useState, useEffect} from "react"
import './css/navbar.css'
import '../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./assets/img/logo.svg"
import navIcon1 from "./assets/img/nav-icon1.svg"
import navIcon2 from "./assets/img/nav-icon2.svg"
import navIcon3 from "./assets/img/nav-icon3.svg"


const NavBar = () => {
    const [activeLink, setActiveLink] = useState("Home")
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        function onScroll() {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    function onUpdateActiveLink(value) {
        setActiveLink(value)
    }

    return (
        <Navbar bg="light" expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={''} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar__toggler--icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me__auto">
                        <Nav.Link className={activeLink === 'home' ? "active navbar__link" : "navbar__link"} href="#home" onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
                        <Nav.Link className={activeLink === 'skills' ? "active navbar__link" : "navbar__link"} href="#link" onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
                        <Nav.Link className={activeLink === 'projects' ? "active navbar__link" : "navbar__link"} href="#projects" onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <span className="navbar__text">
                            <div className="social__icon">
                                <a href="#"><img src={navIcon1} alt="" /></a>
                                <a href="#"><img src={navIcon2} alt="" /></a>
                                <a href="#"><img src={navIcon3} alt="" /></a>
                            </div>
                            <button className="btn" onClick={() => console.log("button pressed")}>Let's Connect!</button>
                        </span>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;