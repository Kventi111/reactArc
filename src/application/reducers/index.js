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

<<<<<<< HEAD
=======
const changeUserName = (state,payload) => state.setIn(
  ['user','firstName'],
  payload
)

>>>>>>> 3bd45f53d6077a5b9bb4a2ee5110bb61d5a86c5c
function secondContainerReducer(state = initialState,action) {
  switch(action) {
    case 'RUN_CONTAINER':
      return changeUserName
    default:
      return state
  }
}

export default secondContainerReducer;