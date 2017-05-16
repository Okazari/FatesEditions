import 'normalize.css/normalize.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import AppRouter from './router'

ReactDOM.render(
  <AppContainer>
    <AppRouter />
  </AppContainer>,
  document.getElementById('root'),
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./router', () => {
    //eslint-disable-next-line
    const NextApp = require('./router').default
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root'),
    )
  })
}
