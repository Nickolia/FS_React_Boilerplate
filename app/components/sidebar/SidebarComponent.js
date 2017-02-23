import React from 'react';
import {
    Link,
} from 'react-router';
import {
    AppBar,
    Drawer,
    IconButton,
    Paper,
    Menu,
    MenuItem,
} from 'material-ui';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import SignIn from '../forms/signIn/SignIn';
import styles from './Sidebar.css';

function Sidebar(props) {
    return (
        <div>
            <Drawer
                docked={false}
                width={300}
                open={props.isOpened}
                onRequestChange={props.toogleSidebar}
            >

                <Paper
                    rounded={false}
                    zDepth={1}
                    className={styles.sidebar_form}
                >
                    <SignIn />
                    <AppBar
                        iconElementLeft={null}
                        iconElementRight={<IconButton onClick={props.toogleSidebar}><ChevronLeft /></IconButton>}
                    />

                </Paper>

                <Paper>
                    <Menu>
                        {props.links.map((link, index) => {
                            return (
                                <MenuItem
                                    key={index}
                                    containerElement={<Link to={link.to} />}
                                    primaryText={link.name}
                                />
                            );
                        })}
                    </Menu>
                </Paper>
            </Drawer>
        </div>
    );
}

Sidebar.propTypes = {
    isOpened: React.PropTypes.bool.isRequired,
    links: React.PropTypes.array.isRequired,

    toogleSidebar: React.PropTypes.func,
};

export default Sidebar;
