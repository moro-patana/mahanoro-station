import {connect} from 'react-redux';
import SelectedTrip from '../components/SelectedTrip';

function mapStateToProps(state){
    return {
        selectedSeats: state.selectedSeats,
    }
}

export default connect(mapStateToProps, null)(SelectedTrip)