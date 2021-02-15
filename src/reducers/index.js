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
export default combineReducers({
    trips,
    destinations,
    displayModal,
    myAccount
})