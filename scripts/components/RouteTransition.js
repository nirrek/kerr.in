import React, { PropTypes } from 'react';
import { TransitionMotion, spring, presets } from 'react-motion';

// noWobble: [170, 26], // the default
//   gentle: [120, 14],
//   wobbly: [180, 12],
//   stiff: [210, 20],
//

const springiness = [40, 7];

const getStyles = (pathname, children) => ({
  [pathname]: {
    opacity: spring(1, springiness),
    // scale: spring(1),
    children,
  }
});

const willEnter = (key, style) => ({
  opacity: spring(0, springiness),
  // scale: spring(0.95),
});

const willLeave = (key, style) => ({
  opacity: spring(0, springiness),
  // scale: spring(0.95),
});

const RouteTransition = ({ pathname, children }) => (
    <TransitionMotion
      styles={getStyles(pathname, children)}
      willEnter={willEnter}
      willLeave={willLeave}>
      {(interpolatedStyles) => (
        <div style={{ position: 'relative' }}>
          {Object.entries(interpolatedStyles).map(([key, val]) => {
            const style = {
              opacity: val.opacity,
              // transform: `scale(${val.scale})`,
              position: 'absolute',
              width: '100%',
              backgroundColor: '#fff',
            };

            return (
              <div key={key} style={style}>
                {val.children}
              </div>
            );
          })}
        </div>
      )}
    </TransitionMotion>
);

RouteTransition.PropTypes = {
  pathname: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default RouteTransition;
