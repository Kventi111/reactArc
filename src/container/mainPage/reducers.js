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

const changeUserName = (state,payload) => state.setIn(
  ['user','firstName'],
  payload
)

function secondContainerReducer(state = initialState,action) {
  switch(action) {
    case 'RUN_CONTAINER':
      return changeUserName
    default:
      return state
  }
}

export default secondContainerReducer;