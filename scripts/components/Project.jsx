import React from 'react';
import { Link } from 'react-router';

// Project-specific configuration.
const projectConfig = {
  squashScorer: {
    logo: <img height="55" src={require('../../images/project-icon-squash.svg')} />,
    isDarkBg: true,
  },
  player: {
    logo: <img height="81" src={require('../../images/project-icon-player.svg')} />,
    isDarkBg: true,
  },
  wallfly: {
    logo: <img height="55"
               src={require('../../images/project-icon-wallfly.svg')} />,
    isDarkBg: true,
  },
  uqdraw: {
    logo: <img height="55"
               src={require('../../images/project-icon-uqdraw.min.svg')} />,
    isDarkBg: true,
  },
  ace: {
    logo: <img height="81"
               src={require('../../images/project-icon-ace-dark.min.svg')} />,
    isDarkBg: false,
  },
  situbusit: {
    logo: <img height="42"
               src={require('../../images/project-icon-situbusit.min.svg')}
               className="u-shadow" />,
    isDarkBg: true,
  },
};

const Project = ({ name, children }) => {
  const { logo, isDarkBg } = projectConfig[name];
  const linkClass = isDarkBg ? 'Button': 'Button Button--dark';

  return (
    <div className={`Project Project--${name}`}>
      {logo}
      <div className="Project-blurb">
        {children}
      </div>
      <Link to={name} className={linkClass}>
        View Project Details &rarr;
      </Link>
    </div>
  );
};

export default Project;
