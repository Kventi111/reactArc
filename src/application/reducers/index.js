import { fromJS } from 'immutable';

const initialUserState = {
  age : "",
  firsName : "",
  lastName : "",
  phone : "",
  email : "",
  gender : "",
  type : "",
  role : ""
}

const initialState = fromJS({
  user : initialUserState
})

function secondContainerReducer(state = initialState,action) {
  switch(action) {
    case 'RUN_CONTAINER':
      return changeUserName
    default:
      return state
  }
}

export default secondContainerReducer;