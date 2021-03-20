/*jshint esversion: 9 */

import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Subtitle from '../Title/Subtitle';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const Personal = () => {
  const { personal } = useContext(PortfolioContext);
  const { img, hobbies } = personal;

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
    <section id="personal">
      <Container>
        <Title title="A little about me" />
        <Row className="personal-wrapper">
          <Col md={12} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="personal-wrapper__info">
                {hobbies ?
                  hobbies.map((hobby) => {
                    return (
                      <div>
                        <Subtitle title={hobby.name} />
                        <p className="personal-wrapper__info-text">
                          {hobby.description}
                        </p>
                      </div>
                    );
                  })
                  : null
                }
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="personal-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <p className="personal-wrapper__image-description">
               Me and my teammates traveling to Oklahoma for an MMA Training Camp

               (I'm third from the right)
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Personal;
