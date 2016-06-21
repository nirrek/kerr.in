import React, { PropTypes } from 'react';
import ProjectPage from '../components/ProjectPage.jsx';

/**
 * SquashScorerPage Component
 * @param  {String} props.className A CSS hook for styling the project page.
 */
const SquashScorerPage = () => (
  <ProjectPage project="squashScorer">
    <h3>Core Technologies</h3>
    <ul>
      <li>React</li>
      <li>Service Workers</li>
      <li>Cache API</li>
      <li>Web App Manifest</li>
      <li>ES2015 (via Babel)</li>
      <li>Webpack</li>
    </ul>

    <h3>Project Overview</h3>
    <p>SquashScorer is a simple app for scoring squash matches. It was built for scoring the weekly round-robin squash matches at my squash club. It is designed specifically for mobile consumption due to its context of use.</p>

    <p>It is novel in the fact that it is built as a <a target="_blank" href="https://developers.google.com/web/progressive-web-apps/">Progressive Web App</a> (PWA) leveraging a bunch of bleeding-edge browser technologies (most notably, Service Workers, Cache API, Web App Manifest) to provide a fully offline-capable app experience. For Android users this additionally means that the browser will prompt the user to install the app by displaying an app install banner after sufficient interaction with the site.</p>
  </ProjectPage>
);

SquashScorerPage.propTypes = {
  className: PropTypes.string
};

export default SquashScorerPage;
