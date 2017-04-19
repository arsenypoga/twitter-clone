import { combineReducers, createStore } from 'redux'
import getNavigationItems from './Containers/NavigationTabContainer/reducer'


const combinedReducers = combineReducers({getNavigationItems})

export const store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
