export function getTripsList() {
    return async (dispatch) => {
      const res = await fetch("https://gist.githubusercontent.com/Pinois/36bb5fbf9b6a686f0baf4006dd137bca/raw/a40d8b3f696a75f388db286d57bdd05a925fa0e7/trips.json");
      const trips = await res.json();
      console.log(trips);
      dispatch({
        type: "GET_TRIPS",
        value: trips
      })
    }
  }
  export function removeTrip(seatId) {
    return {
      type: 'REMOVE_tRIP',
      payload: seatId,
    };
  }
  
  export function addReservation(seat) {
    return {
      type: 'ADD_RESERVATION',
      payload: seat,
    };
  }
  export function openModal(modal){
    return {
      type: "OPEN_MODAL",
      payload: modal
    }
  }
  export function closeModal(modal){
    return {
      type: "CLOSE_MODAL",
      payload: modal
    }
  }
  