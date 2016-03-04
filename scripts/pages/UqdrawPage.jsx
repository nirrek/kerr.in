import React, { PropTypes } from 'react';
import ProjectPage from '../components/ProjectPage.jsx';

/**
 * UqdrawPage Component
 * @param  {String} props.className A CSS hook for styling the project page.
 */
const UqdrawPage = () => (
  <ProjectPage project="uqdraw">
    <h3>Core Technologies</h3>
    <ul>
      <li>React/Flux</li>
      <li>Firebase</li>
      <li>Canvas</li>
      <li>ES2015 (via Babel)</li>
      <li>Webpack</li>
    </ul>

    <h3>Project Overview</h3>
    <p>UQDraw is a web app for facilitating active-learning during lectures. The app allows a lecturer to pose questions to the audience and gather responses in real time. Students use the web app on their phone/tablets to draw their responses to the question and submit them.</p>

    <p>The project was developed for the eLearning team at the University of Queensland after they solicited the development proof-of-concept prototypes for the app.</p>

    <p>The app is architected as a React/Flux app on the client, and uses Firebase as the persistence layer. The drawing tool is built using HTML5 Canvas and uses Touchy for gesture support on mobile.</p>
  </ProjectPage>
);

UqdrawPage.propTypes = {
  className: PropTypes.string
};

export default UqdrawPage;
