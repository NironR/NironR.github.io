import React from 'react';
import {useState, useEffect} from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "./assets/img/header-img.svg"
import './css/banner.css'

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [IsDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState("")
    const [delta, setDelta] = useState("")
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"]
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
        let updatedText = IsDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText)

        if (IsDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!IsDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (IsDeleting && updatedText === "") {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <section className="banner" id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my E-Portfolio
                        </span>
                        <h1>{"Hi I'm Ryan Norin. A "}
                            <span className='wrap'>
                                {text}
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
