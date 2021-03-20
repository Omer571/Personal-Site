/* jshint esversion: 9 */

import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Subtitle from '../Title/Subtitle';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const Technologies = () => {
  const { technologies, languages } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="technologies">
      <Container>
        <Row>
          <p className="technologies-wrapper__info">
            These are all technologies I have used before but doesn't
            mean I am currently fluent in them. I love learning and am always learning something new.
            And every new thing I learn makes learning the next thing that much easier.
            However, learning any of these technologies again would be a simple thing but current
            fluency depends on the project I'm working on. Such as my "who-is-walking-the-dog" I am
            currently working on using typescript, firestore, and react native.
          </p>
        </Row>
        <Row className="technologies-wrapper">
          <Col md={6} sm={12}>
            <Subtitle title="Technologies" align="center"/>
            <Row className="technologies-wrapper">
              <Col md={12} sm={12}>
                <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                  <ul className="technologies-wrapper__info">
                    {technologies.map((technology) => {
                      return <li className="technologies-wrapper__info-text">{technology}</li>;
                    })}
                  </ul>
                </Fade>
              </Col>
            </Row>
          </Col>
          <Col md={6} sm={12}>
            <Subtitle title="Languages" align="center"/>
            <Row className="technologies-wrapper">
              <Col md={12} sm={12}>
                <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                  <ul className="technologies-wrapper__info">
                    {languages.map((language) => {
                      return <li className="technologies-wrapper__info-text">{language}</li>;
                    })}
                  </ul>
                </Fade>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Technologies;
