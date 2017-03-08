import 'normalize.css/normalize.css'

import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './router'
import { AppContainer } from 'react-hot-loader'
ReactDOM.render(
  <AppContainer>
    <AppRouter/>
  </AppContainer>,
  document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./router', () => {
    const NextApp = require('./router').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
