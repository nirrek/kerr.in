import React from 'react';
import { PropTypes } from 'react';

import Icon from '../components/Icon.jsx';

// Extract this to its own file.
const Button = ({ href, icon, color, children }) => {
  if (icon) {
    const style = color ? { color } : null;
    var iconComponent = <Icon icon={icon} ctx="button" style={style} />
  }

  return (
    <a className="Button" href={href} target="_blank">
      {iconComponent}
      {children}
    </a>
  );
};

Button.PropTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
};

const ProjectMarquee = ({ project }) => {
  const { icon, iconHeight, website, github } = projectDetails[project];
  const style = styles[project];

  return (
    <div className='ProjectMarquee' style={style.ProjectMarquee}>
      <img className="Project-icon" height={iconHeight} src={icon} />
      <div className="Project-actions">
        {website && (
          <Button href={website} icon="open-in-new" color="#fff">
            View Site
          </Button>
        )}
        <Button href={github} icon="post-github" color="#fff">
          View the Code
        </Button>
      </div>
    </div>
  );
}

const projectDetails = {
  squashScorer: {
    icon: require('../../images/project-icon-squash.svg'),
    iconHeight: 55,
    website: 'http://squashscorer.surge.sh',
    github: 'https://github.com/nirrek/squash-scorer',
  },
  player: {
    icon: require('../../images/project-icon-player.svg'),
    iconHeight: 80,
    website: 'http://player.surge.sh',
    github: 'https://github.com/nirrek/player',
  },
  wallfly: {
    icon: require('../../images/project-icon-wallfly.svg'),
    iconHeight: 55,
    website: 'http://wallfly.surge.sh',
    github: 'https://github.com/nirrek/wallfly',
  },
  uqdraw: {
    icon: require('../../images/project-icon-uqdraw.min.svg'),
    iconHeight: 55,
    // website: 'http://uqdraw.co/?demo=true',
    github: 'https://github.com/nirrek/uqdraw',
  },
  ace: {
    icon: require('../../images/project-icon-ace.min.svg'),
    iconHeight: 80,
    website: 'http://nirrek.github.io/ace-driving-school-redesign',
    github: 'https://github.com/nirrek/ace-driving-school-redesign',
  },
  situbusit: {
    icon: require('../../images/project-icon-situbusit.min.svg'),
    iconHeight: 45,
    website: 'http://nirrek.github.io/situbusit/',
    github: 'https://github.com/nirrek/situbusit',
  }
};

const styles = {
  squashScorer: {
    ProjectMarquee: {
      backgroundColor: '#5CD68E',
    }
  },
  player: {
    ProjectMarquee: {
      backgroundColor: '#0097ff',
    }
  },
  wallfly: {
    ProjectMarquee: {
      backgroundColor: '#2ECC71',
    }
  },
  uqdraw: {
    ProjectMarquee: {
      backgroundColor: '#5C42AB',
    }
  },
  ace: {
    ProjectMarquee: {
      backgroundColor: '#202020',
    }
  },
  situbusit: {
    ProjectMarquee: {
      backgroundColor: '#CE5646',
    }
  }
};

export default ProjectMarquee;
