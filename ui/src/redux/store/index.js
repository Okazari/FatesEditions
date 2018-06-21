import { createStore } from 'redux'
import rootReducer from 'redux/reducers'

const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState)
  // Enable Hot Module Reducers Reload (needed since v2.x.x)
  // TODO: same behavior without require ? :D
  // if (module.hot) {
  //   module.hot.accept('redux/reducers', () => {
  //     const nextRootReducer = require('redux/reducers')
  //     store.replaceReducer(nextRootReducer)
  //   })
  // }
  return store
}

export default configureStore
