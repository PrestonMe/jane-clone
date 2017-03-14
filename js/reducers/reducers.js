import { LOGIN_USER } from '../actions/actions'

const DEFAULT_STATE = {
  redirectUrl: '/',
  loggedIn: false
}

const logon = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {loggedIn: action.loggedIn})
  return newState
}
                    // vv if state is undefined then set state
                    // to default_state, this is an example
                    // of an es6 default paraemeter
const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return logon(state, action)
    default:
      return state
  }
}

export default rootReducer
