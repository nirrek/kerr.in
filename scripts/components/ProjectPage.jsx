import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Icon from './Icon.jsx';
import ProjectMarquee from './ProjectMarquee.jsx';

/**
 * Pops the current location from the browser history stack.
 * @param  {Object} event   Click event object.
 * @param  {Object} history History object for React Router.
 */
const goBack = (event, history) => {
  event.preventDefault();
  history.goBack();
}

/**
 * ProjectPage is the skeleton components for all project pages. Contents for
 * the various projects are passed as children to this component.
 *
 * @param  {String} props.project     The string identifier for the project.
 * @param  {String} props.className   CSS hook for the project wrapper.
 * @param  {ReactNode} props.children Contents for the project.
 * @param  {Object} context.history   History object for React Router.
 */
const ProjectPage = ({ project, className='', children }, { history }) => {
  const cssClassList = `Page ${className}`;
  const onBackClick = (event) => goBack(event, history);

  return (
    <div className={cssClassList} style={{ zIndex: 2 }}>
      <ProjectMarquee project={project} />
      <a href="#" className="Page-Closer" onClick={onBackClick}>
        <Icon icon="arrow-back" />
      </a>
      <div className="Project-Overview">
        {children}
      </div>
    </div>
  );
}

ProjectPage.propTypes = {
  project: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

ProjectPage.contextTypes = {
  history: PropTypes.object,
};

export default ProjectPage;
