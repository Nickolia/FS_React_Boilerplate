import React from 'react';
import { render } from 'react-dom';
import {
    browserHistory,
    Router,
} from 'react-router';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import appStore from './utilits/appStore';
import reducer from './reducers';
import './main.css';
import baseName from './utilits/baseName';
import rootRoute from './routes/Router';
import injectTapEventPlugin from 'react-tap-event-plugin';

appStore.initStore(reducer, window.pageConfig);

injectTapEventPlugin();

render(
    <Provider store={appStore.store}>
        <MuiThemeProvider>
            <Router
                history={baseName(browserHistory, __dirname)}
                routes={rootRoute}
            />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
