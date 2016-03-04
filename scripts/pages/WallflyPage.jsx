import React, { PropTypes } from 'react';
import ProjectPage from '../components/ProjectPage.jsx';

/**
 * Wallfly Page
 * @param  {String} props.className A CSS hook for styling the project page.
 */
const WallflyPage = () => (
  <ProjectPage project="wallfly">
    <h3>Core Technologies</h3>
    <ul>
      <li>React</li>
      <li>Node + Hapi.js</li>
      <li>ES2015 (via Babel)</li>
      <li>Webpack</li>
    </ul>

    <h3>Project Overview</h3>
    <p>Wallfly is property rental management platform for owners, agents, and tenants. Tenants are able to get access to financial histories, make payments, lodge repair requests, direct message with their agent, etc. Agents have features for managing all of their properties, and for interacting with both the tenants and owners of the property. The owners have similar tools to the tenant, but for the purposes of being able to easily keep tabs of their rental property when and where they need.</p>

    <p>The app was built as a high-fidelty, proof-of-concept prototype for a client in the rental industry who was prototyping a number of different business concepts he was considering pursuing.</p>

    <p>The app is built using React on the frontend and a Node.js backend (using the Hapi.js web framework). The backend uses a typical REST architecture, with a SQL database as the persistence layer.</p>
  </ProjectPage>
);

WallflyPage.propTypes = {
  className: PropTypes.string
};

export default WallflyPage;
