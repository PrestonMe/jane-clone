import { LOGIN_USER, LOGOUT_USER } from '../actions/actions'

const DEFAULT_STATE = {
  redirectUrl: '/',
  loggedIn: false,
  userId: null,
  userName: null,
  cartItems: null
}

const logon = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {loggedIn: action.loggedIn, userName: action.userName, userId: action.userId})
  return newState
}
                    // vv if state is undefined then set state
                    // to default_state, this is an example
                    // of an es6 default paraemeter
const logout = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {loggedIn: action.loggedIn, userName: action.userName, userId: action.userId})
  console.log('state', newState);
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return logon(state, action)
    case LOGOUT_USER:
      return logout(state, action)
    default:
      return state
  }
}

export default rootReducer
