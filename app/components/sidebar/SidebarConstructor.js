import { connect } from 'react-redux';
import SidebarComponent from './SidebarComponent';

function mapStateToProps(state) {
    return {
        ...state.sidebar,
    };
}

export default connect(mapStateToProps)(SidebarComponent);
