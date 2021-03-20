/* jshint esversion: 9 */

import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Technologies from './Technologies/Technologies';
import Personal from './Personal/Personal';
import Certifications from './Certifications/Certifications';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  projectsData,
  technologyData,
  languageData,
  contactData,
  footerData,
  personalData,
  certificationsData
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [personal, setPersonal] = useState({});
  const [technologies, setTechnologies] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setPersonal({...personalData});
    setTechnologies([...technologyData]);
    setLanguages([...languageData]);
    setCertifications([...certificationsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, personal, projects, technologies, languages, certifications, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Certifications />
      <Personal />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
