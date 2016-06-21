import React, { Component } from 'react';
import smoothScrollTo from '../smoothScroll.js';
import Icon from '../components/Icon.jsx';
import Project from '../components/Project.jsx';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHeaderOpaque: false
    }
  }

  componentDidMount() {
    // Must wait until next tick to ensure DOM is fully initialized.
    window.setTimeout(() => this.addScrollListener(), 0);

    // Device viewport used to determine Marquee height (avoids vh unit use)
    this.setState({ viewportHeight: window.innerHeight });
  }

  componentWillUnmount() {
    this.removeScrollListener();
  }

  // Scroll listener updates state to indicate when the viewport is above or
  // below the Marquee component.
  addScrollListener() {
    this.scrollListener = this.genScrollListener(window);
    window.addEventListener('scroll', this.scrollListener);
  }

  removeScrollListener() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  // Produces a scroll listener for the given scrollingNode. This should be the
  // main scrolling node for the page (typically window).
  genScrollListener(scrollingNode) {
    const headerHeight = this.refs.header.clientHeight;
    const marqueeEnd = this.refs.projects.offsetTop;
    const buffer = 25; // transition a tad early to prevent opacity flash
    const opaqueStartPos = marqueeEnd - headerHeight - buffer;

    return () => {
      const { isHeaderOpaque } = this.state;
      const { scrollY } = scrollingNode;

      if (isHeaderOpaque && scrollY < opaqueStartPos)
        this.setState({ isHeaderOpaque: false })
      else if (!isHeaderOpaque && scrollY >= opaqueStartPos)
        this.setState({ isHeaderOpaque: true })
    };
  }

  // Scrolls the viewport to the given component specified by the ref string.
  scrollToComponent(componentRef, event) {
    event.preventDefault();
    const componentNode = this.refs[componentRef];
    smoothScrollTo(componentNode.offsetTop, window);
  }

  render() {
    const { isHeaderOpaque, viewportHeight } = this.state;
    const headerBgClass = isHeaderOpaque ? 'opaque' : '';
    const marqueeStyle = viewportHeight ? { height: viewportHeight } : null;

    return (
      <div className="Page">
        <header ref="header">
          <div className="Header-content">
            <a href="#" onClick={this.scrollToComponent.bind(this, 'projects')}>
              Projects
            </a>
            <a href="#" onClick={this.scrollToComponent.bind(this, 'about')}>
              About
            </a>
            <a href="#" onClick={this.scrollToComponent.bind(this, 'contact')}>
              Contact
            </a>
          </div>
        </header>
        {/* If nested in header the bg opacity transition causes rendered
            height of explicitally-sized parent to change (browser bug) */}
        <div className={`Header-bg ${headerBgClass}`} />

        <div className="Marquee" style={marqueeStyle}>
          <div className="Marquee-bg">
            <div className="Marquee-main">
              <div className="Marquee-content">
                <h1 className="Marquee-heading">Hi, I'm Kerrin</h1>
                <h2 className="Marquee-subheading">I'm a front-end developer from Australia who enjoys building single-page applications using modern web technologies such as React and Redux.
                <br /><br />
                I have been building thing on the the web for the past five years, and with React for the past year.
                </h2>
              </div>
            </div>
            <div className="Marquee-flexSpacer"></div>
          </div>
        </div>

        <section ref="projects" className="projects">
          <Icon size="60" icon="briefcase" viewBox="0 0 100 100" style={{ fill: '#333' }}/>
          <h3 className="Section-heading">Projects</h3>
          <div className="Section-summary"> Below you can find a sample of some of the sites & applications that I have worked on in recent times.</div>

          <Project name="squashScorer">
            <b>SquashScorer</b> is a Progressive Web App (PWA) for scoring squash matches. It uses Service Workers & a Web App Manifest to work fully offline, and allow installation as a standalone app.
          </Project>

          <Project name="player">
            <b>Player</b> is a music player built backed by the Soundcloud API. The player is built using React, Redux & redux-saga.
          </Project>

          <Project name="wallfly">
            Wallfly is a rental property management platform for owners, agents, and tenants. It provides a single touch-point for all aspects of a rental property for the three parties involved.
          </Project>

          <Project name="uqdraw">
            UQDraw is a webapp for enhancing active learning during lectures. The project was developed for the eLearning team at UQ. It allows lecturers to pose questions to the audience, and gather drawn responses from users on their phones/tablets.
          </Project>

          <Project name="ace">
            This project is a redesign concept for the Ace Driving School website. The goal of the project was to rearchitect the site so as to facilitate online bookings for the company, with the aim of reducing administrative overhead for servicing their clients.
          </Project>

          <Project name="situbusit">
            This project is a design concept for the puppy training school Situbusit. The goal of the project was to give the school an online presence, and allow users to find information about the various courses and make bookings through the online interface.
          </Project>
        </section>

        <section ref="about" className="Section--bright">
          <div className="Section-container">
          <Icon size="60" icon="person" viewBox="0 0 100 100" style={{ fill: '#333' }}/>

            <h3 className="Section-heading">About</h3>
            <div className="Section-summary">
              <p>I have been working with the web for roughly the past five years, and have been working with React for the past year or so. My main interest lies in building complex, rich client-side applications using React and other cutting-edge web technologies such as Redux.</p>

              <p>While my focus is on the front-end, I have worked at most layers of the stack and so have a fairly broad range of skills that include: UI design, front-end development (HTML, CSS, JS), backend-development (Node, PHP, JSP), and server deployment &amp; administration (AWS, Azure).</p>

              <p>I also previously ran a web-based company for a number of years, so I have a good appreciation for the business needs and motivations when developing applications.</p>
            </div>
            <table className="Table">
              <thead>
                <tr><th colSpan="2">My Preferred Technologies</th></tr>
              </thead>
              <tbody>
                <tr><td>Language</td><td><b>JavaScript (ES2015)</b></td></tr>
                <tr><td>Front-end Framework</td><td><b>React + Redux</b></td></tr>
                <tr><td>CSS Preprocessor</td><td><b>Sass</b></td></tr>
                <tr><td>Module Bundler / Build Tool</td><td><b>Webpack</b></td></tr>
                <tr><td>Testing Framework</td><td><b>Jest/Jasmine</b></td></tr>
                <tr><td>Backend web framework</td><td><b>Hapi.js</b></td></tr>
                <tr><td>Backend web server</td><td><b>Nginx</b></td></tr>
                <tr><td>Database</td><td><b>MySQL</b></td></tr>
                <tr><td>Source Control</td><td><b>Git</b></td></tr>
                </tbody>
            </table>
          </div>
        </section>

        <section ref="contact" className="Section--contact">
          <Icon size="60" icon="paperplane" viewBox="0 0 100 100" style={{ fill: '#fff' }}/>
          <h3 className="Section-heading Section-heading--light">Contact</h3>
          <div className="Section-summary Section-summary--light">To get in touch shoot me an email at <a className="Anchor Anchor--light" href="mailto:hi@kerr.in"><b>hi@kerr.in</b></a></div>
        </section>
      </div> // Page
    );
  }
}
