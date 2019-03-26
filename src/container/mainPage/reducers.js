import { fromJS } from 'immutable';

const initialCarState = {
  color : "",
  mark : "",
  type : "",
  speed : "", 
  weight : ""
}

const initialState = fromJS({
  cars : initialCarState
})


function carContainerReducer(state = initialState,action) {
  switch(action) {
    case 'RUN_CONTAINER':
      return changeUserName
    default:
      return state
  }
}

export default carContainerReducer;