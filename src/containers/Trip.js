import {connect} from 'react-redux';
import Trip from '../components/Trip';
import {getTripsList} from "../actions/index"
import {openModal} from "../actions/index"

function mapStateToProps(state){
    return {
        trips: state.trips,
        selectedSeats: state.selectedSeats
    }
}
const mapDispatchToProps = {
    getTripsList,
    toggleModal: openModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Trip)