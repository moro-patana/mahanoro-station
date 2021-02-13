import { combineReducers } from "redux";
function trips(trips=[], action) {
    switch(action.type) {
        case "GET_TRIPS": 
        return action.value
        default:
            return trips;
    }
}
export default combineReducers({
    trips
})