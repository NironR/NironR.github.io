import React from 'react';
import {useState, useEffect} from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "./assets/img/header-img.svg"

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [IsDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState("")
    const [delta, setDelta] = useState("")
    const toRotate = ["web Developer", "Web Designer", "UI/UX Designer"]
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker)}
    }, [text])

    function tick() {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i]
    }

    return (
        <section className="banner" id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my E-Portfolio
                        </span>
                        <h1>{"Hi I'm Ryan Norin. "}
                            <span className='wrap'>
                                A Web Developer.
                            </span>
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, eveniet, maiores et culpa suscipit nam vero iure odio nesciunt error incidunt eos? Cupiditate, nobis consequuntur doloribus facere autem voluptatibus reiciendis?</p>
                        <button onClick={() => console.log("Button")}>Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;
