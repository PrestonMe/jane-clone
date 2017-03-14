import { LOGIN_USER } from './actions'

export function login (loggedIn) {
  return { type: LOGIN_USER, loggedIn: loggedIn }
}

// a function that you call and returns a correctly shaped actioncreators
// it's useufl to seprate this out into pieces using an actions
// and actionscreators file instead of putting them on the u.i. to
// avoid using these two files
