import React from 'react';
import {Container, Row, Col} from "react-bootstrap"
import Carousel from "react-multi-carousel";
import "./css/skills.css"
import "react-multi-carousel/lib/styles.css";
import meter1 from "../components/assets/img/meter1.svg"
import meter2 from "../components/assets/img/meter2.svg"
import meter3 from "../components/assets/img/meter3.svg"
import colorSharp from "../components/assets/img/color-sharp.png"





const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section id="skills" className="skill">
            <Container>
                <Row>
                    <Col>
                    <div className="skill__bx">
                        <h2>
                            Skills
                        </h2>
                        <p>These are my current Technology Stacks</p>
                        <Carousel className='skill__slider' responsive={responsive} infinite={true}>
                            <div className="item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png" alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png" alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png" alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Touchicon-180.png" alt="Image" />
                                <h5>Firebase</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt="background" className="background__image--left" />
        </section>
    )
}

export default Skills;
