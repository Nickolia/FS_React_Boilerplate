import React from 'react';
import {
    Link,
} from 'react-router';
import { FlatButton } from 'material-ui';

function Login() {
    return (
        <span>
            <FlatButton
                containerElement={<Link to="/login" />}
                label="Sign in"
            />
            <FlatButton
                containerElement={<Link to="/registration" />}
                label="Sign up"
            />
        </span>
    );
}

export default Login;
