import {
  FETCH_USER_LOCATION_PENDING,
  FETCH_USER_LOCATION_FULLFILLED,
  FETCH_USER_LOCATION_REJECTED

} from './../Actions/actions'

function userLocationReducer(state = {}, action){
  switch (action.type){
    case FETCH_USER_LOCATION_PENDING:
      return Object.assign({}, state, action.payload, {userLocationFetched: true})
    case FETCH_USER_LOCATION_FULLFILLED:{
    	let addressData = action.payload.results[0];
    	let address = {};
        address.formattedAddress = addressData.formatted_address;
        addressData["address_components"].forEach(function(item, index){
          if(item.types.includes("postal_code")){
            address.postalCode = item.long_name;
          }else if(item.types.includes("country")){
            address.countryName = item.long_name;
            address.countryCode = item.short_name;

          }else if(item.types.includes("administrative_area_level_1")){
            address.stateName = item.long_name;
            address.stateCode = item.short_name;

          }else if(item.types.includes("locality")){
            address.cityName = item.long_name;
            address.cityCode = item.short_name;
          }
          

        });
      return Object.assign({}, state, address, {userLocationFetched: true})
    }
    case FETCH_USER_LOCATION_REJECTED:
    	return Object.assign({}, state, action.payload, {userLocationFetched: false})
    default:
      return state
  }

}

export default userLocationReducer