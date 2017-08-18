import {createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
//import movies from './reducers/movies'

// const reducers = combineReducers({
//   movies
// })

const middleware = [thunk]

export default createStore(
  reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
)
