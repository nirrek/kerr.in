import React, { Component } from 'react';
import RouteTransition from './RouteTransition.js';

export default ({ location, children }) => (
  <RouteTransition pathname={location.pathname}>
    {children}
  </RouteTransition>
);
