import {fromJS} from 'immutable';

const initialAppState = {
  version : 'light', 
  theme : "sunset"
}

export default function globalData(state = initialAppState, action) {
  switch (action.type) {
    case 'TEST':
      return state
    default:
      return state
  }
}