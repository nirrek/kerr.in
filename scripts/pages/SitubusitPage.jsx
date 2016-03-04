import React, { PropTypes } from 'react';
import ProjectPage from '../components/ProjectPage.jsx';

/**
 * SitubusitPage Component
 * @param  {String} props.className A CSS hook for styling the project page.
 */
const SitubusitPage = () => (
  <ProjectPage project="situbusit">
    <h3>Core Technologies</h3>
    <ul>
      <li>Jade</li>
      <li>Sass</li>
      <li>jQuery</li>
      <li>Gulp</li>
    </ul>

    <h3>Project Overview</h3>
    <p>
      This project was a design concept for a hypothetical puppy training school, Situbusit. The goal of the project was to give the school an online presence that allowed users to find information on what courses the company provided. The site also was designed to allow users to see current availability of positions in the courses, and to be able to make bookings through the online interface.
    </p>
    <p>
      The site was designed to be fully responsive and is developed using Jade/Sass/jQuery with Gulp as the build tool.
    </p>
    <p>
      The design was completed as part of a university project.
    </p>
  </ProjectPage>
);

SitubusitPage.propTypes = {
  className: PropTypes.string
};

export default SitubusitPage;
