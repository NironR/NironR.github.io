import {useState, useEffect} from "react"
import './css/navbar.css'
import '../App.css'
import {Navbar, Nav, Container} from "react-bootstrap"
import logo from "./assets/img/logo.png"
import navIcon1 from "./assets/img/nav-icon1.svg"
import navIcon2 from "./assets/img/github.svg"
import navIcon3 from "./assets/img/file-regular.svg"
import { HashLink } from "react-router-hash-link"
import { BrowserRouter as Router} from "react-router-dom"


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
      <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/ryan-norin-4970a5249/" target="_blank" ><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/NironR" target="_blank"><img className="navIcon" src={navIcon2} alt="" /></a>
                <a href="https://docs.google.com/document/d/1r8rGz8Nzbro6F5Zwm4RsV8mo5_gEUgCt/edit" target="_"><img className="navIcon" src={navIcon3} alt="" /></a>
              </div>
                <HashLink to="#connect">
                <button className="vvd"><span>Let’s Connect</span></button>
                </HashLink>   
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>     
      </Router>
    );
}

export default NavBar;