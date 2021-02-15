import {connect} from 'react-redux';
import City from '../components/City';
import {getTripsList} from "../actions/index"

function mapStateToProps(state){
    return {
        trips: state.trips,
    }
}
const mapDispatchToProps = {
    getTripsList,
}

export default connect(mapStateToProps, mapDispatchToProps)(City)