import React, { PropTypes } from 'react';
import ProjectPage from '../components/ProjectPage.jsx';

/**
 * AcePage Component
 * @param  {String} props.className A CSS hook for styling the project page.
 */
const AcePage = () => (
  <ProjectPage project="ace">
    <h3>Core Technologies</h3>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>jQuery</li>
      <li>Velocity.js</li>
    </ul>

    <h3>Project Overview</h3>
    <p>
      This project was a redesign concept for the <a title="ace driving school" target="_blank" href="http://www.acedrivingschool.com.au/">Ace Driving School</a> website. The goal of the project was to facilitate online bookings for the company, with the aim of reducing administrative overhead for servicing their clients.
    </p>
    <p>
      The redesign focuses on cleaning up the user interface, making it fully responsive for mobile users, and improving the information architecture so as to better align with user goals.
    </p>
    <p>
      The site is architected as a simple static website using HTML/jQuery/Velocity.js.
    </p>
    <p>
      The project was completed as part of a university project.
    </p>
  </ProjectPage>
);

AcePage.propTypes = {
  className: PropTypes.string
};

export default AcePage;
