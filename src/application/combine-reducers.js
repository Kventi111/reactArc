import application from './reducers';
import mainContainerReducer from '../container/mainPage/reducers';
import { combineReducers } from 'redux'


const createReducer = asyncReducer => {
  return combineReducers({
    application,
    mainContainerReducer,
    ...asyncReducer
  })
}

export default createReducer