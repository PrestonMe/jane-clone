import { SET_SEARCH_TERM } from './actions'

export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm: searchTerm }

}
// a function that you call and returns a correctly shaped actioncreators
// it's useufl to seprate this out into pieces using an actions
// and actionscreators file instead of putting them on the u.i. to
// avoid using these two files
