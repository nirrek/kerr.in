import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import createHistory from 'history/lib/createBrowserHistory';
import useScroll from 'scroll-behavior/lib/useSimpleScroll';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App.js';
import MainPage from './pages/MainPage.jsx';
import SquashScorerPage from './pages/SquashScorerPage.jsx';
import PlayerPage from './pages/PlayerPage.jsx';
import WallflyPage from './pages/WallflyPage.jsx';
import UqdrawPage from './pages/UqdrawPage.jsx';
import AcePage from './pages/AcePage.jsx';
import SitubusitPage from './pages/SitubusitPage.jsx';

require('../styles/main.scss');

const history = useScroll(createHistory)();

render(
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={MainPage} />
      <Route path="squashScorer" component={SquashScorerPage} />
      <Route path="player" component={PlayerPage} />
      <Route path="wallfly" component={WallflyPage} />
      <Route path="uqdraw" component={UqdrawPage} />
      <Route path="ace" component={AcePage} />
      <Route path="situbusit" component={SitubusitPage} />
    </Route>
  </Router>,
  document.getElementById('root')
);
