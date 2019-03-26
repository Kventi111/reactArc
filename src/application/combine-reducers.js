import application from './reducers';
<<<<<<< HEAD
import mainContainerReducer from '../container/mainPage/reducers';
import { combineReducers } from 'redux'

=======
// import cars from '../container/mainPage/reducers';
import { combineReducers } from 'redux'

// export default function createReducer(asyncReducer) {
//   return combineReducers({
//     application,
//     ...asyncReducer
//   })
// }
>>>>>>> 3bd45f53d6077a5b9bb4a2ee5110bb61d5a86c5c

const createReducer = asyncReducer => {
  return combineReducers({
    application,
<<<<<<< HEAD
    mainContainerReducer,
=======
>>>>>>> 3bd45f53d6077a5b9bb4a2ee5110bb61d5a86c5c
    ...asyncReducer
  })
}

export default createReducer