import 'normalize.css/normalize.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'
import Portal from 'components/Portal'
import SignIn from 'components/Portal/SignIn'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/'>
      <IndexRedirect to="portal" />
      <Route path="portal" component={Portal}>
        <IndexRedirect to="signin" />
        <Route path="signin" component={SignIn} />
      </Route>
      <Route path="app" component={App} />
    </Route>
  </Router>
  ,
  document.getElementById('root')
);
