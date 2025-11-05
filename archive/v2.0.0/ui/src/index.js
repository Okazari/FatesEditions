import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { FontAwesome } from 'services'
import AppRouter from './router'

FontAwesome.init()

ReactDOM.render(
  (
    <AppContainer>
      <AppRouter />
    </AppContainer>
  ),
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
