import React from 'react';
import Login from '../login/LoginConstructor';
import {
    AppBar,
    IconButton,
} from 'material-ui';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

function Header(props) {
    return (
        <AppBar
            title="Title"
            iconElementLeft={<IconButton onClick={props.toogleSidebar}><NavigationMenu /></IconButton>}
            iconElementRight={props.notExist ? <Login {...props} /> : null}
        />
    );
}

Header.propTypes = {
    notExist: React.PropTypes.bool,
    email: React.PropTypes.string.isRequired,
    photo: React.PropTypes.string.isRequired,

    toogleSidebar: React.PropTypes.func.isRequired,
};

export default Header;
