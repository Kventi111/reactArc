import { fromJS } from 'immutable';

const initialCarState = {
  color : "",
  mark : "",
  type : "",
  speed : "", 
  weight : ""
}

const initialState = fromJS({
<<<<<<< HEAD
  cars : initialCarState
=======
  car : initialCarState
>>>>>>> 3bd45f53d6077a5b9bb4a2ee5110bb61d5a86c5c
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