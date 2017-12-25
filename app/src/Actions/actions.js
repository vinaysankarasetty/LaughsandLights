/*
 * action types
 */

import { FETCH_USER_LOCATION_PENDING,
FETCH_USER_LOCATION_FULLFILLED,
FETCH_USER_LOCATION_REJECTED,fetchUserLocation} from './userlocationactions.js'


export const ADD_USER_ADDRESS = 'ADD_USER_ADDRESS'
export const UPDATE_USER_ADDRESS = 'UPDATE_USER_ADDRESS'

/*
 * action creators
 */

export function addUserAddress(address){
	return {type: ADD_USER_ADDRESS, address}
}
export function updateUserAddress(addressModified){
	return {type: UPDATE_USER_ADDRESS, addressModified}
}

export {FETCH_USER_LOCATION_PENDING, FETCH_USER_LOCATION_FULLFILLED, FETCH_USER_LOCATION_REJECTED,fetchUserLocation}