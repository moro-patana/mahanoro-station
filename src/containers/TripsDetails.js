import {connect} from "react-redux"
import TripsDetails from "../components/TripsDetails"
import {openModal} from "../actions/index"

const mapDispatchToProps = {
    toggleModal: openModal
}
export default connect(null, mapDispatchToProps)(TripsDetails)