import { combineReducers } from "redux";
function trips(trips=[], action) {
    switch(action.type) {
        case "GET_TRIPS": 
        return action.value
        default:
            return trips;
    }
}
function destinations(state=[], action) {
    return state;
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
function myAccount(state=[], action) {
    return state;
}
function bookedSeats(state=[], action) {
    switch(action.type) {
        case "PICK_SEAT":
            return [...state, action.payload]
        case 'REMOVE_CART_ITEM':
            const newCartWithoutSpecificItem = state.filter(
                (item) => item.id !== action.payload
                );
                return [...newCartWithoutSpecificItem];
        default:
            return state;
    }
}

export default combineReducers({
    trips,
    destinations,
    displayModal,
    myAccount,
    bookedSeats
})