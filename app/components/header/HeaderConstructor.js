import { connect } from 'react-redux';
import HeaderComponent from './HeaderComponent';

function mapStateToProps(state) {
    return {
        ...state.user,
    };
}

export default connect(mapStateToProps)(HeaderComponent);
