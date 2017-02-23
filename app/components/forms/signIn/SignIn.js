import React from 'react';
import {
    TextField,
    Checkbox,
    RaisedButton,
} from 'material-ui';
import {
    Grid,
    Row,
    Col,
} from 'react-flexbox-grid/lib';
import styles from './SignIn.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Grid
                    fluid
                    className={styles.grid}
                >
                    <Row>
                        <Col type="row" xs={12}>
                            <TextField
                                hintText="EMAIL"
                            />
                        </Col>
                        <Col type="row" xs={12}>
                            <TextField
                                hintText="PASSWORD"
                            />
                        </Col>
                        <Col type="row" xs={8}>
                            <Checkbox
                                label="Remember me"
                            />
                        </Col>
                        <Col type="row" xs={4}>
                            <RaisedButton label="Sign In" primary={true} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;
