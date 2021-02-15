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
    return state
}
export default combineReducers({
    trips,
    destinations,
    displayModal
})