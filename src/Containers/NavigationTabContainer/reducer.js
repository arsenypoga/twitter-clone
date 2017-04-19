import { SET_ACTIVE_PAGE } from './constants'
import { List, Map } from 'immutable'

const navigationItems = List([
  Map({name: "Home", id: 0, destination: "/", active: true}),
  Map({name: "Moments", id: 1, destination: "/moments", active: false}),
  Map({name: "Notiffications", id:  2, destination: "/notiffications", active: false}),
  Map({name: "Messages", id: 3, destination: "/messages", active: false})
])



const getNavigationItems = (state = navigationItems, action) => {
  switch (action.type) {
    case SET_ACTIVE_PAGE:
      if(action.page === 0) {
        return navigationItems;
      } else {
      return navigationItems
        .set(0, state.get(0).update("active", () => false))
        .set(action.page, state.get(action.page).update("active", () => true))
      }
    default:
      return state;
  }
}

export default getNavigationItems
