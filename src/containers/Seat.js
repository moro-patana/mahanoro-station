import {connect} from 'react-redux';
import Seat from "../components/Seat"
import {getTripsList} from "../actions/index"

function mapStateToProps(state){
    return {
        trips: state.trips,
    }
}
const mapDispatchToProps = {
    getTripsList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Seat)