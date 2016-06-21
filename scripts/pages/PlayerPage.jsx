import React, { PropTypes } from 'react';
import ProjectPage from '../components/ProjectPage.jsx';

/**
 * PlayerPage Component
 * @param  {String} props.className A CSS hook for styling the project page.
 */
const PlayerPage = () => (
  <ProjectPage project="player">
    <h3>Core Technologies</h3>
    <ul>
      <li>React</li>
      <li>Redux + redux-saga</li>
      <li>ES2015 (via Babel)</li>
      <li>Webpack</li>
    </ul>

    <h3>Project Overview</h3>
    <p><b>Player</b> is a music player built using the Soundcloud API. The player is built using React, Redux, & redux-saga.</p>
    <p>This is a work-in-progress personal project. It is primarily motivated by wanting to play with using redux-saga for handling side effects in a Redux-based application.</p>

  </ProjectPage>
);

PlayerPage.propTypes = {
  className: PropTypes.string
};

export default PlayerPage;
