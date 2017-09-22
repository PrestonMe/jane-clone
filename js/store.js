import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/reducers'

const store = createStore(rootReducer, compose(applyMiddleware(thunk),
  typeof window === 'object' &&
  typeof window.devToolsExtension !== 'undefined'
  ? window.devToolsExtension() : (f) => f
  // for getting redux devtools to work
  // (f) => f does nothing if your not in the browser
  // or if devtools are not available
))

export default store
