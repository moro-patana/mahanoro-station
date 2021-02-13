import {connect} from 'react-redux';
import Destination from '../components/Destination';
import {getTripsList} from "../actions/index"

function mapStateToProps(state){
    return {
        trips: state.trips,
    }
}
const mapDispatchToProps = {
    getTripsList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Destination)