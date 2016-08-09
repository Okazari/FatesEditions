import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import Portal from 'components/Portal';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/'>
      <IndexRedirect to="portal" />
      <Route path="portal" component={Portal} />
      <Route path="app" component={App} />
    </Route>
  </Router>
  ,
  document.getElementById('root')
);
