import { LOGIN_USER, LOGOUT_USER, UPDATE_CART_TOTAL } from './actions'

export function login (loggedIn, fullName, userId) {
  return { type: LOGIN_USER, loggedIn: loggedIn, userName: fullName, userId: userId }
}

export function logout () {
  return {type: LOGOUT_USER, loggedIn: null, userName: null, userId: null}
}

export function updateQty (qty) {
  return {type: UPDATE_CART_TOTAL, cartItems: qty}
}
// a function that you call and returns a correctly shaped actioncreators
// it's useufl to seprate this out into pieces using an actions
// and actionscreators file instead of putting them on the u.i. to
// avoid using these two files
