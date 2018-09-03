import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { library } from '@fortawesome/fontawesome-svg-core'
import * as freeSVG from '@fortawesome/free-solid-svg-icons'
import AppRouter from './router'

// font-awesome initialization
Object.values(freeSVG)
  .filter(fa => !!fa.icon)
  .forEach(fa => library.add(fa))

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
