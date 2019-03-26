import application from './reducers';
// import cars from '../container/mainPage/reducers';
import { combineReducers } from 'redux'

// export default function createReducer(asyncReducer) {
//   return combineReducers({
//     application,
//     ...asyncReducer
//   })
// }

const createReducer = asyncReducer => {
  return combineReducers({
    application,
    ...asyncReducer
  })
}

export default createReducer