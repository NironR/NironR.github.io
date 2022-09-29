import React from 'react';
import "./css/projects.css"
import projImg1 from "./assets/img/project-img1.png"
import projImg2 from "./assets/img/Untitled-2.png"
import projImg3 from "./assets/img/Untitled-3.png"
import projImg4 from "./assets/img/Untitled-4.png"
import projImg5 from "./assets/img/Untitled-5.png"
import projImg6 from "./assets/img/Untitled-6.png"
import {Container, Row, Col, Nav, Tab} from "react-bootstrap"
import ProjectCard from "./ProjectCard.jsx"
import 'animate.css'
import colorSharp2 from "./assets/img/color-sharp2.png"
import TrackVisibility from 'react-on-screen';

const Projects = () => {

    const projects = [
      {
        title: "Valor.GG",
        description: "Data Tracking Website",
        imgUrl: projImg1,
      },
      {
        title: "Grand Restuarant",
        description: "Marketing Website",
        imgUrl: projImg2,
      },
      {
        title: "Sebo",
        description: "Marketing Web Agency",
        imgUrl: projImg3,
      },
      {
        title: "Sland",
        description: "Marketing Web Agency",
        imgUrl: projImg4,
      },
      {
        title: "Barbercrop",
        description: "Marketing Website",
        imgUrl: projImg5,
      },
      {
        title: "Business Startup",
        description: "E-Commerce Library Website",
        imgUrl: projImg6,
      },
    ];
  
    return (
      <section className="project" id="project">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounce": ""}>
                  <h2>Projects</h2>
                  <p>Below are projects that I've created for clients, personal contacts or myself to better improve my skills. Take a look below.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
    )
  }

  export default Projects
  