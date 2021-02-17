import { combineReducers } from "redux";
function trips(trips=[], action) {
    switch(action.type) {
        case "GET_TRIPS": 
        return action.value
        default:
            return trips;
    }
}
function cities(state=[], actions) {
    return state
}
function account(state=[], actions) {
    return state
}
function selectedSeats(state = [], action) {
	switch (action.type) {
		case 'ADD_RESERVATION': {
			return [...state, action.payload];
		}
		case 'REMOVE_TRIP':
			const newCartWithoutSpecificItem = state.filter(
				(item) => item.id !== action.payload
			);
			return [...newCartWithoutSpecificItem];
		default:
			return state;
	}
}
function displayModal(state=false, action) {
    switch(action.type) {
        case "OPEN_MODAL":
          return !state;
        case "CLOSE_MODAL":
          return state = false;
        default:
          return state;
      }
}
export default combineReducers({
    trips,
    cities,
    account,
    selectedSeats,
    displayModal
})