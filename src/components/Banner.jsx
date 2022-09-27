import React from 'react';
import {useState, useEffect} from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "./assets/img/kisspng-astronaut-drawing-royalty-free-astronauta-ni-ntilde-o-5b4fbbed233a42.2318924415319521091443.png"
import './css/banner.css'
import 'animate.css'
import TrackVisibility from 'react-on-screen';

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
        <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Ryan. A`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                    <p>I'm a Freelance Front End Deveoper who specialises in responsive and efficient web applications using user-friendly interfaces, making sure that every experience is a genuine one.</p>
                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img"/>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default Banner;
