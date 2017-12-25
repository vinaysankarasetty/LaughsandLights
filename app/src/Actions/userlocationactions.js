import axios from 'axios'
export const FETCH_USER_LOCATION_PENDING = 'FETCH_USER_LOCATION_PENDING'
export const FETCH_USER_LOCATION_FULLFILLED = 'FETCH_USER_LOCATION_FULLFILLED'
export const FETCH_USER_LOCATION_REJECTED = 'FETCH_USER_LOCATION_REJECTED'

export function fetchUserLocation(){
	let googleGeoAPIKey = "AIzaSyC4Knz3lGy2kN3dpW98sbnw8eo9-9CSnXw";
	return function(dispatch){
		navigator.geolocation.getCurrentPosition(function(position) {
			let lat = position.coords.latitude;
			let lng = position.coords.longitude;
			axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&key='+googleGeoAPIKey)
			.then((response)=>{
				dispatch(userLocationFetched(response.data));
			})
			.catch((err)=>{
				dispatch(fetchUserLocationFailed(err));
			});
		})

	}
}

export function userLocationFetched(address){
	return {type: FETCH_USER_LOCATION_FULLFILLED, payload: address}
}
export function fetchUserLocationFailed(err){
	return {type: FETCH_USER_LOCATION_REJECTED, payload: err}
}
