import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux';
import createLogger from 'redux-logger';
import asyncMiddleware from './middlewares/asyncMiddleware';
import * as $ from 'jquery';
import {
    API_GET_REQUEST,
    API_GET_SUCCESS,
    API_GET_ERROR,
    API_POST_REQUEST,
    API_POST_SUCCESS,
    API_POST_ERROR,
    INTERVAL_TICK,
} from '../constants/ActionTypes';
let instance = null;

class Store {
    constructor() {
        if (!instance) {
            instance = this;
        }

        this.store = null;

        return instance;
    }

    initStore(rootReducer, defaultState) {
        const getApi = (methodName, methodParams) => {
            return $.get.call(methodName, methodParams);
        };
        const postApi = (methodName, methodParams) => {
            return $.post.call(methodName, methodParams);
        };

        const middleware = [
            asyncMiddleware(
                getApi,
                API_GET_REQUEST,
                API_GET_SUCCESS,
                API_GET_ERROR
            ),
            asyncMiddleware(
                postApi,
                API_POST_REQUEST,
                API_POST_SUCCESS,
                API_POST_ERROR
            ),
        ];

        if (window.__DEV__) {
            middleware.push(createLogger({
                duration: true,
                predicate: (getState, action) => action.type !== INTERVAL_TICK,
            }));
        }

        this.store = createStore(rootReducer, defaultState, compose(
            applyMiddleware(...middleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ));
    }
}

const appStore = new Store();

export default appStore;
