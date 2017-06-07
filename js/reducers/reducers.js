import { LOGIN_USER, LOGOUT_USER, UPDATE_CART_TOTAL } from '../actions/actions'

const DEFAULT_STATE = {
  redirectUrl: '/',
  loggedIn: false,
  userId: null,
  userName: null,
  cartItems: null
}

const logon = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {loggedIn: action.loggedIn, userName: action.userName, userId: action.userId, cartItems: action.cartItems})
  return newState
}

const logout = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    redirectUrl: '/',
    loggedIn: false,
    userId: null,
    userName: null,
    cartItems: null})
  return newState
}

const updateCartTotal = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {cartItems: action.cartItems})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return logon(state, action)
    case LOGOUT_USER:
      return logout(state, action)
    case UPDATE_CART_TOTAL:
      return updateCartTotal(state, action)
    default:
      return state
  }
}

export default rootReducer
