import { combineReducers } from 'redux'
import {
  ADD_USER_ADDRESS,
  UPDATE_USER_ADDRESS
} from './../Actions/actions'
import userLocationReducer from './userlocationreducer.js'


function userAddress(state = {}, action){
  switch (action.type){
    case ADD_USER_ADDRESS:
      return Object.assign({}, state, action.address)
    case UPDATE_USER_ADDRESS:
      return Object.assign({}, state, action.addressModified)
    default:
      return state
  }

}

const reducer = combineReducers({
  userAddress: userAddress,
  userLocation: userLocationReducer
})

export default reducer