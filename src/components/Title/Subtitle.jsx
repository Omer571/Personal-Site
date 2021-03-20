/*jshint esversion: 6 */

import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const Subtitle = ({ title, align }) => (
  <div style={{ textAlign: align || "center"}}>
    <Fade bottom duration={1000} delay={300} distance="0px">
      <h1 className="subtitle">{title}</h1>
    </Fade>
  </div>
);

Subtitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Subtitle;
